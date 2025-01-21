import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="flex items-center justify-center">
            <h1 className="font-bold text-orange-500 text-3xl">foodSpot</h1>
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

        <div className="flex gap-2">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0"></div>
          {!isAuthenticated ? (
            <div
              className="flex gap-2
            "
            >
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
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  logout();
                }}
                className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg ">
          <ul className="flex flex-col space-y-4 p-4">
            {!isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <li>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
                  >
                    LogIn
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
                  >
                    SignUp
                  </button>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
                  >
                    Logout
                  </button>
                </li>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
