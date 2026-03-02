import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Chic & Charm</h3>
                        <p className="text-gray-600 dark:text-gray-400">Elegance for the modern woman.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:underline">New Arrivals</Link></li>
                            <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:underline">Best Sellers</Link></li>
                            <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:underline">Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">About Us</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:underline">Our Story</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Icons would go here */}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Chic & Charm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
