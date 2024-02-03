import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  phone,
  message
}) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;