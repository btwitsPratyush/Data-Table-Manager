import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TableRow {
  id: string;
  name: string;
  email: string;
  age: number;
  role: string;
  [key: string]: string | number;
}

export interface Column {
  id: string;
  label: string;
  visible: boolean;
}

interface TableState {
  data: TableRow[];
  columns: Column[];
  searchQuery: string;
  currentPage: number;
  rowsPerPage: number;
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
}

const defaultColumns: Column[] = [
  { id: 'name', label: 'Name', visible: true },
  { id: 'email', label: 'Email', visible: true },
  { id: 'age', label: 'Age', visible: true },
  { id: 'role', label: 'Role', visible: true },
];

const defaultData: TableRow[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice.j@example.com', age: 28, role: 'Developer' },
  { id: '2', name: 'Bob Smith', email: 'bob.smith@example.com', age: 34, role: 'Designer' },
  { id: '3', name: 'Carol White', email: 'carol.w@example.com', age: 31, role: 'Manager' },
  { id: '4', name: 'David Brown', email: 'david.b@example.com', age: 29, role: 'Developer' },
  { id: '5', name: 'Eva Green', email: 'eva.green@example.com', age: 26, role: 'Designer' },
  { id: '6', name: 'Frank Miller', email: 'frank.m@example.com', age: 42, role: 'Director' },
  { id: '7', name: 'Grace Lee', email: 'grace.lee@example.com', age: 30, role: 'Developer' },
  { id: '8', name: 'Henry Davis', email: 'henry.d@example.com', age: 27, role: 'Designer' },
  { id: '9', name: 'Iris Chen', email: 'iris.chen@example.com', age: 33, role: 'Manager' },
  { id: '10', name: 'Jack Wilson', email: 'jack.w@example.com', age: 35, role: 'Developer' },
  { id: '11', name: 'Karen Taylor', email: 'karen.t@example.com', age: 29, role: 'Designer' },
  { id: '12', name: 'Leo Martinez', email: 'leo.m@example.com', age: 31, role: 'Developer' },
];

const initialState: TableState = {
  data: defaultData,
  columns: defaultColumns,
  searchQuery: '',
  currentPage: 0,
  rowsPerPage: 10,
  sortColumn: null,
  sortDirection: 'asc',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TableRow[]>) => {
      state.data = action.payload;
      state.currentPage = 0;
    },
    addRow: (state, action: PayloadAction<TableRow>) => {
      state.data.push(action.payload);
    },
    updateRow: (state, action: PayloadAction<TableRow>) => {
      const index = state.data.findIndex(row => row.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteRow: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(row => row.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 0;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSortColumn: (state, action: PayloadAction<string>) => {
      if (state.sortColumn === action.payload) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortColumn = action.payload;
        state.sortDirection = 'asc';
      }
    },
    toggleColumnVisibility: (state, action: PayloadAction<string>) => {
      const column = state.columns.find(col => col.id === action.payload);
      if (column) {
        column.visible = !column.visible;
      }
    },
    addColumn: (state, action: PayloadAction<{ id: string; label: string }>) => {
      state.columns.push({ ...action.payload, visible: true });
    },
    importData: (state, action: PayloadAction<TableRow[]>) => {
      state.data = action.payload;
      state.currentPage = 0;
    },
  },
});

export const {
  setData,
  addRow,
  updateRow,
  deleteRow,
  setSearchQuery,
  setCurrentPage,
  setSortColumn,
  toggleColumnVisibility,
  addColumn,
  importData,
} = tableSlice.actions;

export default tableSlice.reducer;
