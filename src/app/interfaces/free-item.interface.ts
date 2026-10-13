export interface FreeItem {
  id: number;
  name: string;
  category: string;
  year: number;
  rating: number; // de 1 a 5
  description: string;
  image: string;
  tags: string[];
}