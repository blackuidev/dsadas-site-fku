import { Github, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' },
  ];

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { label: 'All Products', href: '/products' },
        { label: 'Featured', href: '#' },
        { label: 'New Arrivals', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Shipping & Returns', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">ZENITH</h3>
            <p className="text-sm">Premium products for the modern world.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Social link ${index + 1}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zenith. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
