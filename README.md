# React SEO with Vite + Server-Side Rendering (SSR)

This project demonstrates how to build a React application with Server-Side Rendering (SSR) using **Vite**, **React Router v6**, and **@dr.pogodin/react-helmet** for dynamic SEO and `<head>` tag management.

## Preview
![preview](https://github.com/user-attachments/assets/77b4f16a-204b-4a80-8ea8-800b58788092)

---

## 🧱 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/)
- ⚛️ React 19+
- 🌐 React Router v6 (StaticRouter for SSR)
- 🧠 [`@dr.pogodin/react-helmet`](https://www.npmjs.com/package/@dr.pogodin/react-helmet) for dynamic `<head>` tags
- 🧩 Express.js for SSR rendering

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/Evavic44/react-seo-ssr.git
cd react-seo-ssr
npm install
```

---

## 🚀 Running the Project Locally

### 1. Build the Client Bundle

```bash
npm run build:client
```

### 2. Build the Server Bundle

```bash
npm run build:server
```

### 3. Start the Express Server

```bash
node server.js
// Or `npm start` do all that in one go
```

> Server starts at: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Project Structure

```
.
├── public
├── src/
│   ├── App.tsx
│   ├── main.tsx             // Client entry
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── blog.tsx
│   │   │   └── post.tsx
│   │   └── index.tsx
│   └── server/
│       └── renderer.tsx     // SSR entry point
├── vite.config.ts
├── index.html      // SSR template (must include <!--app-html--> and <!--head-tags-->)
└── server.js         // Express server
```

---

## 💡 SEO with React Helmet

Use the `Helmet` component from `@dr.pogodin/react-helmet` in your pages or components like this:

```tsx
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Post() {
  return (
    <>
      <Helmet>
        <title>My Blog Post</title>
        <meta
          name="description"
          content="This is a blog post about SSR and SEO."
        />
      </Helmet>
      <h1>Blog Post</h1>
    </>
  );
}
```

---

## 🛠️ Development Mode (Non-SSR)

If you're working in development mode and don’t need SSR:

```bash
npm run dev
```

This will launch the Vite dev server at [http://localhost:5173](http://localhost:5173), but without SSR.

---

## 🧹 Clean Build

```bash
rm -rf dist
```

---
