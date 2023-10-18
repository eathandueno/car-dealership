import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name.trim()) formErrors.name = "Name is required.";
        if (!formData.email.trim()) formErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid.";
        if (!formData.message.trim()) formErrors.message = "Message is required.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Handle form submission
            console.log('Form data submitted:', formData);
            alert('Form Submitted Successfully')
        }
    }
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
