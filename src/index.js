import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import BodyComponent from "./components/Body";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import ProfileChild from "./components/ProfileChild";
import RestaurantReview from "./components/RestaurantReview";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "profileChild",
                element: <ProfileChild />,
              },
            ],
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/restaurant/:resId/review",
        element: <RestaurantReview />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);

reportWebVitals();
