import { Link } from 'react-router-dom';
import { Button } from '@/components/lightswind/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Product } from '@/lib/data';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const addToCart = useCartStore(state => state.addToCart);
    const { items: wishlistItems, addToWishlist, removeFromWishlist } = useWishlistStore();
    const isInWishlist = wishlistItems.some(item => item.id === product.id);

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden group transition-shadow hover:shadow-xl">
            <div className="relative">
                <Link to={`/products/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
                </Link>
                <div className="absolute top-3 right-3">
                    <Button size="icon" variant="outline" className="rounded-full bg-white/80 backdrop-blur-sm" onClick={handleWishlistToggle}>
                        <Heart className={`h-5 w-5 ${isInWishlist ? 'text-red-500 fill-current' : ''}`} />
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-base mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{product.category}</p>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">
                        ${product.salePrice}
                        {product.price > product.salePrice && (
                            <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
                        )}
                    </p>
                    <Button size="sm" variant="outline" onClick={() => addToCart(product)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
