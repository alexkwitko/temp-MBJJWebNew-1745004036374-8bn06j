import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { classes, ClassType } from '../data/classes';
import { motion } from 'framer-motion';

type FilterOptions = {
  level: string;
  ageGroup: string;
};

const ClassesPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    level: 'All',
    ageGroup: 'All',
  });

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const ageGroups = ['All', 'Adults', 'Kids', 'Teens', 'All Ages'];

  const filteredClasses = classes.filter((classItem) => {
    return (
      (filters.level === 'All' || classItem.level === filters.level) &&
      (filters.ageGroup === 'All' || classItem.ageGroup === filters.ageGroup)
    );
  });

  return (
    <>
      <Helmet>
        <title>Classes | MBJJ</title>
        <meta name="description" content="Explore our comprehensive Brazilian Jiu-Jitsu classes for all ages and skill levels. From beginner to advanced, we have the perfect program for you." />
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
              Our Classes
            </h1>
            <p className="text-xl text-neutral-300">
              Comprehensive Brazilian Jiu-Jitsu training for all ages and skill levels
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-neutral-100 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Filter Classes
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="level-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Skill Level
                </label>
                <select
                  id="level-filter"
                  value={filters.level}
                  onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                  className="w-full sm:w-40 px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-500 focus:border-secondary-500"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="age-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                  Age Group
                </label>
                <select
                  id="age-filter"
                  value={filters.ageGroup}
                  onChange={(e) => setFilters({ ...filters, ageGroup: e.target.value })}
                  className="w-full sm:w-40 px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-500 focus:border-secondary-500"
                >
                  {ageGroups.map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setFilters({ level: 'All', ageGroup: 'All' })}
                className="text-secondary-500 font-medium self-end pb-2"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">No classes match your filters</h3>
              <p className="text-neutral-600 mb-4">Try adjusting your filters to see more classes.</p>
              <button
                onClick={() => setFilters({ level: 'All', ageGroup: 'All' })}
                className="text-secondary-500 font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((classItem, index) => (
                <ClassCard key={classItem.id} classItem={classItem} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 bg-neutral-900 text-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Check our schedule and find a class that fits your availability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/schedule" 
                className="bg-secondary-500 hover:bg-secondary-600 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                View Schedule
              </Link>
              <Link 
                to="/contact" 
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-50 font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ClassCardProps {
  classItem: ClassType;
  index: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div 
        className="h-56 bg-cover bg-center" 
        style={{ backgroundImage: `url(${classItem.image})` }}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-200 text-neutral-800">
            {classItem.level}
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary-100 text-secondary-800">
            {classItem.ageGroup}
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-200 text-neutral-800">
            {classItem.duration} min
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{classItem.title}</h3>
        <p className="text-neutral-600 mb-4">{classItem.description}</p>
        
        {classItem.instructor && (
          <div className="flex items-center mt-4 pt-4 border-t border-neutral-200">
            <div className="flex-1">
              <p className="text-sm text-neutral-500">Instructor</p>
              <p className="font-medium text-neutral-800">{classItem.instructor}</p>
            </div>
            <Link 
              to="/schedule" 
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-medium py-2 px-4 rounded-md text-sm transition-colors"
            >
              View Schedule
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ClassesPage;