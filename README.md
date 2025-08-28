<h1 align="center">Anima</h1>

<p align="center">
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/commits/master">
    <img src="https://vercelbadge.vercel.app/api/Voidware-Prohibited/targetvector-api-backend-stack?plastic"
         alt="Build Status">
    </a>
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/commits/master">
        <img src="https://img.shields.io/github/actions/workflow/status/Voidware-Prohibited/targetvector-api-backend-stack/test.yml?style=flat&label=test" alt="GitHub Actions Workflow Status">
    </a>
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/commits/master">
    <img src="https://img.shields.io/github/last-commit/Voidware-Prohibited/targetvector-api-backend-stack.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    </a>
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/issues">
    <img src="https://img.shields.io/github/issues-raw/Voidware-Prohibited/targetvector-api-backend-stack.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    </a>
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/Voidware-Prohibited/targetvector-api-backend-stack.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
    </a>
    <a href="https://github.com/Voidware-Prohibited/targetvector-api-backend-stack/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg"
         alt="MIT License">
    </a>
</p>
<p align="center">
    <a href="https://github.com/sponsors/colorindarkness">
    <img src="https://img.shields.io/github/sponsors/colorindarkness.svg?style=flat-square&logo=github&logoColor=white"
         alt="Become a Sponsor">
    </a>
    <a href="https://www.patreon.com/colorindarkness">
    <img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dcolorindarkness%26type%3Dpatrons&style=flat"
         alt="Become a Patron">
    </a>
    <a href="https://www.x.com/voidwarex">
    <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/voidwarex?style=flat&logo=x">
     </a>
</p>

A Modern Secure API Backend for Target Vector Dedicated Servers.

## ✨ Features
- **OpenAPI** -  Schema First, Compliant APIs.
- **Multer** -  Flexible File Upload Management.
- **Node** -  a cross-platform, open-source JavaScript runtime environment.
- **Express.js** - a minimal and flexible Node.js web application framework.
- **TypeScript NodeNext** - Cutting-edge type safety and ESM support.
- **pnpm** - Performant package management focused on minimal package size and resources
- **Passport.js** - flexible and modular authentication middleware.
- **Hashicorp Vault** - Self-hosted or SaaS KMS.
- **OAuth2** - Authentication for Users.
- **MikroORM/Postgres** - TypeScript ORM for Node.js.
- **Axios** - Promise based HTTP client for the browser and node.js.
- **HMAC** - Cryptographically secured API transactions.
- **ESLint, Prettier, Husky and Lint-Staged** - Automated Code Quality and Beautification.
- **Vitest** - Next generation testing framework powered by Vite.

## 🔀 Versions
Three implementation branches

**Anima-Archon** - Dedicated Server API and Management Framework Backend

**Anima-Aether** - Public API for Dedicated Server to Master Server communication

**Anima-Aevus** - Master Server API and Management Framework Backend
```
anima
├──anima-archon
    ├──anima-archon-edge
├──anima-aether
    ├──anima-aether-edge
├──anima-aevus
    ├──anima-aevus-edge
```

## 🚀 Quick Start (Astra)
The Astra setup `./astra-setup.sh` will set this and other servers up. Refer to [Astra Documentation](http://github.com/Voidware-Prohibited/Astra) for more

## 🚀 Quick Start (Full Stack)
run `./setup.sh` and follow the prompts. You will need HMAC and OAuth2 Secrets

## 🚀 Quick Start (Standalone, Backend Only)

### Easy
#### 1. Setup Database
Ensure PostgreSQL database is started and accepting connections.

#### 2. Perform Initial Setup
`pnpm run initial-setup`

#### 3. Open your browser
   ```
   http://localhost:5173
   ```

### Manual

### 1. Setup Database
Ensure PostgreSQL database is started and accepting connections.

**Create '.env' file**

In the root of the project, create a file named .env and define the necessary environment variables for your database connection. For example:
```
DB_DRIVER=postgresql
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

### 2. Install Secrets
Add the following to your `.env` file
```
# Secrets
SESSION_SECRET="your-super-secret-session-key"
HMAC_SECRET=your_local_development_hmac_secret
VAULT_ADDR=http://your-vault-server:8200
VAULT_TOKEN=your-vault-token

# Google OAuth2 Credentials
GOOGLE_CLIENT_ID="<your-google-client-id>"
GOOGLE_CLIENT_SECRET="<your-google-client-secret>"
GOOGLE_CALLBACK_URL="http://localhost:3000/auth/google/callback"
```

### 3. Initialize Database

Generate and run the initial migration with `pnpm run initial-setup`

#### The Long way

##### Generate Migration:
Run `pnpm dlx mikro-orm migration:create` to create a new migration file based on the schema differences.

#####  Review and Modify (Optional):
Inspect the generated migration file and modify it if necessary (e.g., to add custom SQL or data manipulations).

##### Execute Migration:
Run `pnpm dlx mikro-orm migration:up` (or `pnpm dlx mikro-orm migration:fresh` for a full reset and re-migration) to apply the migration to your database.

#### Start Backend
```bash
   cd server
   pnpm run dev
   ```
### 4. Open your browser
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
server/
├──src/
    ├── routes/             # API Routes
    ├── entities/           # MikroORM Entities
```

## 🔧 Available Scripts

- `pnpm run initial-setup` - Perform initial setup
- `pnpm run prepare` - Prepare Husky Git Hooks
- `pnpm run dev` - Start development server
- `pnpm run test` - Run Test
- `pnpm run migration:create` - Create Migration
- `pnpm run migration:up` - Execute Migration
- `pnpm run migration:fresh` - Execute Migration with for a full reset and re-migration
- `pnpm run schema:update` - Update Schema directly
- `pnpm run start` - Start for production
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Run ESLint Fix
- `pnpm run format` - Format with Prettier

## 🎨 Customization

Run the generator against your OpenAPI file. The output will be a single .d.ts file containing all the schema types.
```
pnpm dlx openapi-typescript ./openapi.yaml -o ./src/generated/api-types.d.ts
```

Generate the schema. This will read your entity definitions and update the database accordingly.
```
pnpm run mikro-orm schema:update -- --run
```

Alternatively, you can generate a migration file for better version control.
```
pnpm run mikro-orm migration:create
```

### 1. Define Entities:
Ensure your MikroORM entities are defined and reflect your desired database schema.

### 2. Generate Migration:
Run `pnpm dlx mikro-orm migration:create` to create a new migration file based on the schema differences.

### 3. Review and Modify (Optional):
Inspect the generated migration file and modify it if necessary (e.g., to add custom SQL or data manipulations).

### 4. Execute Migration:
Run `pnpm dlx mikro-orm migration:up` (or `pnpm dlx mikro-orm migration:fresh` for a full reset and re-migration) to apply the migration to your database.

## ✨ Technologies
- **Node** -  a cross-platform, open-source JavaScript runtime environment.
- **Express.js** - a minimal and flexible Node.js web application framework.
- **TypeScript NodeNext** - Cutting-edge type safety and ESM support.
- **pnpm** - Performant package management focused on minimal package size and resources
- **Passport.js** - flexible and modular authentication middleware.
- **Hashicorp Vault** - Self-hosted or SaaS KMS.
- **OAuth2** - Authentication for Users.
- **MikroORM/Postgres** - TypeScript ORM for Node.js.
- **Axios** - Promise based HTTP client for the browser and node.js.
- **HMAC** - Cryptographically secured API transactions.
- **ESLint, Prettier, Husky and Lint-Staged** - Automated Code Quality and Beautification.
- **Vitest** - Next generation testing framework powered by Vite.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
