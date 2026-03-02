import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/lightswind/button';
import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

const Navbar = () => {
    const cartItemCount = useCartStore(state => state.items.length);
    const wishlistItemCount = useWishlistStore(state => state.items.length);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Dresses' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-wider">
                    Chic & Charm
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${isActive ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link to="/wishlist" className="relative">
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                            {wishlistItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{wishlistItemCount}</span>
                            )}
                        </Button>
                    </Link>
                    <Link to="/cart" className="relative">
                        <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-5 w-5" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{cartItemCount}</span>
                            )}
                        </Button>
                    </Link>
                    <Button className="hidden md:inline-flex">Sign In</Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
