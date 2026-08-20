Portfolio Management System
Software Design Document (SDD)

Version: 0.1.0
Status: Draft
Date: 20 August 2026

1. Document Purpose

This document defines the software requirements, architecture, technology stack, data model, APIs, security model, and implementation plan for the Portfolio Management System (PMS).

The system will allow a developer to manage multiple professional portfolios from a centralized dashboard without manually modifying portfolio source code whenever content changes.

For example, a user may maintain:

MERN / Web Development Portfolio
Game Development Portfolio
Future portfolios for other specializations

Content such as projects, skills, experience, education, CVs, and profile information will be managed through the centralized system and rendered dynamically on the corresponding public portfolio.

2. Project Vision

The goal is to build a centralized, database-driven portfolio management platform where portfolio content is separated from portfolio presentation.

The user should be able to:

Create multiple portfolios.
Manage portfolio content from one dashboard.
Add/edit/delete projects without changing source code.
Maintain different content for different portfolios.
Update CVs and profile information centrally.
Control which content appears on each portfolio.
Preview changes before publishing.
Publish portfolio changes without manually deploying the portfolio application.
Core Concept
                    Portfolio Manager
                           │
             ┌─────────────┴─────────────┐
             │                           │
       MERN Portfolio              Game Dev Portfolio
             │                           │
             ├── Projects               ├── Projects
             ├── Skills                 ├── Skills
             ├── Experience             ├── Experience
             ├── About                  ├── About
             └── CV                     └── CV

3. Problem Statement

Traditional developer portfolios are often maintained directly in source code.

For every content update, the developer may need to:

Open the project.
Locate the relevant component/data.
Modify the content.
Replace images or files.
Test the changes.
Build the project.
Deploy the updated application.

This becomes inefficient when the developer maintains multiple portfolios.

The proposed system separates content management from portfolio presentation.

Current Approach

Code → Content → Build → Deploy


Proposed Approach

Dashboard → API → Database → Portfolio Renderer

4. Goals
4.1 Primary Goals

The system must:

Support multiple portfolios.
Provide a centralized management dashboard.
Store portfolio content in a database.
Provide CRUD operations for portfolio content.
Support portfolio-specific content.
Support reusable content where appropriate.
Support image and document uploads.
Support CV management.
Provide draft and published states.
Provide portfolio preview functionality.
Provide secure authentication.
Provide role-based authorization where required.
Provide a scalable architecture for future features.
4.2 Secondary Goals

The system should eventually support:

Custom portfolio themes.
Custom domains.
Portfolio analytics.
Version history.
Scheduled publishing.
AI-assisted content generation.
GitHub integration.
Automatic project synchronization.
Multiple users/team collaboration.
5. Non-Goals

The initial MVP will NOT attempt to provide:

A general-purpose CMS for arbitrary websites.
A full website builder similar to Webflow.
A complete social networking platform.
Advanced AI content generation.
Complex team collaboration.
Automatic deployment infrastructure for arbitrary third-party websites.
Advanced analytics in the first release.

These may be considered future features.

6. Target User

The primary user is a developer who maintains one or more professional portfolios.

Example:

User
│
├── MERN Developer Portfolio
│
└── Game Developer Portfolio


The initial system is primarily designed for a single portfolio owner, but the architecture should not prevent future multi-user support.

7. User Roles
7.1 Owner

The owner has full access to the system.

Permissions:

Manage account.
Create portfolios.
Delete portfolios.
Manage projects.
Manage skills.
Manage experience.
Manage education.
Manage profile.
Manage CVs.
Upload media.
Configure portfolio.
Preview portfolio.
Publish portfolio.
7.2 Admin

Reserved for future multi-user architecture.

An admin may eventually manage users and system-level configuration.

7.3 Viewer

Reserved for future collaboration functionality.

A viewer may only view selected portfolio data.

8. Core Features
8.1 Authentication

The system must provide secure authentication.

Initial authentication options:

Email/password
OAuth providers in future

Requirements:

Secure password handling.
Secure sessions.
Protected dashboard routes.
Unauthorized API requests must be rejected.
Users must only access resources they own.
9. Portfolio Management

The user can create multiple portfolios.

Each portfolio contains:

