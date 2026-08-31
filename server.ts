import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  // Wispbyte typically passes the port via process.env.SERVER_PORT
  // IMPORTANT: AI Studio requires port 3000. Do NOT use process.env.PORT in this environment.
  // When you upload to Wispbyte, you can safely change this back to whatever Wispbyte requires.
  const PORT = Number(process.env.SERVER_PORT || 3000);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production (like on Wispbyte), serve the built static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
