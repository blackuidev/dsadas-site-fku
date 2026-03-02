import { useParams } from 'react-router-dom';
import { products } from '@/lib/data';
import { Button } from '@/components/lightswind/button';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import NotFound from './NotFound';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const addToCart = useCartStore(state => state.addToCart);
    const addToWishlist = useWishlistStore(state => state.addToWishlist);

    if (!product) {
        return <NotFound />;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div>
                    <img src={product.images[0]} alt={product.name} className="w-full rounded-lg shadow-lg mb-4" />
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.slice(1, 5).map((img, index) => (
                            <img key={index} src={img} alt={`${product.name} view ${index + 2}`} className="w-full rounded-md cursor-pointer hover:opacity-80 transition" />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
                    </div>
                    <p className="text-3xl font-light mb-6">
                        ${product.salePrice}
                        {product.price > product.salePrice && (
                            <span className="text-gray-500 line-through ml-3 text-xl">${product.price}</span>
                        )}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="font-semibold">Size:</h3>
                        <div className="flex gap-2">
                            {product.sizes.map(size => (
                                <Button key={size} variant="outline" size="sm">{size}</Button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="font-semibold">Color:</h3>
                        <div className="flex gap-2">
                            {product.colors.map(color => (
                                <div key={color} className="w-8 h-8 rounded-full border-2" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button size="lg" className="flex-1" onClick={() => addToCart(product)}>
                            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => addToWishlist(product)}>
                            <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
