export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  imageUrl?: string;
  rating: number;
}

export interface SearchInputProps {
  onSearch: (query: string) => void;
}