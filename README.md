Task and Collaboration Management System
Overview
Live Demo

Backend: https://project-final-darius-1.onrender.com

Frontend: https://project-final-darius.netlify.app/

This project is a full-stack task and project management application designed to help users organize their work while supporting collaboration within groups. It combines task tracking, project organization, and shared group functionality into a single platform.

The system addresses a common problem: managing tasks individually is already challenging, but coordinating work across multiple users introduces additional complexity. This application provides a structured solution for both personal productivity and team-based workflows.

Features
Task and Project Management
Create, update, and delete tasks
Mark tasks as completed
Organize tasks into projects
Automatic project progress calculation based on task completion
Filtering, search, and pagination for scalability

Group Collaboration

Create, join, and leave groups
Assign projects to groups
View group members
Shared workflows for collaborative productivity
Basic access control (only the creator can delete a group)

File and Folder Upload Workflow

Upload multiple files and entire folders when creating tasks
Files are sent using multipart FormData and processed with Multer
Supports scalable file storage (including GridFS integration)
Basic file type detection (images, PDFs, documents, text)
Preserves folder structure information for better organization

User Experience and Accessibility
Responsive design using Material-UI
Dark and light mode support
Accessible UI components (ARIA roles, dialogs, alerts)
Real-time UI updates through state-driven rendering
Integrated task creation flow combining projects, files, and deadlines

Tech Stack
Frontend
React (Vite)
Zustand (modular state management with persistence)
Material-UI
Axios
Backend
Node.js with Express
MongoDB
GridFS
Multer
JWT authentication
Deployment
Frontend hosted on Netlify
Backend hosted on Render
Architecture
Backend

The backend is built using Express and follows a modular and scalable structure with clear separation of routes, middleware, and models.

Backend Implementation Details
Environment configuration using dotenv for secure variable management
MongoDB connection initialized at server startup via a dedicated function
Custom CORS configuration restricting access to approved frontend origins
Middleware layer handling:
JSON and URL parsing
Authentication
Debug logging
Route structure:
/auth – authentication
/tasks – task management (protected)
/groups – collaboration system
Authentication and Authorization

A centralized authentication middleware verifies JWT tokens on protected routes. Once validated, user data is attached to the request object, enabling secure and consistent access control across the application.

File Handling

File uploads are processed using Multer, supporting multipart requests and integration with scalable storage solutions such as GridFS. Uploaded files can be classified by type (image, PDF, document, text), allowing for future extensibility.

Frontend
Modular State Management with Zustand

The application uses Zustand to manage global state in a modular way, separating logic across:

user authentication
group collaboration
task and project management

This structure keeps business logic independent from UI components and improves maintainability and scalability.

Persistent Authentication Flow

User authentication is persisted using JWT tokens stored in localStorage. On application load, the system restores the session and automatically attaches the token to API requests.

API-backed and Local State Synchronization
Backend-managed data (users, groups, files) is handled through API calls
Task and project data are persisted locally for fast access and improved UX
Axios is used for API communication with automatic authentication headers

Security

JWT-based authentication
Protected API routes using centralized middleware
Token verification with user context attached to requests
Authorization checks (e.g., only group creators can delete groups)
Input validation and structured error handling

Challenges

Designing consistent collaboration logic for group membership, ownership, and shared projects
Synchronizing frontend state with backend data while maintaining performance
Implementing scalable file and folder upload workflows
Structuring frontend logic using modular Zustand stores without overcomplication

Key Highlights

Full task CRUD with completion tracking
Project management with automatic progress calculation
Group-based collaboration system
File and folder upload workflow integrated into task creation
Centralized and modular state management using Zustand
Persistent authentication and session handling
Responsive and accessible UI design

What This Project Demonstrates

Ability to design and build a complete full-stack application
Strong understanding of modular frontend state management
Experience implementing persistent authentication flows using JWT
Knowledge of secure backend design using centralized middleware
Ability to handle multipart file uploads and classify uploaded content
Understanding of API-driven and client-side state synchronization
Focus on accessibility, usability, and responsive design
Experience building collaborative systems with shared user state
