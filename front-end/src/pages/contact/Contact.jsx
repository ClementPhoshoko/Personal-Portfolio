import React from 'react';
import './Contact.css';
import { useState } from "react";
import { db } from "./../../firebase.js"; // adjust path
import { collection, addDoc, Timestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
    ...prev,
      [name]: value
    }));

    // Clear the error for the current field
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = { name: '', email: '', message: '' };
  let hasError = false;

  if (!formData.name.trim()) {
    newErrors.name = 'Name is required.';
    hasError = true;
  }

  if (!formData.email.trim()) {
    newErrors.email = 'Email is required.';
    hasError = true;
  }

  if (!formData.message.trim()) {
    newErrors.message = 'Message is required.';
    hasError = true;
  }

  if (hasError) {
    setErrors(newErrors);
    return;
  }

  // Clear previous errors if form is valid
  setErrors({ name: '', email: '', message: '' });

  try {
  // 1. Save to Firestore
  await addDoc(collection(db, "contacts"), {
    ...formData,
    created: Timestamp.now(),
  });

  // 2. Send email via EmailJS
  const emailParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    from_title: formData.name +" is trying to reach you via your portfolio site."
  };

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    emailParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  // 3. Reset form + show success
  setFormData({ name: '', email: '', message: '' });
  setShowSuccessModal(true);

  // Auto-hide success modal
  setTimeout(() => setShowSuccessModal(false), 3000);

  } catch (err) {
  console.error("Error submitting form:", err);

  setErrorMessage("Something went wrong. Please try again.");
  setShowErrorModal(true);

  // Auto-hide error modal
  setTimeout(() => setShowErrorModal(false), 3000);
}

};

  return (
    <div className="contact-container">
      {/* Left Section - Text */}
      <div className="contact-left-section">
        <div className="contact-text-content">
          <h1 className="contact-main-title">
            Trying to
          </h1>
          <h2 className="contact-highlight-word">
            be creative
          </h2>
          <h3 className="contact-tagline">
            together!
          </h3>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-right-section">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input 
                type="text" 
                name="name"
                className="form-input"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
              />
              <p className="error-text">
                {errors.name}
              </p>

            </div>
            
            <div className="form-group">
              <label className="form-label">Your email</label>
              <input 
                type="email" 
                name="email"
                className="form-input"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
              />
              <p className="error-text">
                {errors.email}
              </p>
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                name="message"
                className="form-textarea"
                placeholder=""
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <p className="error-text">
                {errors.message}
              </p>
            </div>
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {showSuccessModal && (
            <div className="success-modal">
              <p className="success-message">Message sent successfully! 🎉</p>
            </div>
          )}
          {showErrorModal && (
            <div className="error-modal">
              <p className="error-message">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

