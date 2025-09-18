import { Router } from 'express';
import fs from 'fs';
import type { Request, Response } from 'express';
import path from 'path';

// Configure where to store replay files
const replayDirectory = path.join(import.meta.dirname, 'replays');
if (!fs.existsSync(replayDirectory)) {
  fs.mkdirSync(replayDirectory);
}

const router : Router  = Router();

// Route to start a new replay session
router.post('/replay/:sessionNameOverride', (req, res) => {
  const sessionName = req.params.sessionNameOverride;
  const sessionDir = path.join(replayDirectory, sessionName);

  // Create a directory for this session
  fs.mkdir(sessionDir, { recursive: true }, (err) => {
    if (err) {
      console.error(`Failed to create directory for session ${sessionName}:`, err);
      return res.status(500).send('Error starting replay session');
    }

    console.log(`Started new replay session: ${sessionName}`);

    // Respond with success
    res.status(200).json({
      message: `Session ${sessionName} started successfully.`
    });
  });
});

// Route to upload replay data chunks
router.put('/replay/:sessionNameOverride/:fileId.replaychunk', (req, res) => {
  const { sessionNameOverride, fileId } = req.params;
  const sessionDir = path.join(replayDirectory, sessionNameOverride);
  const chunkPath = path.join(sessionDir, `${fileId}.replaychunk`);

  if (!fs.existsSync(sessionDir)) {
    return res.status(404).send('Session not found.');
  }

  const writeStream = fs.createWriteStream(chunkPath);

  // Pipe the request stream directly to a file to handle large binary data efficiently
  req.pipe(writeStream);

  req.on('end', () => {
    console.log(`Received chunk ${fileId} for session ${sessionNameOverride}`);
    res.status(200).send('Chunk saved successfully.');
  });

  req.on('error', (err) => {
    console.error(`Error saving chunk ${fileId}:`, err);
    res.status(500).send('Error saving chunk.');
  });
});

// Route to search for available replays
router.get('/replay/search', (req, res) => {
  fs.readdir(replayDirectory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Failed to list replays:', err);
      return res.status(500).send('Error retrieving replay list.');
    }

    // Filter for directories (each directory represents a session)
    const sessions = files
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    res.status(200).json({ replays: sessions });
  });
});

// Route to download a specific replay chunk
router.get('/replay/:sessionNameOverride/:fileId.replaychunk', (req, res) => {
  const { sessionNameOverride, fileId } = req.params;
  const chunkPath = path.join(replayDirectory, sessionNameOverride, `${fileId}.replaychunk`);

  if (fs.existsSync(chunkPath)) {
    res.download(chunkPath);
  } else {
    res.status(404).send('Replay chunk not found.');
  }
});

export default router;