Name
Slug
Description
Portfolio type
Profile information
Projects
Skills
Experience
Education
CV
Theme/configuration
SEO metadata
Publication status

Example:

Portfolio
├── MERN Developer
│   └── slug: mern-developer
│
└── Game Developer
    └── slug: game-developer

10. Portfolio Types

The system should not hardcode portfolio categories.

A portfolio may contain a user-defined specialization.

Examples:

Web Developer
Game Developer
Full Stack Developer
Backend Developer
UI/UX Designer
3D Artist


The user may create custom portfolio types.

11. Project Management

Projects are one of the primary entities.

A project should support:

Title
Short description
Detailed description
Thumbnail
Screenshots
Technologies
GitHub URL
Live/demo URL
Start date
End date
Project status
Featured status
Visibility
Display order

Example:

Project
├── Title
├── Description
├── Technologies
├── Images
├── GitHub URL
├── Live URL
├── Status
└── Display Order

12. Portfolio-Project Relationship

A project should not necessarily belong to only one portfolio.

The architecture should support:

Project A
   ├── MERN Portfolio
   └── Full Stack Portfolio


This allows reusable projects.

However, portfolio-specific metadata such as display order or featured state may differ between portfolios.

Therefore the relationship should eventually support metadata.

13. Skills Management

The user can manage technical and professional skills.

Each skill may contain:

Name
Category
Icon
Level
Years of experience
Display order
Visibility

Examples:

Frontend
├── React
├── Next.js
└── TypeScript

Backend
├── Node.js
├── NestJS
└── PostgreSQL


Skills should be reusable across portfolios.

14. Experience Management

Experience entries may contain:

Company
Position
Description
Location
Employment type
Start date
End date
Current position
Technologies
Display order
Visibility
15. Education Management

Education entries may contain:

Institution
Degree
Field
Description
Start date
End date
Grade/GPA if desired
Display order
Visibility
16. Profile Management

Profile information should include:

Full name
Professional title
Short bio
Long bio
Profile image
Location
Email
Social links
Contact information

The system should allow profile information to be shared between portfolios or customized per portfolio.

17. CV Management

The user can upload and manage CV files.

Requirements:

Upload PDF.
Store file securely.
Track file metadata.
Mark one CV as active for a portfolio.
Replace CV.
Remove CV.
Preview/download CV.

Example:

CV
├── MERN Developer CV
└── Game Developer CV


A portfolio may use a different CV.

18. Media Management

The system should provide centralized media management.

Supported initial formats:

JPG
JPEG
PNG
WebP
SVG where safe
PDF

Future support:

Video
3D assets
Other optimized media

Media metadata:

Media
├── Filename
├── URL
├── MIME type
├── Size
├── Width
├── Height
├── Uploaded date
└── Owner


Actual files must not be stored directly inside PostgreSQL.

19. Dashboard

The dashboard is the main management interface.

Initial dashboard structure:

Dashboard
│
├── Overview
├── Portfolios
│
├── Current Portfolio
│   ├── Overview
│   ├── Projects
│   ├── Skills
│   ├── Experience
│   ├── Education
│   ├── Profile
│   ├── CV
│   ├── Media
│   └── Settings
│
└── Account

20. Dashboard Overview

The overview should display:

Number of portfolios.
Number of projects.
Number of skills.
Number of experience entries.
Current publication status.
Last updated time.
Quick actions.

Example:

MERN Portfolio

Projects       12
Skills         18
Experience      4

Status: Published

[Add Project]
[Edit Portfolio]
[Preview]

21. Draft and Publish System

The system should distinguish between:

Draft
Published


Content changes should not necessarily become public immediately.

Workflow:

Edit
 ↓
Save Draft
 ↓
Preview
 ↓
Publish
 ↓
Public Portfolio


This prevents incomplete changes from immediately appearing on the public website.

22. Portfolio Preview

The dashboard must provide a preview mechanism.

The user should be able to preview:

Desktop
Tablet
Mobile

The preview should represent the current draft state.

23. Public Portfolio

Public portfolios should be accessible through a unique slug.

Example:

example.com/portfolio/mern-developer
example.com/portfolio/game-developer


Future custom-domain support:

mern.example.com
game.example.com


The exact routing strategy will be finalized during implementation.

