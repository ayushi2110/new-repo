# Minimal NestJS + PostgreSQL Example

A simple, standardized NestJS application connected to PostgreSQL using TypeORM and environment variables.

## Features
- Simple NestJS structure
- PostgreSQL integration via TypeORM
- Configuration via `.env` and `src/config/configuration.ts`
- Example User module (CRUD)

## Prerequisites
- Node.js (v16 or higher)
- npm
- PostgreSQL

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your PostgreSQL credentials
   ```

4. **Create the database**
   Connect to PostgreSQL and run:
   ```sql
   CREATE DATABASE nest_app_db;
   ```

5. **Run the application**
   ```bash
   npm run start:dev
   ```
   The app will be available at http://localhost:3000

## Project Structure
```
src/
  app.module.ts
  main.ts
  app.controller.ts
  app.service.ts
  config/
    configuration.ts
  users/
    users.module.ts
    users.controller.ts
    users.service.ts
    user.entity.ts
    dto/
      create-user.dto.ts
      update-user.dto.ts
```

## Environment Variables
See `env.example` for required variables:
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`, `PORT`, `NODE_ENV`

## Example API Endpoints
- `GET /users` - List users
- `POST /users` - Create user
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Project Cleanup & Optimization

- Added `.dockerignore` to optimize Docker builds and exclude unnecessary files.
- Ensured only essential files are tracked in version control.
- Kept `test/` directory with `.gitkeep` for future tests.
- Project structure reviewed for unnecessary files.

---
This template is ready for you to build on and extend as needed!
