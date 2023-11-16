import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/features/auth/authSlice";
const App = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <CustomRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
