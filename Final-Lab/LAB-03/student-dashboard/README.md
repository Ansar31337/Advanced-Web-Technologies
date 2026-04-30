# LAB 03: Global State with Context & Form Validation
## Student Dashboard — Application Architecture & Data Persistence

## Overview
This final laboratory task completes the **Student Dashboard** by introducing global state management via the Context API and implementing a robust data entry system. The project is refactored from a prop-drilling model to a centralized context provider model, ensuring scalability and cleaner component logic.

## Objective
The primary objective is to implement a global application state using `createContext` and `useContext`, build a complex form with comprehensive field validation, and ensure data persistence using the Browser's **LocalStorage API**. This lab emphasizes architectural patterns and user experience (UX) enhancements.

## Topics Covered
- **Context API:** Implementing `ThemeContext` and `StudentContext` for global state management.
- **Provider Pattern:** Encapsulating the application within context providers.
- **Form Architecture:** Handling complex inputs, inline error validation, and submission logic.
- **Data Persistence:** Rehydrating and persisting application state via `localStorage`.

## Implementation Tasks

### 1. Global Theme Management
- Developed a `ThemeContext` to handle Light and Dark modes.
- Implemented a `ThemeProvider` to wrap the entire application.
- Added a theme toggle in the header that updates the UI globally via `useContext`.

### 2. Student Context & State Refactoring
- Created a centralized `StudentContext` to manage student data, search queries, and sorting preferences.
- Refactored `SearchBar`, `SortControls`, and `StudentCard` to consume global state directly, eliminating unnecessary prop drilling.

### 3. Validated Registration Form
- Built an `AddStudentForm` component with fields for Full Name, Student ID, Major, GPA, and Courses.
- Implemented strict validation rules:
  - **Full Name/Major:** Non-empty string requirements.
  - **Student ID:** Must be numeric and unique within the current dataset.
  - **GPA:** Validated range between 0.0 and 4.0.
- Integrated inline error messages to provide real-time feedback to users.

### 4. Notification & Feedback System
- Implemented a success notification that triggers upon valid form submission.
- Utilized `useEffect` to ensure notifications automatically dismiss after 3 seconds.

### 5. Persistent State & Management
- Integrated `localStorage` to ensure the student list and theme settings persist across page refreshes.
- Added a **Remove Student** feature, allowing for dataset management directly from the UI.

## Technical Stack
- **Context Management:** createContext, useContext
- **Persistence:** LocalStorage API
- **Feedback:** Asynchronous Notifications (setTimeout)
- **Validation:** Manual State-Based Validation
