import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BurgerNav from '../components/BurgerNav';
import PageNavigation from '../components/PageNavigation';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    const mailtoLink = `mailto:fernandohanz23@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(mailtoLink, '_blank');

    setFormData({ name: '', email: '', message: '' });
    setStatusMessage('Redirecting to email client...');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] md:w-[70%] max-w-4xl mx-auto pt-32 px-4 pb-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold text-center heading-gradient text-4xl tracking-tight text-[var(--color-foreground)] mb-2 px-5"

        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-neutral-600 dark:text-[var(--color-muted)] mt-2"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="space-y-6 mt-8 max-w-3xl mx-auto"
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm text-neutral-800 dark:text-[var(--color-accent)] mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg 
                         bg-white text-neutral-900 
                         border border-neutral-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-neutral-400
                         dark:bg-[#333] dark:text-white 
                         dark:border-[#444] dark:focus:ring-[#666]"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-neutral-800 dark:text-[var(--color-accent)] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg 
                         bg-white text-neutral-900 
                         border border-neutral-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-neutral-400
                         dark:bg-[#333] dark:text-white 
                         dark:border-[#444] dark:focus:ring-[#666]"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-neutral-800 dark:text-[var(--color-accent)] mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 rounded-lg 
                         bg-white text-neutral-900 
                         border border-neutral-300 shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-neutral-400
                         dark:bg-[#333] dark:text-white 
                         dark:border-[#444] dark:focus:ring-[#666]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full p-3 rounded-lg 
                          text-white 
                         hover:bg-neutral-800 hover:text-white
                         dark:bg-[var(--color-accent)] dark:text-black 
                         dark:hover:bg-white dark:hover:text-black 
                         transition-all duration-200"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {statusMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center text-sm text-neutral-600 dark:text-[var(--color-muted)]"
          >
            {statusMessage}
          </motion.div>
        )}
      </motion.div>

      <div className="hide-on-small">
        <PageNavigation previousPage="/projects" prevPageName="projects" />
      </div>
    </>
  );
};

export default ContactPage;
