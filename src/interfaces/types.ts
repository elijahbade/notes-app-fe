// types.ts

// Define the structure of a single Note
export interface Note {
    id: string;
    title: string;
    content: string;
    date: string; // Alternatively, Date type can be used if dates are handled as JS Date objects
  }
  
  // Define the structure of a single Folder
  export interface Folder {
    id: string;
    name: string;
  }
  
  // Optionally, you could define a type for API responses if they have a common structure
  export interface ApiResponse<T> {
    data: T;
    message?: string;
    status?: number;
  }

 export  interface HeaderProps {
    title: string;
    onSearch: (searchTerm: string) => void;
  }
  