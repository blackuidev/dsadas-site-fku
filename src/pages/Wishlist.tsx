import { useWishlistStore } from '@/store/useWishlistStore';
import { Button } from '@/components/lightswind/button';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shared/ProductCard';

const Wishlist = () => {
    const { items } = useWishlistStore();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Your Wishlist</h1>
            {items.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 mb-4">Your wishlist is empty.</p>
                    <Button asChild>
                        <Link to="/products">Discover Products</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {items.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
