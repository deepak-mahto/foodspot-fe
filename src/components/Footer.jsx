import React, { useState, useEffect } from "react";

const FooterComponent = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="flex justify-between items-center container mx-auto px-4">
        <h1 className="text-lg font-semibold">
          Copyright &copy; {currentYear} FoodSpot.
        </h1>
        <h1>All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default FooterComponent;
