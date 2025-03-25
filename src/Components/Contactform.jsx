import React, { useState } from 'react';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Submitted:', formData);
    // You might want to add form validation before submission
    onClose(); // Close the popup after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit mobile number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;