# LAB 01: React Components, Props & Custom Styling
## Student Dashboard — Foundation UI Shell

## Objective
The primary objective of this laboratory task is to construct the static user interface (UI) shell for a **Student Dashboard** using React. The focus is on mastering component decomposition, unidirectional data flow via props, and implementing a consistent design system using custom CSS with design tokens (CSS variables).

## Topics Covered
- **React Components:** Developing functional components and utilizing JSX.
- **Component Reusability:** Designing generic and configurable UI components.
- **Props Management:** Facilitating data transmission and validation between parent and child components.
- **Component Styling:** Applying custom CSS styling integrated with CSS variables for modular design.

## Implementation Tasks

### 1. StudentCard Component
Developed a reusable `StudentCard` component that accepts and renders the following data through props:
- `name` (Student's Full Name)
- `id` (Unique Student Identifier)
- `avatar` (Profile Image URL)
- `gpa` (Grade Point Average)
- `major` (Field of Study)

### 2. CourseTag Component
Implemented a `CourseTag` component used for displaying enrolled courses.
- Accepts `courseName` and `color` as props.
- Renders as a styled pill/badge within the `StudentCard`.

### 3. StatBadge Component
Created a `StatBadge` component to present label-value pairs (e.g., GPA: 3.92, Credits: 90).
- Utilized in multiple locations across the dashboard to ensure design consistency and component reuse.

### 4. DashboardHeader & Global Styling
- Constructed a `DashboardHeader` component featuring the application title, a descriptive tagline, and a functional navigation bar.
- Implemented global styling via `App.css`, defining at least 5 CSS custom properties (variables) to manage color palettes, typography, and spacing.

### 5. Application Composition & Validation
- Composed the final UI by nesting the created components within the main `App` component.
- Enforced strict prop validation using `PropTypes` across all functional components to ensure data integrity and facilitate easier debugging.

## Technical Stack
- **Library:** React (Functional Components)
- **Validation:** Prop-Types
- **Styling:** CSS3 with Custom Properties (Variables)
