import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Here we import out pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

// here we import our components
import NavBar from "./components/NavBar.jsx";

// Here we create our router and tell it whats pages to render at what path
const router = createBrowserRouter([
  {
    path: "/",
// putting our NavBar as the main components will cause the children to render in the <outlet />
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
{/* Here we wrap our app in the router provider so the pages render */}
<RouterProvider router={router} />
</React.StrictMode>
);
