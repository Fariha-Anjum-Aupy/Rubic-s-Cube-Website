export interface ProductSpecs {
  size: string;
  weight: string;
  mechanism: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  cornerCutting: string;
  magnetized: boolean;
  wcaApproved?: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  shortDescription: string;
  specs: ProductSpecs;
  features: string[];
  recommendedFor: string[];
}