24. Portfolio Renderer

The public portfolio should be database-driven.

Public Request
      ↓
Next.js
      ↓
Portfolio API
      ↓
Database
      ↓
Portfolio Data
      ↓
Theme / Renderer
      ↓
HTML


The portfolio frontend must not require source-code modification for normal content updates.

25. Theme System

The architecture should support themes.

Initial MVP may contain one default theme.

Future:

Theme
├── Default
├── Minimal
├── Creative
├── Developer
└── Gaming


A portfolio can select a theme.

Portfolio
     ↓
Theme
     ↓
Renderer


Theme configuration should be stored separately from content.

26. Technology Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Backend
NestJS
TypeScript
REST API
Database
PostgreSQL
Prisma ORM
Validation
Zod
Authentication
Better Auth or Auth.js

Final authentication library will be confirmed during implementation setup.

Storage
Cloudflare R2
Caching
Redis in a later phase if required.
Testing
Vitest
Playwright
Version Control
Git
GitHub
Deployment

Initial target:

Vercel for frontend
Managed backend hosting
Managed PostgreSQL
Cloudflare R2 for storage

Exact providers may change without affecting the architecture.

27. High-Level Architecture
                         Internet
                            │
                            ▼
                    ┌───────────────┐
                    │    Next.js    │
                    │ Web + Public  │
                    │   Portfolio   │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    NestJS     │
                    │      API      │
                    └───────┬───────┘
                            │
                ┌───────────┼───────────┐
                │           │           │
                ▼           ▼           ▼
           PostgreSQL     R2         Redis
             Prisma     Storage      Future

28. Monorepo Structure

The recommended repository structure:

portfolio-manager/
│
├── apps/
│   ├── web/
│   │   └── Public portfolio + dashboard
│   │
│   └── api/
│       └── NestJS API
│
├── packages/
│   ├── ui/
│   ├── types/
│   ├── config/
│   └── validation/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed/
│
├── docs/
│   └── SDD.md
│
├── tests/
│
├── package.json
└── README.md


The exact monorepo tooling can be finalized during project initialization.

29. Database Architecture

Initial core entities:

User
Portfolio
Project
PortfolioProject
Skill
PortfolioSkill
Experience
Education
Profile
CV
Media
Theme
PortfolioTheme
SocialLink


Conceptual relationship:

User
 │
 ├───────────────┐
 │               │
 ▼               ▼
Portfolio      Media
 │
 ├── Profile
 ├── CV
 ├── Theme
 ├── Experience
 ├── Education
 │
 ├── PortfolioProject ── Project
 │
 └── PortfolioSkill ──── Skill

30. API Architecture

The API will initially follow REST conventions.

Authentication
POST /auth/register
POST /auth/login
POST /auth/logout
GET  /auth/me

Portfolios
GET    /portfolios
POST   /portfolios
GET    /portfolios/:id
PATCH  /portfolios/:id
DELETE /portfolios/:id

Projects
GET    /portfolios/:id/projects
POST   /portfolios/:id/projects
PATCH  /projects/:id
DELETE /projects/:id

Skills
GET    /skills
POST   /skills
PATCH  /skills/:id
DELETE /skills/:id

Experience
GET    /portfolios/:id/experience
POST   /portfolios/:id/experience
PATCH  /experience/:id
DELETE /experience/:id

Education
GET    /portfolios/:id/education
POST   /portfolios/:id/education
PATCH  /education/:id
DELETE /education/:id

CV
GET    /portfolios/:id/cv
POST   /portfolios/:id/cv
DELETE /cv/:id

Media
POST   /media/upload
GET    /media
DELETE /media/:id


Actual API contracts will be documented in a separate API specification during implementation.

31. API Design Principles

The API must:

Validate all incoming data.
Authenticate protected requests.
Authorize resource ownership.
Return consistent response formats.
Return appropriate HTTP status codes.
Avoid exposing internal database details.
Provide useful error messages.
Support pagination where appropriate.
32. Security Requirements

Security is a first-class requirement.

The system must implement:

Secure authentication.
Password hashing if passwords are supported.
Secure session management.
Authorization checks.
Input validation.
File validation.
File size restrictions.
Rate limiting.
Secure environment variables.
CORS configuration.
Protection against common injection attacks.
Protection against unauthorized resource access.

