import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/lightswind/button';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items, removeFromCart, updateQuantity } = useCartStore();
    const subtotal = items.reduce((acc, item) => acc + item.salePrice * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Shopping Cart</h1>
            {items.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
                    <Button asChild>
                        <Link to="/products">Continue Shopping</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        {items.map(item => (
                            <div key={item.id} className="flex items-center gap-6 p-4 border rounded-lg">
                                <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="flex-1">
                                    <h2 className="font-semibold text-lg">{item.name}</h2>
                                    <p className="text-gray-500">${item.salePrice}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 p-2 border rounded bg-transparent"
                                    />
                                </div>
                                <p className="font-semibold w-20 text-right">${(item.salePrice * item.quantity).toFixed(2)}</p>
                                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                                    <Trash2 className="h-5 w-5 text-red-500" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
                            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                            <div className="flex justify-between mb-4">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-bold text-xl mb-6">
                                <span>Total</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <Button size="lg" className="w-full">Proceed to Checkout</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
