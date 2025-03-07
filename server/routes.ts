import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./services/emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/contact", async (req, res) => {
    try {
      await sendContactEmail(req.body);
      res.json({ success: true });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        success: false,
        error: "Failed to send message",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
