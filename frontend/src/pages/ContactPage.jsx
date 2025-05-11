import React, { useState } from 'react';
import BurgerNav from '../components/BurgerNav';
import PageNavigation from '../components/PageNavigation';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
        setStatusMessage('Please fill in all fields.');
        return;
    }

    // Generate the mailto link
    const mailtoLink = `mailto:fernandohanz23@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the mailto link in a new tab (or default email client behavior)
    window.open(mailtoLink, '_blank');

    setFormData({ name: '', email: '', message: '' });
    setStatusMessage('Redirecting to email client...');
    };


    return (
        <>
        <BurgerNav />
        <div className="w-[90%] max-w-6xl mx-auto pt-32 pb-20">
            <h1 className="text-3xl font-bold text-center text-[#c5c5c5]">
            Contact Me
            </h1>
            <p className="text-center text-[#949494] mt-2">
            Have a question or want to work together? Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8 max-w-3xl mx-auto">
            <div>
                <label className="block text-sm text-[#c5c5c5]">Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-[#333] text-white"
                required
                />
            </div>
            <div>
                <label className="block text-sm text-[#c5c5c5]">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-[#333] text-white"
                required
                />
            </div>
            <div>
                <label className="block text-sm text-[#c5c5c5]">Message</label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-[#333] text-white"
                required
                ></textarea>
            </div>
            <div>
                <button
                type="submit"
                className="w-full p-3 bg-[#c5c5c5] text-black rounded-lg"
                >
                Send Message
                </button>
            </div>
            </form>

            {statusMessage && (
            <div className="mt-4 text-center text-sm text-[#c5c5c5]">
                {statusMessage}
            </div>
            )}
        </div>

        <PageNavigation previousPage="/projects" prevPageName="projects"/>
        </>
    );
};

export default ContactPage;
