# Final Laboratory Series: Student Dashboard Application
## Practical React Development · Lab 1 → Lab 2 → Lab 3

## 📋 Overview
The **Final Laboratory Series** is a progressive three-part project focused on building a comprehensive **Student Dashboard** from the ground up using modern React. Each lab extends the functionality of the previous one, evolving from a static UI shell to a dynamic, interactive application with global state management and persistent data.

## 📂 Series Structure

### [LAB-01: Foundation UI](./LAB-01/student-dashboard)
**Focus:** Components, Props, and Custom Styling.
- **Key Deliverables:**
  - Reusable `StudentCard`, `CourseTag`, and `StatBadge` components.
  - Prop-driven data flow with `PropTypes` validation.
  - Consistent design system using CSS Custom Properties (Design Tokens).
  - Static dashboard layout with structured component decomposition.

### [LAB-02: State Management & Interactivity](./LAB-02/student-dashboard)
**Focus:** React Hooks (useState, useEffect) and Side Effects.
- **Key Deliverables:**
  - **Simulated API Fetch:** Asynchronous data loading with a 1.5s delay and loading spinner.
  - **Live Search & Filter:** Real-time filtering of student records by name or major.
  - **Sort Logic:** Multi-criteria sorting (Default, Name A-Z, GPA High-Low).
  - **Lifecycle Management:** Dynamic document title updates and total favorites counter via state lifting.

### [LAB-03: Global State & Form Architecture](./LAB-03/student-dashboard)
**Focus:** Context API, Form Validation, and Data Persistence.
- **Key Deliverables:**
  - **Theme Management:** Global Light/Dark mode toggling via `ThemeContext`.
  - **State Refactoring:** Centralized application logic using `StudentContext`.
  - **Advanced Forms:** Fully validated Student Registration form with inline error handling.
  - **Data Persistence:** Integration with `localStorage` to ensure data survives page refreshes.
  - **UX Enhancements:** Auto-dismissing success notifications and student removal functionality.

## 🛠️ Technology Stack
- **Frontend Framework:** React 18+
- **Styling:** Custom CSS (BEM naming convention where applicable)
- **State Management:** React Hooks & Context API
- **Utilities:** Prop-Types, LocalStorage API

## 🚀 Getting Started

1. Navigate to the specific lab directory (e.g., `LAB-03/student-dashboard`).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 📝 Learning Objectives
- Understanding React's declarative nature and component-based architecture.
- Mastering unidirectional data flow and state management.
- Implementing real-world features like searching, sorting, and form validation.
- Applying global state management patterns with the Context API.
- Persisting application state for a seamless user experience.

---
*This series was completed as the final assessment for the Advanced Web Technologies (CSC 4161) course.*
