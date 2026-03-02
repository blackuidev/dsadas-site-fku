import { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/shared/ProductCard';
import { Slider } from '@/components/lightswind/slider';

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [category, setCategory] = useState('all');

    const handleFilter = () => {
        let tempProducts = products;

        if (category !== 'all') {
            tempProducts = tempProducts.filter(p => p.category.toLowerCase() === category);
        }

        tempProducts = tempProducts.filter(p => p.salePrice >= priceRange[0] && p.salePrice <= priceRange[1]);

        setFilteredProducts(tempProducts);
    };
    
    // This should be run on mount and when filters change
    useState(() => {
        handleFilter();
    });

    const categories = ['all', ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

    return (
        <div className="container mx-auto px-4 py-12">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Collection</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Find the perfect dress for any occasion.</p>
            </header>
            <div className="flex flex-col md:flex-row gap-12">
                {/* Filters */}
                <aside className="w-full md:w-1/4">
                    <div className="sticky top-24 space-y-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Category</h3>
                            <select
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    handleFilter();
                                }}
                                className="w-full p-2 border rounded bg-transparent border-gray-300 dark:border-gray-700"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat} className="capitalize bg-white dark:bg-black">{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                            <Slider
                                defaultValue={[500]}
                                max={1000}
                                step={10}
                                onValueChange={(value) => setPriceRange(value)}
                                onValueCommit={handleFilter}
                            />
                            <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Products;
