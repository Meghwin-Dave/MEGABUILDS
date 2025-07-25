# Portfolio Website for Meghwin Dave

## Overview
This is a modern portfolio website for Meghwin Dave, a full-stack software developer and project manager specializing in Python/Django development, ERP systems (ERPNext/Frappe), and business automation. The application showcases technical expertise, projects, blog content, and provides a contact system for potential clients.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with modern ES modules

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript throughout
- **API Design**: RESTful endpoints under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions (configured for PostgreSQL storage)
- **Development**: Hot module replacement with Vite integration

### Design System
- **Theme**: Dark tech-focused design with electric blue, neon cyan, and purple accents
- **Component Library**: shadcn/ui with "new-york" style variant
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS custom properties for particle effects and smooth transitions

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users**: Authentication and admin access
- **Contacts**: Lead capture from contact form submissions
- **Blog Posts**: Technical articles with categories, slugs, and publishing status
- **Projects**: Portfolio showcase with categories, technologies, and featured status

### API Endpoints (`server/routes.ts`)
- `POST /api/contact` - Contact form submission with validation
- `GET /api/contacts` - Admin endpoint for lead management
- `GET /api/blog` - Public blog post listing
- `GET /api/blog/:slug` - Individual blog post retrieval
- `GET /api/projects` - Project portfolio listing
- `GET /api/projects/featured` - Featured projects only

### Frontend Pages
- **Home**: Hero section, tech stack display, featured content preview
- **Services**: Comprehensive service offerings and pricing
- **Projects**: Filterable portfolio showcase with category-based filtering
- **About**: Personal background, experience highlights, and credentials
- **Blog**: Technical content with search and category filtering
- **Contact**: Lead capture form with real-time validation

### Storage Layer
- **Development**: In-memory storage with sample data initialization
- **Production**: PostgreSQL with Drizzle ORM migrations
- **Database Provider**: Neon Database (serverless PostgreSQL)

## Data Flow

### Contact Form Process
1. User submits contact form with validation (Zod schema)
2. Data persists to contacts table with timestamp
3. Success confirmation displayed to user
4. Admin can access leads via `/api/contacts` endpoint

### Content Management
1. Blog posts and projects stored with metadata (categories, slugs, featured status)
2. Content retrieved via API with filtering capabilities
3. Client-side caching through React Query for performance

### State Management
1. Server state managed by TanStack Query with background refetching disabled
2. Form state handled by React Hook Form with Zod validation
3. UI state (navigation, modals) managed by React useState

## External Dependencies

### UI & Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Custom CSS variables for theme consistency

### Data & Validation
- Zod for runtime schema validation
- Drizzle ORM for type-safe database operations
- TanStack Query for server state management
- React Hook Form for form validation and submission

### Development Tools
- TypeScript for type safety across the stack
- Vite for fast development and optimized builds
- ESBuild for server-side bundling
- Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. Frontend built with Vite to `dist/public` directory
2. Server bundled with ESBuild for Node.js production
3. TypeScript compilation with strict type checking
4. Asset optimization and minification

### Environment Configuration
- Database URL required for PostgreSQL connection
- Development mode uses in-memory storage with sample data
- Production mode requires database migrations via `npm run db:push`

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static file serving for frontend assets
- Environment variables for database connection

### Performance Optimizations
- Static asset caching and compression
- Database query optimization with Drizzle
- Client-side caching with React Query
- Lazy loading for non-critical components