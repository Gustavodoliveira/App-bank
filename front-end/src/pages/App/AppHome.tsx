import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ModalBalance from '../../components/ModalBalance/ModalBalance';

const AppHome = () => {
    const Authentication = useSelector((state: RootState) => state.isLoggedin);
    const [openModal, setopenModal] = useState<boolean>(false);

    return (
        <>
            <h2>Deposit to have your account activated</h2>

            <button
                onClick={() =>
                    openModal ? setopenModal(false) : setopenModal(true)
                }
            >
                Deposit
            </button>
            <h2>{openModal}</h2>
            <ModalBalance isShown={openModal} />
        </>
    );
};

export default AppHome;
