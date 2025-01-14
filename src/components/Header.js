import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../common/cartSlice";

const HeaderComponent = ({ restaurants, filteredRestaurants }) => {
  const [buttonText, setButtonText] = useState("Login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const updateLoginLogoutText = () => {
    setButtonText((prevText) => (prevText === "Login" ? "Logout" : "Login"));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
        </div>

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
          <li>
            <Link
              to="/instamart"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
            >
              Instamart
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-orange-500 transition duration-300 flex items-center"
            >
              Cart
              {cartItems.length > 0 && (
                <span className="ml-1 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <button
            onClick={handleClearCart}
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            Clear Cart
          </button>
        </ul>

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
          onClick={updateLoginLogoutText}
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          {buttonText}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
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
              <Link
                to="/instamart"
                className="text-gray-700 hover:text-orange-500 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Instamart
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-orange-500 transition duration-300 flex items-center"
                onClick={toggleMobileMenu}
              >
                Cart
                {cartItems.length > 0 && (
                  <span className="ml-1 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleClearCart();
                  toggleMobileMenu();
                }}
                className="text-gray-700 hover:text-orange-500 transition duration-300"
              >
                Clear Cart
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  updateLoginLogoutText();
                  toggleMobileMenu();
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
              >
                {buttonText}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
