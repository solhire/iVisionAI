"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper, FaEnvelope } from 'react-icons/fa';

interface NewsItem {
  title: string;
  summary: string;
  date: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    title: "iVision AI Launches Beta Program",
    summary: "Join our exclusive beta program to shape the future of AI-powered image recognition.",
    date: "2024-03-15",
    category: "Announcement"
  },
  {
    title: "New Object Detection Features",
    summary: "Enhanced accuracy and support for over 1000 object categories.",
    date: "2024-03-10",
    category: "Update"
  },
  {
    title: "Partnership with Tech Giants",
    summary: "Strategic partnerships to expand iVision AI's capabilities.",
    date: "2024-03-05",
    category: "News"
  }
];

const NewsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setIsSubscribed(true);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay informed about the latest developments in AI technology and iVision AI updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaNewspaper className="text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.summary}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
            Subscribe to our newsletter for the latest news and updates.
          </p>
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-center text-green-500">
              <p>Thank you for subscribing!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection; 