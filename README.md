# El Admin - Modern Admin Dashboard

El Admin is a high-performance, aesthetically pleasing admin dashboard built with **React 19**, **TypeScript**, and **Vite**. It features a modern, high-contrast dark theme inspired by the Apex Dashboard, providing a premium user experience for administrative interfaces.

## 🚀 Features

- **Dashboard**: Interactive data visualizations using Recharts.
- **Form Elements**: Custom-designed form inputs including standard, searchable, and multi-select dropdowns, plus a custom date picker.
- **File Upload**: Integrated drag-and-drop file upload functionality (Dropzone).
- **Authentication**: Complete auth flow with Login, Signup, and Forgot Password pages.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **Modern UI Components**: Reusable Modals, Tables, and UI elements.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and [npm](https://www.npmjs.com/) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ravindercodes/el-admin.git
   cd el-admin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Linting

To run the linter:
```bash
npm run lint
```

## 📂 Project Structure

- `src/components`: Reusable UI components (Modal, Table, Dropzone, etc.).
- `src/pages`: Individual page components (Dashboard, Orders, Auth, etc.).
- `src/assets`: Static assets like images and styles.
- `tailwind.config.js`: Tailwind CSS configuration for themes and colors.

## 📝 License

This project is licensed under the MIT License.

