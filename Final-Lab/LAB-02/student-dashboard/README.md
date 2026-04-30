# LAB 02: State Management, Side Effects & Interactivity
## Student Dashboard — Dynamic Data & Lifecycle Methods

## Overview
Building upon the foundation established in **LAB-01**, this laboratory task introduces state management and side-effect handling in React. The static dashboard is transformed into an interactive application capable of simulating API data fetching, real-time searching, and complex data sorting.

## Objective
The primary objective is to implement interactive features using the `useState` hook for local state and the `useEffect` hook for managing component lifecycles and side effects. Students learn how to lift state to share data between components and handle dynamic UI updates based on user interaction.

## Topics Covered
- **useState Hook:** Managing local component state for interactivity.
- **useEffect Hook:** Handling side effects, simulating asynchronous API calls, and updating the browser environment.
- **State Lifting:** Coordinating data between sibling components via a common parent.
- **Dynamic Filtering & Sorting:** Implementing real-time search logic and multi-criteria sorting.

## Implementation Tasks

### 1. Simulated API Integration
- Replaced hardcoded static data with dynamic state initialized via `useState`.
- Simulated an asynchronous API fetch within `useEffect` using `setTimeout`.
- Implemented a **Loading Spinner** UI that displays during the 1.5-second data retrieval simulation.

### 2. Real-time Search Functionality
- Developed a new reusable `SearchBar` component.
- Implemented live-search logic that filters the student list as the user types, matching against either the student's **Name** or **Major**.

### 3. Favorite System & State Lifting
- Integrated a **Favorite** toggle button within each `StudentCard`.
- Utilized state lifting to track the total number of favorite students globally.
- Displayed the real-time favorites count within the `DashboardHeader`.

### 4. Dynamic Document Metadata
- Configured a `useEffect` hook to synchronize the browser tab title (`document.title`) with the current application state.
- The title dynamically reflects the number of students currently visible after applying search filters.

### 5. Advanced Sorting Controls
- Created a `SortControls` reusable component featuring buttons for:
  - **Name (A–Z):** Alphabetical ordering.
  - **GPA (High to Low):** Performance-based ordering.
  - **Default:** Resetting to original list order.

## Technical Stack
- **Hooks:** useState, useEffect
- **Patterns:** State Lifting, Derived State
- **UI:** Conditional Rendering, Loading State Simulation
