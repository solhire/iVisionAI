export interface TestimonialType {
  id: number;
  name: string;
  title: string;
  location: string;
  category: string;
  quote: string;
  featured: boolean;
  image?: string;
}

export interface TestimonialCategoryType {
  id: string;
  label: string;
} 