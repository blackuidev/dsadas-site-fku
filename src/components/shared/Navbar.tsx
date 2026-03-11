import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleTheme } from "@/components/lightswind/toggle-theme";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-32-88a32,32,0,1,1,32,32A32.09,32.09,0,0,1,96,128Z"></path>
                    </svg>
                    <span className="font-bold text-lg">Dressify</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) =>
                                `relative text-sm font-medium transition-colors hover:text-pink-600 dark:hover:text-pink-400 ${isActive ? "text-pink-600 dark:text-pink-400" : "text-gray-600 dark:text-gray-300"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600 dark:bg-pink-400"
                                            layoutId="underline"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Right side icons & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4">
                        <ToggleTheme />
                        <Link to="/wishlist" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Wishlist</span>
                        </Link>
                        <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="sr-only">Cart</span>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="relative h-8 w-8 text-gray-800 dark:text-gray-200 transition-colors"
                            animate={isMenuOpen ? "open" : "closed"}
                            initial={false}
                        >
                            <motion.span
                                className="absolute block h-0.5 w-5 bg-current"
                                style={{ left: '50%', top: '35%', x: '-50%', y: '-50%' }}
                                variants={{
                                    open: { rotate: 45, y: 5 },
                                    closed: { rotate: 0, y: 0 }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="absolute block h-0.5 w-5 bg-current"
                                style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
                                variants={{
                                    open: { opacity: 0 },
                                    closed: { opacity: 1 }
                                }}
                                transition={{ duration: 0.15 }}
                            />
                            <motion.span
                                className="absolute block h-0.5 w-5 bg-current"
                                style={{ left: '50%', top: '65%', x: '-50%', y: '-50%' }}
                                variants={{
                                    open: { rotate: -45, y: -5 },
                                    closed: { rotate: 0, y: 0 }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200/80 dark:border-gray-800/80"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <nav className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    to={link.href}
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400" : "text-gray-700 dark:text-gray-300"}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <div className="border-t border-gray-200 dark:border-gray-700 my-4" />
                            <div className="flex items-center justify-between px-3">
                                <div className="flex items-center gap-4">
                                     <Link to="/wishlist" onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
                                        <Heart className="h-6 w-6" />
                                        <span className="sr-only">Wishlist</span>
                                    </Link>
                                    <Link to="/cart" onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
                                        <ShoppingBag className="h-6 w-6" />
                                        <span className="sr-only">Cart</span>
                                    </Link>
                                </div>
                                <ToggleTheme />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
