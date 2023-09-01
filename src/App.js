import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout";
import ScrollToTop from "./components/elements/ScrollToTop";
import HomePage from "./components/templates/HomePage";
import AuthorDetailsPage from "./components/templates/AuthorDetailsPage";
import BlogDetailsPage from "./components/templates/BlogDetailsPage";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorDetailsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
