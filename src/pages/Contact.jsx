import React, { useEffect } from 'react';
import ContactComponent from '../components/contact/ContactComponent'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact'
  },[])
  return <div>
      <ContactComponent />
  </div>;
};

export default Contact;
