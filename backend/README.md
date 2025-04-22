# AGNI-S@2025 Website - Backend

This is the backend service powering the **AGNI-S@2025 Website**
---

## 🛠 Tech Stack

- ⚙️ [KeystoneJS](https://keystonejs.com/) — Headless CMS & GraphQL API
- 🗃 Database- MySQL
- 🔐 JWT Authentication for admin dashboard
- 🌐 GraphQL Playground for testing and debugging queries/mutations (use sandbox)
- 📦 Node.js & Express (under the hood via Keystone)

---

## 🔧 Setup Instructions 
1. Create .env file inside backend/env/ and reference the parameters from backend/env/.env.example
2. Setup MySQL Database, check whether the db server is running or not
3. Install the packages

```bash
cd backend
```
```bash
npm install
```

4. For development

```bash
npm run dev
```
