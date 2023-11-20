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
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Login from '../pages/login/Login';

const MyRoutes = () => {
    const persist = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <BrowserRouter>
                    <Header />
                    <ToastContainer autoClose={3000} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/appHome" element={<AppHome />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default MyRoutes;
