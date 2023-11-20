import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Register from '../pages/Register/Register';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from '../store';
import AppHome from '../pages/App/AppHome';

const MyRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <ToastContainer autoClose={3000} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register" element={<AppHome />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default MyRoutes;
