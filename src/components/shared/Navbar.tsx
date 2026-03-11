import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { cart } = useCartStore();
  const { wishlist } = useWishlistStore();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
      isActive ? 'after:scale-x-100' : ''
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-4 text-2xl text-center ${isActive ? 'text-white font-bold' : 'text-gray-300'}`;

  const iconButtonClass = "relative hover:text-gray-300 transition-colors";

  const renderNavLinks = (mobile = false) =>
    navLinks.map((link) => (
      <NavLink
        key={link.href}
        to={link.href}
        className={mobile ? mobileLinkClass : linkClass}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    ));

  const renderIconLinks = () => (
    <div className="flex items-center gap-6">
      <NavLink to="/wishlist" className={iconButtonClass}>
        <Heart size={24} />
        {wishlist.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
      </NavLink>
      <NavLink to="/cart" className={iconButtonClass}>
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </NavLink>
    </div>
  );

  return (
    <header className="bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          ZENITH
        </Link>

        {!isMobile && (
          <div className="hidden md:flex items-center gap-8">
            {renderNavLinks()}
          </div>
        )}

        <div className="hidden md:flex items-center gap-6">
          {renderIconLinks()}
        </div>

        {isMobile && (
          <div className="md:hidden flex items-center gap-4">
             {renderIconLinks()}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}
      </nav>

      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 z-40">
          {renderNavLinks(true)}
        </div>
      )}
    </header>
  );
};

export default Navbar;
