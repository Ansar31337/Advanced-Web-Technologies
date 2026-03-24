# Lab Task 03: Dependency Injection in NestJS
## Intra-Module · Inter-Module · Circular Dependency

## Overview
This project demonstrates the three types of Dependency Injection (DI) in NestJS: Intra-Module, Inter-Module, and Circular Dependency. It implements a University System API with three modules: `CourseModule`, `EnrollmentModule`, and `NotificationModule`.

## Project Structure
```
UniversitySystemAPI/
├── src/
│   ├── course/
│   │   ├── course.module.ts
│   │   ├── course.controller.ts
│   │   └── course.service.ts
│   ├── enrollment/
│   │   ├── enrollment.module.ts
│   │   ├── enrollment.controller.ts
│   │   └── enrollment.service.ts
│   ├── notification/
│   │   ├── notification.module.ts
│   │   ├── notification.controller.ts
│   │   └── notification.service.ts
│   ├── app.module.ts
│   └── main.ts
```

## DI Types Implemented

### 1. Intra-Module DI
- **Location:** `CourseModule`
- **Description:** `CourseController` depends on `CourseService` within the same module.

### 2. Inter-Module DI
- **Location:** `EnrollmentModule` depends on `CourseModule`
- **Description:** `EnrollmentService` injects `CourseService` to verify course existence. `CourseModule` exports `CourseService`, and `EnrollmentModule` imports `CourseModule`.

### 3. Circular Dependency
- **Location:** `EnrollmentModule` ↔ `NotificationModule`
- **Description:** `EnrollmentService` needs `NotificationService` to send alerts, and `NotificationService` needs `EnrollmentService` to check status. Resolved using `forwardRef()`.

## API Endpoints

### Course Module
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/course` | Get all courses |
| GET | `/course/:id` | Get course by ID |
| POST | `/course` | Create new course |

### Enrollment Module
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/enrollment` | Get all enrollments |
| POST | `/enrollment` | Enroll a student in a course |

### Notification Module
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/notification/send` | Send a direct notification |
| POST | `/notification/check` | Check enrollment and notify |

## Getting Started

### Installation
```bash
$ npm install
```

### Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License
This project is for academic purposes.
