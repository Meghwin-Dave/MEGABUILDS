import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get single blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.slug);
      if (!post) {
        res.status(404).json({ success: false, message: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const { category } = req.query;
      let projects;
      
      if (category && category !== "all") {
        projects = await storage.getProjectsByCategory(category as string);
      } else {
        projects = await storage.getProjects();
      }
      
      res.json(projects);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get featured projects
  app.get("/api/projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get single project by slug
  app.get("/api/projects/:slug", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.slug);
      if (!project) {
        res.status(404).json({ success: false, message: "Project not found" });
        return;
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
