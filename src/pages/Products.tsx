import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/data';
import ProductCard from '@/components/shared/ProductCard';
import { GridDotBackground } from "@/components/lightswind/grid-dot-backgrounds";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/lightswind/accordion";
import { Checkbox } from "@/components/lightswind/checkbox";
import { Slider } from "@/components/lightswind/slider";
import { Button } from "@/components/lightswind/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/lightswind/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/lightswind/sheet";
import { SlidersHorizontal, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const allCategories = [...new Set(products.map(p => p.category))];
const allSizes = [...new Set(products.flatMap(p => p.sizes))];
const minPrice = Math.min(...products.map(p => p.price));
const maxPrice = Math.max(...products.map(p => p.price));

const Products = () => {
    const [filters, setFilters] = useState({
        categories: [],
        sizes: [],
        priceRange: [minPrice, maxPrice],
    });
    const [sortOption, setSortOption] = useState('newest');
    const isMobile = useIsMobile();

    const handleCategoryChange = (category) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const handleSizeChange = (size) => {
        setFilters(prev => ({
            ...prev,
            sizes: prev.sizes.includes(size)
                ? prev.sizes.filter(s => s !== size)
                : [...prev.sizes, size]
        }));
    };

    const handlePriceChange = (value) => {
        setFilters(prev => ({ ...prev, priceRange: value }));
    };
    
    const clearFilters = () => {
        setFilters({
            categories: [],
            sizes: [],
            priceRange: [minPrice, maxPrice],
        });
    };

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter(product => {
            const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
            const sizeMatch = filters.sizes.length === 0 || product.sizes.some(s => filters.sizes.includes(s));
            const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            return categoryMatch && sizeMatch && priceMatch;
        });

        switch (sortOption) {
            case 'price-asc':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return filtered.sort((a, b) => b.price - a.price);
            case 'newest':
            default:
                return filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }
    }, [filters, sortOption]);

    const FilterSidebar = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">Clear all</Button>
            </div>
            <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
                <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2">
                            {allCategories.map(category => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`cat-${category}`}
                                        checked={filters.categories.includes(category)}
                                        onCheckedChange={() => handleCategoryChange(category)}
                                    />
                                    <label htmlFor={`cat-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                        <div className="p-2">
                            <Slider
                                defaultValue={filters.priceRange}
                                min={minPrice}
                                max={maxPrice}
                                step={10}
                                onValueChange={handlePriceChange}
                            />
                            <div className="flex justify-between text-sm mt-2">
                                <span>${filters.priceRange[0]}</span>
                                <span>${filters.priceRange[1]}</span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sizes">
                    <AccordionTrigger>Sizes</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-wrap gap-2">
                            {allSizes.map(size => (
                                <Button
                                    key={size}
                                    variant={filters.sizes.includes(size) ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="relative">
                <GridDotBackground>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-red-400"
                        >
                            Our Collection
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
                        >
                            Discover the latest trends and timeless classics.
                        </motion.p>
                    </div>
                </GridDotBackground>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters */}
                    {isMobile ? (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="lg:hidden flex items-center gap-2 mb-4">
                                    <SlidersHorizontal className="h-4 w-4" />
                                    Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>
                                <div className="p-4">
                                    <FilterSidebar />
                                </div>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24">
                                <FilterSidebar />
                            </div>
                        </aside>
                    )}

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-muted-foreground">{filteredAndSortedProducts.length} products</p>
                            <Select value={sortOption} onValueChange={setSortOption}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <AnimatePresence>
                            <motion.div 
                                layout 
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                            >
                                {filteredAndSortedProducts.map((product, i) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;
