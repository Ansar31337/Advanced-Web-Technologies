# Lab Task 04: Single Entity CRUD with TypeORM & PostgreSQL
## Entity · Repository · CRUD Operations · DTO Validation · Query & Filter

## Overview
This project implements a Product Inventory API for an e-commerce platform. It demonstrates full CRUD operations for a single entity using NestJS, TypeORM, and PostgreSQL. The API includes input validation via DTOs, automated timestamps, and advanced query features like category filtering and keyword search.

## Project Structure
```
ProductInventoryAPI/
├── src/
│   ├── products/
│   │   ├── entities/
│   │   │   └── products.entity.ts
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-product.dto.ts
│   │   │   └── partial-update-product.dto.ts
│   │   ├── products.module.ts
│   │   ├── products.controller.ts
│   │   └── products.service.ts
│   ├── app.module.ts
│   └── main.ts
├── .gitignore
├── package.json
└── tsconfig.json
```

## Core Features Implemented

### 1. Single Entity CRUD
- **Create:** POST `/products` with DTO validation.
- **Read:** GET `/products` (all), GET `/products/:id` (single), and specialized filters.
- **Update:** PATCH for partial updates and PUT for full record replacement.
- **Delete:** DELETE `/products/:id` with existence check.

### 2. DTO Validation & Transformation
- **CreateProductDto:** Strict validation using `class-validator` (@IsString, @IsNumber, @IsPositive, etc.).
- **UpdateProductDto:** Inherits all validation rules for full replacement (PUT).
- **PartialUpdateProductDto:** Uses `PartialType` for optional field updates (PATCH).
- **Transformation:** Automatic conversion of numeric strings from route params and query strings using `ValidationPipe` and `class-transformer`.

### 3. TypeORM & PostgreSQL
- **Entity Mapping:** `Products` entity mapped to PostgreSQL table with precision decimals and auto-incrementing ID.
- **Automated Timestamps:** Used `@CreateDateColumn()` and `@UpdateDateColumn()` for audit logs.
- **Advanced Queries:** Case-insensitive search using `ILike` and sorting by newest first.

## API Endpoints

### Product Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/products` | Create a new product |
| GET | `/products` | Get all products (newest first) |
| GET | `/products/search` | Search products by name (Query: `keyword`) |
| GET | `/products/category/:cat` | Get products by category |
| GET | `/products/:id` | Get product by ID |
| PATCH | `/products/:id` | Update product partially |
| PUT | `/products/:id` | Replace product fully |
| DELETE | `/products/:id` | Delete product |
| PATCH | `/products/:id/toggle` | Toggle product active status |

## Requirements & Steps

### Step 1: Project Scaffolding
Created a new NestJS project and generated the `products` module, controller, and service.

### Step 2: Dependency Installation
Installed `@nestjs/typeorm`, `typeorm`, `pg` (PostgreSQL driver), and validation packages.

### Step 3: Database Configuration
Configured `TypeOrmModule` in `app.module.ts` and enabled global validation pipes in `main.ts`.

### Step 4: Entity & DTO Implementation
Defined the `Products` entity with appropriate decorators and created three specialized DTOs for different update scenarios.

### Step 5: Service & Controller Logic
Implemented business logic in `ProductsService` using the Repository pattern and exposed endpoints in `ProductsController` with proper route ordering.

## Getting Started

### Prerequisites
- Node.js & npm
- PostgreSQL database (`product_inventory_db`)

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
