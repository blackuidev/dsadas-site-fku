export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    category: string;
    tags: string[];
    images: string[];
    rating: number;
    reviews: number;
    sizes: string[];
    colors: string[];
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Floral Print Midi Dress',
        description: 'A beautiful floral print midi dress, perfect for spring and summer occasions. Made from lightweight and breathable fabric.',
        price: 120.00,
        salePrice: 89.99,
        category: 'Midi',
        tags: ['featured', 'floral', 'spring'],
        images: [
            'https://images.unsplash.com/photo-1595500484512-b892a0e4a7b2?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595500484512-b892a0e4a7b2?q=80&w=2787&auto=format&fit=crop',
        ],
        rating: 4.5,
        reviews: 120,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#FFC0CB', '#ADD8E6', '#90EE90'],
    },
    {
        id: '2',
        name: 'Elegant Evening Gown',
        description: 'A stunning full-length evening gown with intricate beading. Perfect for formal events and galas.',
        price: 350.00,
        salePrice: 299.99,
        category: 'Maxi',
        tags: ['formal', 'evening'],
        images: [
            'https://images.unsplash.com/photo-1590382197644-a7445385108a?q=80&w=2864&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590382197644-a7445385108a?q=80&w=2864&auto=format&fit=crop',
        ],
        rating: 5,
        reviews: 45,
        sizes: ['S', 'M', 'L'],
        colors: ['#000000', '#C0C0C0', '#FFD700'],
    },
    {
        id: '3',
        name: 'Casual Summer Mini Dress',
        description: 'A light and airy mini dress perfect for a day at the beach or a casual outing. Made from 100% cotton.',
        price: 75.00,
        salePrice: 59.99,
        category: 'Mini',
        tags: ['featured', 'casual', 'summer'],
        images: [
            'https://images.unsplash.com/photo-1529323138328-b864a7844050?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529323138328-b864a7844050?q=80&w=2787&auto=format&fit=crop',
        ],
        rating: 4,
        reviews: 210,
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['#FFFFFF', '#87CEEB', '#F0E68C'],
    },
    {
        id: '4',
        name: 'Bohemian Maxi Dress',
        description: 'Flowy and comfortable, this bohemian style maxi dress features a unique pattern and a relaxed fit.',
        price: 150.00,
        salePrice: 119.99,
        category: 'Maxi',
        tags: ['boho', 'summer'],
        images: [
            'https://images.unsplash.com/photo-1508743389333-747ac76116d6?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508743389333-747ac76116d6?q=80&w=2787&auto=format&fit=crop',
        ],
        rating: 4.8,
        reviews: 88,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#DEB887', '#A0522D', '#556B2F'],
    },
    {
        id: '5',
        name: 'Satin Slip Midi Dress',
        description: 'A luxurious satin slip dress that drapes beautifully on the body. Can be dressed up or down.',
        price: 180.00,
        salePrice: 149.99,
        category: 'Midi',
        tags: ['featured', 'luxury', 'evening'],
        images: [
            'https://images.unsplash.com/photo-1620012819894-e0881f4a9a4a?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1620012819894-e0881f4a9a4a?q=80&w=2787&auto=format&fit=crop',
        ],
        rating: 4.9,
        reviews: 95,
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['#B22222', '#4682B4', '#3CB371'],
    },
    {
        id: '6',
        name: 'Classic Little Black Dress',
        description: 'An essential piece for any wardrobe. This little black dress is timeless and versatile.',
        price: 110.00,
        salePrice: 99.99,
        category: 'Mini',
        tags: ['classic', 'formal'],
        images: [
            'https://images.unsplash.com/photo-1579975794262-a0f6a6b6f7e9?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1579975794262-a0f6a6b6f7e9?q=80&w=2787&auto=format&fit=crop',
        ],
        rating: 5,
        reviews: 300,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#000000'],
    }
];
