import 'dotenv/config'; // Load .env file for the CLI
import express from 'express';
import multer from 'multer';
import { MikroORM, RequestContext, EntityManager  } from '@mikro-orm/postgresql';
import config from './mikro-orm.config.ts';
import path from 'path';
import apiRoutes from './routes/api.ts'; // Import API routes

// __dirname Polyfill for ES Modules
const __dirname = import.meta.dirname;

// Configure Multer for disk storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage: storage });

const app = express();
const port = process.env.SERVER_PORT || 3000;
export const orm = await MikroORM.init(config);

async function initializeMikroORM() {
    const em = orm.em as EntityManager;
    // const qb = em.createQueryBuilder(...);

    app.use((req, res, next) => {
        RequestContext.create(orm.em, next);
    });

    app.use(express.json()); // For parsing JSON request bodies

    // Serve static files from the React app's build output in production
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../build')));
    }

    // API Routes
    app.use('/api', apiRoutes);

    // File upload route
    app.post('/upload', upload.single('myFile'), (req, res) => {
        // 'myFile' should match the name used in formData.append() on the frontend
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        res.status(200).send('File uploaded successfully!');
    });

    // Catch-all route to serve the React app's index.html in production
    if (process.env.NODE_ENV === 'production') {
        app.get('/{*splat}', (req, res) => {
            res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
        });
    }

    // Handle undefined routes
    app.use((req, res, next) => {
        res.status(404).send('Sorry, that page cannot be found!');
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

initializeMikroORM();