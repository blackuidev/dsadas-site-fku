import { Link } from 'react-router-dom';
import { Button } from '@/components/lightswind/button';
import { GlowingCards, GlowingCard } from '@/components/lightswind/glowing-cards';
import { products } from '@/lib/data';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

const Home = () => {
    const featuredProducts = products.filter(p => p.tags.includes('featured')).slice(0, 3);
    const addToCart = useCartStore(state => state.addToCart);
    const addToWishlist = useWishlistStore(state => state.addToWishlist);

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2835&auto=format&fit=crop"
                    alt="Elegant dresses on display"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg mb-4">
                        Elegance Redefined
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                        Discover our new collection of exquisite dresses, crafted for the modern woman.
                    </p>
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                        <Link to="/products">Shop Now</Link>
                    </Button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
                <GlowingCards>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <GlowingCard key={product.id} className="p-0 overflow-hidden">
                                <div className="relative group">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                                    </Link>
                                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="icon" variant="outline" className="rounded-full bg-white/80 backdrop-blur-sm" onClick={() => addToCart(product)}>
                                            <ShoppingCart className="h-5 w-5" />
                                        </Button>
                                        <Button size="icon" variant="outline" className="rounded-full bg-white/80 backdrop-blur-sm" onClick={() => addToWishlist(product)}>
                                            <Heart className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">{product.category}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-xl">
                                            ${product.salePrice}
                                            {product.price > product.salePrice && (
                                                <span className="text-gray-500 line-through ml-2">${product.price}</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </GlowingCard>
                        ))}
                    </div>
                </GlowingCards>
            </section>

            {/* Brand Promise Section */}
            <section className="bg-gray-100 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
                        <p className="text-gray-600 dark:text-gray-400">On all orders over $50. Experience convenience with every purchase.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Easy Returns</h3>
                        <p className="text-gray-600 dark:text-gray-400">Not in love? No problem. We offer a 30-day return policy.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Sustainable Fashion</h3>
                        <p className="text-gray-600 dark:text-gray-400">Crafted with eco-friendly materials and ethical practices.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
