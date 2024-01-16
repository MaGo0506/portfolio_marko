import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  subject: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  subject,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <p>{email}</p>
    <p>{subject}</p>
    {/* Other content of the email template */}
  </div>
);

export default EmailTemplate;