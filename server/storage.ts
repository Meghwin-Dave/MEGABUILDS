import { type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getProjects(): Promise<Project[]>;
  getProject(slug: string): Promise<Project | undefined>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private blogPosts: Map<string, BlogPost>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts
    const sampleBlogPosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "What Makes a Software Project Actually Scalable",
        slug: "software-project-scalable",
        content: "Exploring the key principles and patterns that enable software systems to grow sustainably...",
        excerpt: "Exploring the key principles and patterns that enable software systems to grow sustainably...",
        category: "Architecture",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Building API-First Backends with Django",
        slug: "building-api-first-backends-django",
        content: "A comprehensive guide to designing robust REST APIs that power modern applications...",
        excerpt: "A comprehensive guide to designing robust REST APIs that power modern applications...",
        category: "Django",
        readTime: "7 min read",
        imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Managing Software Projects Across Time Zones",
        slug: "managing-software-projects-time-zones",
        content: "Tips and strategies for leading distributed development teams effectively...",
        excerpt: "Tips and strategies for leading distributed development teams effectively...",
        category: "Project Management",
        readTime: "4 min read",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: randomUUID(),
        title: "Inventory Optimization System",
        slug: "inventory-optimization-system",
        description: "Stock forecasting, batch tracking, reorder levels, and bin management system built with Frappe framework and custom Python scripts.",
        technologies: ["Frappe", "Python", "Custom Scripts", "REST APIs"],
        category: "ERP",
        result: "15% reduction in carrying cost",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        codeUrl: "https://github.com/meghwin/inventory-system",
        liveUrl: "https://demo.inventory-system.com",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "HR & Payroll Automation",
        slug: "hr-payroll-automation",
        description: "Complete HR management system with fingerprint-based attendance, automated payroll processing, and employee self-service portal.",
        technologies: ["Frappe", "Python", "JavaScript"],
        category: "Automation",
        result: "90% reduction in errors",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        codeUrl: "https://github.com/meghwin/hr-automation",
        liveUrl: "https://demo.hr-system.com",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Recipe Finder SaaS",
        slug: "recipe-finder-saas",
        description: "Custom recipe discovery application with advanced filtering, search capabilities, and user rating system powered by third-party APIs.",
        technologies: ["Django", "JavaScript", "API Integration"],
        category: "SaaS",
        result: "Custom app with API integration",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        codeUrl: "https://github.com/meghwin/recipe-finder",
        liveUrl: "https://happinessishomemade.com",
        featured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Vendor Rating System",
        slug: "vendor-rating-system",
        description: "Automated vendor performance tracking system with custom scoring algorithms and comprehensive analytics dashboard for procurement teams.",
        technologies: ["ERPNext", "Python", "ReportBuilder"],
        category: "Analytics",
        result: "Improved vendor quality tracking",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
        codeUrl: "https://github.com/meghwin/vendor-rating",
        liveUrl: "https://demo.vendor-rating.com",
        featured: false,
        createdAt: new Date(),
      }
    ];

    sampleBlogPosts.forEach(post => this.blogPosts.set(post.id, post));
    sampleProjects.forEach(project => this.projects.set(project.id, project));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      responded: false,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      post => post.slug === slug && post.published
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getProject(slug: string): Promise<Project | undefined> {
    return Array.from(this.projects.values()).find(
      project => project.slug === slug
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
