import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ContainerComponent from "./components/ContainerComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import RestaurentDetail from "./pages/RestaurentDetail";
import { AppProvider } from "./providers/AppProvider";
import FormsPage from "./pages/FormsPage";
import { LoadDashboard } from "./lazyLoad/LazyComponents";

// Main App Component

const App = () => {
  return (
    <Suspense fallback="Loading...">
    <AppProvider>
      <LoadDashboard />
      <HeaderComponent />
      {/* <ContainerComponent /> */}
      {/* <Outlet /> */}
      <FooterComponent />
      </AppProvider>
    </Suspense>
  );
};
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error />, children: [
    { index: true, 
      element: <ContainerComponent />
    },
    {
      path:"/about-us",
      element: <AboutUs />
    },
    {
      path:"/contact-us",
      element: <ContactUs />
    },
    {
      path: "/restaurant/:id",
      element: <RestaurentDetail />
    },
    {
      path:"/forms-page",
      element: <FormsPage />
    }

  ] }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
