import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Denim Jacket',
    price: 85,
    description: 'Classic 90s style denim jacket with a comfortable fit.',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=800',
    size: 'L',
    condition: 'Excellent'
  },
  {
    id: '2',
    name: 'Retro 80s Windbreaker',
    price: 55,
    description: 'Colorful windbreaker from the late 80s. Water resistant.',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?q=80&w=800',
    size: 'M',
    condition: 'Very Good'
  },
  {
    id: '3',
    name: 'Classic Band Tee',
    price: 35,
    description: 'Original 70s rock band t-shirt. Soft cotton.',
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800',
    size: 'M',
    condition: 'Good'
  },
  {
    id: '4',
    name: 'High-Waist Levi 501s',
    price: 75,
    description: 'Authentic vintage Levi 501 jeans in light wash.',
    category: 'Pants',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800',
    size: 'W30 L32',
    condition: 'Excellent'
  }
];
