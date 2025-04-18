import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Calendar, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { classes } from '../data/classes';
import { instructors } from '../data/instructors';

const heroImages = [
  'https://images.pexels.com/photos/8989428/pexels-photo-8989428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/7045511/pexels-photo-7045511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/7991575/pexels-photo-7991575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/8534469/pexels-photo-8534469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredProducts = products.filter(product => product.featured);
  const highlightedClasses = classes.slice(0, 3);
  const featuredInstructors = instructors.slice(0, 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>MBJJ - Premier Brazilian Jiu-Jitsu Academy</title>
        <meta name="description" content="Join MBJJ for world-class Brazilian Jiu-Jitsu training. Classes for all skill levels, expert coaches, and a supportive community." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${image})`,
                filter: "brightness(40%)"
              }}
            />
          </motion.div>
        ))}
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-50 mb-6">
              Transform Through <span className="text-secondary-500">Brazilian Jiu-Jitsu</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Join MBJJ for world-class training in a supportive community. Whether you're a beginner or competitor, we have the program for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/schedule" 
                className="bg-neutral-700 hover:bg-neutral-600 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Why Choose MBJJ?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a world-class training environment focused on technical excellence, personal growth, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award size={48} className="text-secondary-500" />,
                title: "Expert Instructors",
                description: "Learn from championship-level black belts with decades of combined experience."
              },
              {
                icon: <Users size={48} className="text-secondary-500" />,
                title: "Supportive Community",
                description: "Train in a welcoming, ego-free environment focused on mutual growth and respect."
              },
              {
                icon: <Calendar size={48} className="text-secondary-500" />,
                title: "Flexible Schedule",
                description: "With 40+ classes weekly, find training times that fit your busy lifestyle."
              },
              {
                icon: <ShieldCheck size={48} className="text-secondary-500" />,
                title: "Modern Facility",
                description: "Train on 2,500 sq ft of premium mats with clean changing rooms and showers."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Premium gear designed for serious practitioners. Quality you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                <Link to={`/shop/${product.id}`} className="block">
                  <div 
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                  >
                    <div className="absolute top-0 right-0 bg-secondary-500 text-neutral-50 px-3 py-1 text-sm font-medium">
                      Featured
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link to={`/shop/${product.id}`}>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-secondary-500 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-neutral-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary-500">${product.price.toFixed(2)}</span>
                    <Link 
                      to={`/shop/${product.id}`} 
                      className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-bold text-lg"
            >
              View All Products <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-50 mb-4">
              Our Classes
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              From beginner-friendly fundamentals to advanced competition training, we have the perfect program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedClasses.map((classItem, index) => (
              <motion.div 
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-lg overflow-hidden"
              >
                <div 
                  className="h-56 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${classItem.image})` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary-500 text-neutral-50">
                      {classItem.level}
                    </span>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-neutral-700 text-neutral-300">
                      {classItem.ageGroup}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-50 mb-2">{classItem.title}</h3>
                  <p className="text-neutral-400 mb-4 line-clamp-2">{classItem.description}</p>
                  <Link 
                    to="/classes" 
                    className="inline-block font-medium text-secondary-500 hover:text-secondary-400"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/classes"
              className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors inline-block"
            >
              View All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from our students who have transformed their lives through training at MBJJ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Training at MBJJ has completely transformed my life. I've lost 30 pounds, gained incredible confidence, and learned real self-defense skills that work.",
                name: "Michael Chen",
                role: "Student for 2 years",
                image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The competition team at MBJJ is unmatched. The training is intense, technical, and has helped me win multiple tournaments. This is where champions are made.",
                name: "Sarah Johnson",
                role: "Competition Team Member",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "My son has been in the kids program for a year. The transformation in his confidence and discipline has been incredible. The instructors really know how to connect with kids.",
                name: "David Wilson",
                role: "Parent",
                image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-100 p-8 rounded-lg relative"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-bold text-neutral-900">{review.name}</h3>
                    <p className="text-neutral-600">{review.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="inline-block text-secondary-500 mr-1" />
                  ))}
                </div>
                <p className="text-neutral-700 italic">{review.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-50 mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-neutral-50/90 mb-8">
              Join MBJJ and experience the most effective martial art in the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/schedule" 
                className="bg-neutral-50 hover:bg-neutral-200 text-secondary-500 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;