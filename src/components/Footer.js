import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-yellow-500 py-4">
      <div className="text-center">
        <h3 className="text-sm font-bold">Get Connected with us on social media</h3>
        <p className="text-sm font-bold">Powered by </p>
        <p className="text-sm font-bold">----------------------</p>
        <p className="text-xs font-bold">&copy; {new Date().getFullYear()} Food App</p>
      </div>
    </footer>
  );
}

export default Footer;