A user must never be able to access another user's private resources by changing an ID in an API request.

33. File Upload Security

Uploaded files must be validated for:

MIME type.
Extension.
File size.
Ownership.

Executable or dangerous file types must be rejected.

Files should be stored in object storage rather than the application server filesystem.

34. Performance Requirements

The system should:

Load public portfolios quickly.
Optimize portfolio images.
Use caching where beneficial.
Avoid unnecessary API requests.
Support pagination in dashboard lists.
Use database indexes for frequently queried fields.

Performance targets will be measured during implementation.

35. SEO Requirements

Public portfolios should support:

Page title.
Meta description.
Open Graph metadata.
Twitter/X metadata.
Canonical URL.
Sitemap support.
Robots configuration.
Structured data where appropriate.
36. Responsive Design

Both dashboard and public portfolios must support:

Desktop
Tablet
Mobile

The public portfolio must be mobile-first.

37. Accessibility

The interface should follow WCAG principles where practical.

Requirements include:

Keyboard navigation.
Semantic HTML.
Accessible forms.
Visible focus states.
Sufficient color contrast.
Alternative text for meaningful images.
Accessible buttons and controls.
38. Error Handling

The system must provide:

User-friendly frontend errors.
Structured API errors.
Server-side logging.
Validation errors.
Authentication errors.
Authorization errors.
File upload errors.

Sensitive implementation details must not be exposed to users.

39. Logging

The backend should log important events such as:

Authentication failures.
Server errors.
File upload failures.
Publishing operations.
Important administrative actions.

Logs must not contain sensitive credentials or secrets.

40. Testing Strategy
Unit Testing

Test:

Services.
Utility functions.
Validation.
Business logic.

Tool:

Vitest

Integration Testing

Test:

API endpoints.
Database interactions.
Authentication.
Authorization.
End-to-End Testing

Test complete user flows:

Login
 ↓
Create Portfolio
 ↓
Add Project
 ↓
Preview
 ↓
Publish
 ↓
Open Public Portfolio


Tool:

Playwright

41. MVP Definition

The first release should contain only the functionality required to prove the core concept.

MVP Features
Authentication.
Dashboard.
Multiple portfolios.
Portfolio CRUD.
Project CRUD.
Skills CRUD.
Experience CRUD.
Education CRUD.
Profile management.
CV upload.
Media upload.
Draft/published state.
Portfolio preview.
Database-driven public portfolio.
Basic responsive theme.
Basic SEO.
MVP Exclusions
AI assistant.
GitHub synchronization.
Analytics.
Custom domains.
Multiple themes.
Team collaboration.
Scheduled publishing.
Advanced version history.
42. Future Features

Potential future releases:

V2
Multiple themes.
Portfolio customization.
Custom domain.
Analytics.
Advanced media management.
V3
GitHub integration.
Automatic project importing.
GitHub contribution graphs.
Deployment integrations.
V4
AI portfolio assistant.
AI project description generation.
AI CV optimization.
AI SEO suggestions.
V5
Team collaboration.
Role-based permissions.
Portfolio templates marketplace.
Public portfolio sharing.
43. Possible AI Assistant

A future AI assistant could be integrated into the dashboard.

Example:

User:
"Add my latest GitHub project to my MERN portfolio."

AI:
→ Finds project
→ Extracts metadata
→ Creates draft
→ Suggests description
→ Shows preview
→ Waits for user approval


Another example:

User:
"Update my portfolio summary to focus more on full-stack development."

AI:
→ Generates updated summary
→ Shows before/after
→ User approves
→ Draft is updated


AI must not automatically publish destructive or externally visible changes without user confirmation.

44. Publishing Architecture

Initial publishing flow:

Dashboard
    │
    ▼
Save Draft
    │
    ▼
Preview
    │
    ▼
Publish
    │
    ▼
Published Database State
    │
    ▼
Public Portfolio


The public portfolio should only expose published data.

45. Data Ownership

Every user-owned resource must be associated with its owner directly or indirectly.

Example:

User
 ↓
Portfolio
 ↓
Project


API authorization must verify ownership before modifying any resource.

