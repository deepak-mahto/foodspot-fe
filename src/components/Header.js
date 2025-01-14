import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderComponent = ({ restaurants, filteredRestaurants }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const filterRestaurants = (searchText) => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    filteredRestaurants(filtered);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"
              alt="restaurant-logo"
              className="h-12 w-auto"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
            <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
              <input
                type="text"
                onChange={(e) => filterRestaurants(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none"
                placeholder="Search Restaurant"
              />
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            LogIn
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            SignUp
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg ">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <button
                onClick={() => navigate("/login")}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
              >
                LogIn
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/signup")}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
              >
                SignUp
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
