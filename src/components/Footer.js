import React, { useState, useEffect } from 'react';

const FooterComponent = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer">
      <h1>Copyright &copy; {currentYear}</h1>
      <h2>Links</h2>
    </div>
  );
};

export default FooterComponent;
