import React, { useEffect } from 'react';
import ContactComponent from '../components/contact/ContactComponent';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact'
  }, [])
  return <div>
    <Header />
    <ContactComponent />
    <Footer />
  </div>;
};

export default Contact;
