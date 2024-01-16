import React, { useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  onSubmit: (formData: {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${formData.fullName} <${formData.email}>`,
          fullName: formData.fullName,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });
      console.log('Email sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    }

    // onSubmit(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={`p-3 bg-white border-gray-200 dark:border-gray-800 border border-solid dark:bg-gray-800 rounded-sm shadow-sm ${styles.formMain}`}>
      <div className="flex gap-2">
        <div className={`flex-auto flex-col flex justify-between ${styles.formSection}`}>
          <input
            className="px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:outline-sky-400"
            type="text"
            placeholder="Name"
            value={formData.fullName}
            onChange={(e) => handleInputChange(e, 'fullName')}
          />

          <input
            className="px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:border-sky-400"
            type="email"
            placeholder='Email'
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />

          <input
            className="px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:border-sky-400"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </div>
        <div className={`flex-auto flex-col flex ${styles.formSection}`}>
          <input
            className="px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 dark:focus:border-sky-400"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange(e, 'subject')}
          />

          <textarea
            className={`px-2 py-1 my-2 border-gray-200 dark:border-gray-700 dark:bg-transparent border border-solid rounded-md font-thin focus:outline-sky-400 focus:ring-sky-400 ${styles.textareaMain}`}
            value={formData.message}
            placeholder="Message"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e, 'message')
            }
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 mb-2 font-medium">
        <button className="bg-sky-400 text-white hover:bg-sky-500 px-4 py-2 rounded-md transition-colors duration-150" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;