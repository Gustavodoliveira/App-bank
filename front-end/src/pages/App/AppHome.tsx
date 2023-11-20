import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AppHome = () => {
    const Authentication = useSelector((state: RootState) => state.isLoggedin);
    console.log(Authentication);
    return <div>AppHome</div>;
};

export default AppHome;
