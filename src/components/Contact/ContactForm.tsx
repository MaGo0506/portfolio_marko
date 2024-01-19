"use client"

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import toast from 'react-hot-toast';
import { Errors, FormData } from './types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     const newErrors: Errors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
  
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });    
  
      if (response.ok) {
        console.log('here', toast);
        
        toast.success(`Hey ${formData.name}, your message was sent successfully!`)
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error('Failed to send email. Server responded with:', response.status);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`p-3 bg-white border-gray-200 dark:border-gray-800 border border-solid dark:bg-gray-800 rounded-sm shadow-sm ${styles.formMain}`}>
      <p className="text-gray-400 text-sm lg:text-base py-3">
      I am actively seeking new employment opportunities. Please feel free to reach out and get in touch with me. <br/> I look forward to hearing from you soon.
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <div className={`flex-auto flex-col flex justify-between ${styles.formSection}`}>
        <input
            className={`px-2 text-sm lg:text-base py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:outline-sky-400 ${errors.name && 'border-red-500'}`}
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

          <input
            className={`px-2 text-sm lg:text-base py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:outline-sky-400 ${errors.email && 'border-red-500'}`}
            type="email"
            placeholder='Email'
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

          <input
            className="px-2 py-1 my-2 text-sm lg:text-base border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:border-sky-400"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </div>
        <div className={`flex-auto text-sm lg:text-base flex-col flex ${styles.formSection}`}>
          <input
            className="px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:border-sky-400"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange(e, 'subject')}
          />

          <textarea
            className={`px-2 py-1 my-2 text-sm lg:text-base border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 focus:ring-sky-400 ${styles.textareaMain} ${errors.message && 'border-red-500'}`}
            value={formData.message}
            placeholder="Message"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e, 'message')
            }
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>
      </div>
      <div className="flex justify-end mt-4 mb-2 font-medium">
        <button className="bg-sky-400 text-sm lg:text-base text-white hover:bg-sky-500 px-8 py-2 rounded-sm transition-colors duration-150" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;