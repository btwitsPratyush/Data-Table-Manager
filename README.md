# 📊 Dynamic Data Table Manager

A modern, full-featured data table management system built with React that enables users to view, manipulate, and manage tabular data with advanced features like CSV import/export, dynamic column management, and real-time editing capabilities.

![Data Table Manager](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.10-purple?style=for-the-badge&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Core Functionality
- **📋 Interactive Data Table**: Responsive table display with sortable columns and pagination
- **🔍 Global Search**: Real-time filtering across all visible columns
- **✏️ Inline Editing**: Double-click any cell to edit data on the fly
- **📥 CSV Import**: Upload and parse CSV files with automatic column detection
- **📤 CSV Export**: Download current table data with visible columns only
- **🎛️ Column Management**: 
  - Toggle column visibility
  - Add custom fields dynamically (Department, Location, Phone, etc.)
  - Persistent column preferences

### User Experience
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **♻️ Row Actions**: Delete rows with confirmation dialogs
- **📄 Pagination**: Navigate through data with 10 rows per page
- **🎯 Sort Controls**: Click column headers to sort ascending/descending

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Lightning-fast build tool and development server

### State Management
- **Redux Toolkit 2.10** - Centralized state management with slices
- **React Redux 9.2** - Official React bindings for Redux

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, consistent icon set
- **Radix UI** - Unstyled, accessible component primitives

### Data Processing
- **PapaParse 5.5** - Powerful CSV parsing library
- **FileSaver.js 2.0** - Client-side file saving functionality

### Routing
- **React Router DOM 6.30** - Declarative routing for React applications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed on your machine

### Installation

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

## 📖 Usage Guide

### Viewing Data
- The table displays data with default columns: Name, Email, Age, and Role
- Use pagination controls at the bottom to navigate through records
- Click column headers to sort data in ascending or descending order

### Searching Data
- Use the global search bar to filter data across all visible columns
- Search is case-insensitive and updates in real-time

### Editing Data
- **Inline Edit**: Double-click any cell to enter edit mode
- **Delete Row**: Click the trash icon to remove a row (with confirmation)

### Managing Columns
1. Click the "Manage Columns" button
2. Toggle checkboxes to show/hide columns
3. Add new custom fields by entering a name and clicking "Add Column"
4. Changes are reflected immediately in the table

### Importing CSV Data
1. Click the "Import CSV" button
2. Select a CSV file from your computer
3. The system automatically detects columns and imports data
4. New columns are automatically added if they don't exist

### Exporting Data
1. Click the "Export CSV" button
2. A CSV file containing all visible columns will be downloaded
3. Hidden columns are excluded from the export

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn)
│   ├── DataTable.tsx   # Main table component
│   ├── TableControls.tsx # Search and action buttons
│   ├── ColumnManager.tsx # Column visibility manager
│   ├── CSVImport.tsx   # CSV import dialog
│   └── CSVExport.tsx   # CSV export functionality
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── store/              # Redux state management
│   ├── store.ts        # Redux store configuration
│   ├── tableSlice.ts   # Table state slice
│   └── hooks.ts        # Typed Redux hooks
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.css           # Global styles and design tokens
```

## 🎨 Design System

The application uses a semantic token-based design system defined in `src/index.css` and `tailwind.config.ts`:

- **Color Palette**: Professional slate/blue theme with dark mode support
- **Typography**: System font stack with consistent sizing
- **Spacing**: 8px base grid system
- **Animations**: Smooth transitions and hover effects
- **Components**: Consistent styling across all UI elements

## 🔧 Configuration

### Tailwind Configuration
Customize the design system in `tailwind.config.ts` to match your brand:
- Colors and themes
- Typography scales
- Spacing and sizing
- Border radius
- Animations

### Redux Store
The store configuration in `src/store/store.ts` can be extended with additional slices for new features.

## 📝 Data Model

### TableRow Interface
```typescript
interface TableRow {
  id: string;
  name: string;
  email: string;
  age: number;
  role: string;
  [key: string]: string | number; // Dynamic fields
}
```

### Column Interface
```typescript
interface Column {
  id: string;
  label: string;
  visible: boolean;
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern React best practices
- UI components powered by shadcn/ui and Radix UI
- Icons by Lucide React
- CSV processing by PapaParse

## 📧 Contact

For questions, issues, or suggestions, please open an issue on the repository.

---

**Made with ❤️ using React, TypeScript, and Redux Toolkit**
