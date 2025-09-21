
import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
// import path from "path";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // En desarrollo, Vite maneja el frontend. Solo servir archivos estáticos y fallback en producción.
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.resolve(__dirname, "../client")));
  // }

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);


  // SPA fallback: solo en producción
  // if (process.env.NODE_ENV === "production") {
  //   app.use((req, res, next) => {
  //     if (req.path.startsWith("/api/")) return next();
  //     res.sendFile(path.resolve(__dirname, "../client/index.html"));
  //   });
  // }

  return app;
}