46. Data Validation Rules

Examples:

Portfolio
Name: required.
Slug: required and unique.
Slug: URL-safe.
Description: optional.
Project
Title: required.
Description: required.
URLs: valid URL format.
Display order: numeric.
Visibility: controlled enum.
CV
File: required.
PDF required for MVP.
Maximum file size enforced.

Exact limits will be finalized during implementation.

47. Versioning Strategy

The initial MVP will use a simple:

Draft
Published


model.

Full content version history is a future feature.

Future architecture may support:

Version 1
Version 2
Version 3
Version 4


with the ability to restore previous versions.

48. Development Phases
Phase 1 — Project Foundation
Repository setup.
Monorepo setup.
Next.js setup.
NestJS setup.
PostgreSQL setup.
Prisma setup.
Environment configuration.
Basic CI.
Phase 2 — Authentication
Registration.
Login.
Logout.
Session handling.
Protected dashboard.
Phase 3 — Portfolio Management
Portfolio database model.
Portfolio CRUD.
Dashboard portfolio UI.
Phase 4 — Content Management
Projects.
Skills.
Experience.
Education.
Profile.
CV.
Media.
Phase 5 — Public Renderer
Public portfolio route.
Database-driven rendering.
Default theme.
Responsive design.
SEO.
Phase 6 — Draft & Publishing
Draft state.
Preview.
Publish.
Public published-state rendering.
Phase 7 — Testing & Security
Unit tests.
Integration tests.
E2E tests.
Security review.
Performance testing.
Phase 8 — Deployment
Production database.
Object storage.
Frontend deployment.
Backend deployment.
Environment configuration.
Monitoring.
49. Definition of Done

The MVP will be considered complete when a user can perform the following workflow:

Create account
      ↓
Login
      ↓
Create "MERN Developer" portfolio
      ↓
Add profile
      ↓
Add skills
      ↓
Add experience
      ↓
Add projects
      ↓
Upload CV
      ↓
Preview portfolio
      ↓
Publish
      ↓
Open public portfolio


Then:

Create "Game Developer" portfolio
      ↓
Add game-development projects
      ↓
Select appropriate skills/CV
      ↓
Preview
      ↓
Publish


Both portfolios must be independently manageable from the same dashboard.

50. Architectural Principles

The project should follow these principles:

Separation of Concerns

Content, presentation, API, and storage must remain logically separated.

API-First

The backend API should be usable independently from the dashboard frontend.

Database-Driven Content

Normal portfolio updates must not require source-code modification.

Security by Default

Authorization must be implemented at the API/resource level.

Reusability

Projects, skills, media, and other suitable entities should support reuse where appropriate.

Progressive Complexity

Do not introduce Redis, microservices, GraphQL, Kubernetes, or other infrastructure unless the actual project requirements justify them.

Maintainability

Use TypeScript, modular architecture, validation, testing, and clear naming conventions.

51. Initial Technology Decision

The initial stack is therefore:

Frontend
├── Next.js
├── React
├── TypeScript
├── Tailwind CSS
└── shadcn/ui

Backend
├── NestJS
├── TypeScript
└── REST API

Data
├── PostgreSQL
└── Prisma

Storage
└── Cloudflare R2

Authentication
└── Better Auth / Auth.js

Validation
└── Zod

Testing
├── Vitest
└── Playwright

Version Control
└── Git + GitHub


This stack is approved as the initial architectural baseline. Specific library versions and final provider choices should be verified before implementation begins.

52. Open Decisions Before Implementation

The following decisions should be finalized before coding:

Exact authentication library.
Exact monorepo tooling.
Exact PostgreSQL provider.
Exact deployment provider for NestJS.
Final database schema.
Portfolio routing strategy.
Draft/published database strategy.
Media upload flow.
Default portfolio design/theme.
API response/error format.
Environment variable structure.
CI/CD workflow.

These decisions should be resolved during the Architecture & Database Design stage, before feature implementation.

53. Document Status

Current status: Draft

This SDD is the initial baseline and should be reviewed before implementation.

No production implementation should begin until the following are reviewed and approved:

Requirements
MVP scope
Database schema
Architecture
Authentication
API design
Publishing model

Once approved, this document becomes the reference specification for implementation.