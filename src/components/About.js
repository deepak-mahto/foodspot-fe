import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Eatsy</h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            - Eatsy is a web application inspired by Swiggy.
          </p>
          <p className="text-lg">
            - Technologies used: MERN stack (MongoDB, Express.js, React.js,
            Node.js)
          </p>
          <p className="text-lg">
            - Eatsy offers features like restaurant listings, search
            functionality, cart management, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
