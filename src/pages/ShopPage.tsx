import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const categories = ['All', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Shop | MBJJ</title>
        <meta name="description" content="Shop for premium Brazilian Jiu-Jitsu gis, rashguards, and training gear. Get the equipment you need to excel on the mats." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7045396/pexels-photo-7045396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        <div className="absolute inset-0 bg-neutral-900 opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-50 mb-6">
              MBJJ Shop
            </h1>
            <p className="text-xl text-neutral-300">
              Premium gis, rashguards, and training gear featuring our signature designs
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="mb-12 overflow-x-auto">
            <div className="inline-flex border border-neutral-200 rounded-md">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-2 px-4 font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-neutral-900 text-neutral-50'
                      : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                  } ${index === 0 ? 'rounded-l-md' : ''} ${
                    index === categories.length - 1 ? 'rounded-r-md' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Cart Summary (Mobile) */}
          <div className="lg:hidden mb-8">
            <Link 
              to="/cart" 
              className="flex items-center justify-between bg-neutral-100 p-4 rounded-md shadow-sm"
            >
              <span className="font-medium text-neutral-900">Your Cart</span>
              <div className="flex items-center">
                <span className="font-bold text-secondary-500 mr-2">{totalItems} items</span>
                <ShoppingCart size={20} className="text-secondary-500" />
              </div>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
              <p className="text-neutral-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Membership */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
              <div 
                className="lg:w-1/2 h-64 lg:h-auto bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.pexels.com/photos/8111981/pexels-photo-8111981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
              />
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="mb-4">
                  <span className="inline-block bg-secondary-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold text-neutral-50 mb-4">
                  Monthly Membership
                </h2>
                <p className="text-neutral-300 mb-6">
                  Unlock unlimited access to all classes including BJJ, No-Gi, and open mat sessions. Your membership includes free gi rental for your first month and access to our online training resources.
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-secondary-500">$129.99</span>
                  <span className="text-neutral-400 ml-2">/ month</span>
                </div>
                <Link 
                  to="/shop/membership-monthly" 
                  className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-semibold py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 text-center">
              Shipping & Returns
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Shipping Policy</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Orders are processed and shipped within 1-2 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Standard shipping (5-7 business days): $5.99</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Express shipping (2-3 business days): $12.99</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Free shipping on orders over $100</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Returns & Exchanges</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>30-day return policy for unused items in original packaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Exchanges available for incorrect sizes or defective products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Return shipping fees are the responsibility of the customer unless the item is defective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Contact us at returns@mbjj.com to initiate a return</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    featured: boolean;
    inStock: boolean;
  };
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <Link to={`/shop/${product.id}`} className="block">
        <div 
          className="h-64 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        >
          {product.featured && (
            <span className="absolute top-0 right-0 bg-secondary-500 text-neutral-50 text-xs font-bold px-3 py-1">
              Featured
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-neutral-50 text-neutral-900 font-bold px-4 py-2 rounded-md">
                Out of Stock
              </span>
            </div>
          )}
          {product.images.length > 1 && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${product.images[1]})` }}
            />
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/shop/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-secondary-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-neutral-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-secondary-500">${product.price.toFixed(2)}</span>
          <Link 
            to={`/shop/${product.id}`} 
            className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-medium py-2 px-4 rounded-md text-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopPage;