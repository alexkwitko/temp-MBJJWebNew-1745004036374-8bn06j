import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'General Information'
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interest: 'General Information'
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Elite MBJJ</title>
        <meta name="description" content="Get in touch with Elite MBJJ. Contact us for information about classes, memberships, or to schedule your free trial." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/8989568/pexels-photo-8989568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-200">
              Have questions? We're here to help. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="bg-primary-800 text-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-accent-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-neutral-300">
                        1234 Martial Arts Blvd<br />
                        Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-accent-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-neutral-300">
                        <a href="tel:+12125551234" className="hover:text-secondary-500 transition-colors">
                          (212) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-accent-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-neutral-300">
                        <a href="mailto:info@elitembjj.com" className="hover:text-secondary-500 transition-colors">
                          info@elitembjj.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-accent-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Hours</h3>
                      <p className="text-neutral-300">
                        Monday - Friday: 6:00 AM - 9:00 PM<br />
                        Saturday: 8:00 AM - 5:00 PM<br />
                        Sunday: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.88-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.88.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.88.344-1.857.047-1.054.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.88-.3-1.857-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.064A5.135 5.135 0 0112 12a5.135 5.135 0 01-5.134 5.134A5.135 5.135 0 011.866 12 5.135 5.135 0 017 6.866zm0 8.468A3.334 3.334 0 108.667 12 3.333 3.333 0 0012 15.334zM16.5 6.5a1 1 0 100-2 1 1 0 000 2z"/></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48371.35847371849!2d-73.9959449!3d40.7306458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25af57b7175d3%3A0xc46c7d241b99d979!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1625012345678!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Elite MBJJ Location"
                />
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-md mb-6 ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-1">
                        I'm Interested In *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                      >
                        <option value="General Information">General Information</option>
                        <option value="Free Trial Class">Free Trial Class</option>
                        <option value="Membership Options">Membership Options</option>
                        <option value="Private Training">Private Training</option>
                        <option value="Kids Program">Kids Program</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Experience Elite MBJJ?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Your first class is absolutely free. No commitment, no pressure – just come see if Elite MBJJ is the right fit for you.
            </p>
            <button 
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg inline-block"
            >
              Claim Your Free Class
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-primary-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need any experience to start training?",
                answer: "Absolutely not! Most of our students start with zero experience. Our beginner-friendly classes are designed to introduce you to the fundamentals in a way that's accessible and non-intimidating."
              },
              {
                question: "What should I wear to my first class?",
                answer: "For your first class, comfortable athletic clothes like a t-shirt and shorts or sweatpants are perfect. If you decide to continue training, you'll eventually need a gi (the traditional uniform), but we offer gi rentals for beginners."
              },
              {
                question: "How often should I train as a beginner?",
                answer: "For beginners, we recommend training 2-3 times per week. This frequency allows you to make progress while giving your body enough time to recover between sessions."
              },
              {
                question: "Is Brazilian Jiu-Jitsu safe?",
                answer: "Safety is our top priority. While BJJ is a contact sport, our training methodology emphasizes controlled techniques and proper tapping out procedures. Our instructors create a safe training environment where injuries are rare."
              },
              {
                question: "What age can children start training?",
                answer: "Our kids' program accepts children as young as 5 years old. The curriculum is adapted to be age-appropriate, focusing on fundamental movements, discipline, and fun."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-800 mb-2">{faq.question}</h3>
                <p className="text-neutral-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;