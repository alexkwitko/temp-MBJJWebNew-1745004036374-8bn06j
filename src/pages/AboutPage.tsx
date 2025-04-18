import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Trophy, Clock, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About MBJJ | Our History & Philosophy</title>
        <meta name="description" content="Learn about MBJJ's history, philosophy, and commitment to excellence in Brazilian Jiu-Jitsu training." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7991575/pexels-photo-7991575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        <div className="absolute inset-0 bg-neutral-900 opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-50 mb-6">
              About MBJJ
            </h1>
            <p className="text-xl text-neutral-300">
              Our story, mission, and commitment to excellence in Brazilian Jiu-Jitsu
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
                Our Story
              </h2>
              <p className="text-neutral-700 mb-4">
                MBJJ was founded in 2010 by John Silva, a 3rd-degree black belt under the legendary Rickson Gracie. After dominating the competition scene and winning multiple world championships, John decided to share his knowledge and create a training environment focused on technical excellence and real-world effectiveness.
              </p>
              <p className="text-neutral-700 mb-4">
                What started as a small academy has grown into one of the most respected competition teams in the country. Our growth has been built on producing champions and maintaining the highest standards of technical instruction.
              </p>
              <p className="text-neutral-700">
                Today, MBJJ is home to both serious competitors and dedicated practitioners. We maintain an intense focus on combat effectiveness while fostering a supportive training environment.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/8989428/pexels-photo-8989428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MBJJ Training" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-50 mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              At MBJJ, we believe that Brazilian Jiu-Jitsu is the most effective martial art for real combat situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={48} className="text-secondary-500" />,
                title: "Combat Effectiveness",
                description: "We focus on techniques that work in real fights, not just sport competition. Every move is pressure-tested in live sparring."
              },
              {
                icon: <Trophy size={48} className="text-secondary-500" />,
                title: "Competitive Excellence",
                description: "Our competition team regularly dominates tournaments, proving the effectiveness of our training methods."
              },
              {
                icon: <UserCheck size={48} className="text-secondary-500" />,
                title: "Mental Toughness",
                description: "We build warriors who are prepared for both physical and mental challenges, on and off the mats."
              },
              {
                icon: <Clock size={48} className="text-secondary-500" />,
                title: "Consistent Progress",
                description: "Our structured curriculum ensures steady advancement in both technical skills and fighting ability."
              }
            ].map((principle, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-800 p-8 rounded-lg"
              >
                <div className="mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-neutral-50 mb-2">{principle.title}</h3>
                <p className="text-neutral-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Facility */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
                World-Class Training Facility
              </h2>
              <p className="text-neutral-700 mb-4">
                Our 5,000 square foot facility features 2,500 square feet of mat space for maximum training efficiency. The mats are cleaned and disinfected multiple times daily to maintain the highest standards of hygiene.
              </p>
              <p className="text-neutral-700 mb-4">
                We've invested in professional-grade equipment including grappling dummies, conditioning tools, and a dedicated strength training area to supplement your technical development.
              </p>
              <p className="text-neutral-700">
                With separate changing rooms, showers, and a pro shop stocking all essential training gear, we provide everything you need to focus on your training and development.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/8989537/pexels-photo-8989537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MBJJ Facility" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Team */}
      <section className="py-16 bg-neutral-900 text-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Competition Team
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Our competition team represents the pinnacle of our training methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/7991574/pexels-photo-7991574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Elite Training",
                description: "Our competition team trains with intensity and purpose, preparing for the highest levels of competition."
              },
              {
                image: "https://images.pexels.com/photos/7991572/pexels-photo-7991572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Proven Results",
                description: "Multiple IBJJF champions and ADCC veterans have emerged from our competition program."
              },
              {
                image: "https://images.pexels.com/photos/8989568/pexels-photo-8989568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Championship Mindset",
                description: "We develop not just physical skills, but the mental toughness required for high-level competition."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg"
              >
                <div 
                  className="h-56 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-6 bg-neutral-800">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-neutral-50 mb-6">
              Ready to Train with Champions?
            </h2>
            <p className="text-xl text-neutral-50/90 mb-8">
              Join MBJJ and experience the most effective Brazilian Jiu-Jitsu training available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                Start Training Today
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

export default AboutPage;