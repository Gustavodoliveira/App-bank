'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import UpdateForm from './form';
import { ContainerProfile, SectionAccount } from './profileStyled';
import ButtonComponent from '@/components/button/Button';
import DeleteModal from '@/components/Modals/DeleteModal';

const Profile = () => {
  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'));
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  return (
    <>
      <HeaderNoSSR />

      <ContainerProfile>
        <div id="editAccount">
          <h3>Edit your Account</h3>
          <UpdateForm />
        </div>
        <SectionAccount>
          <h2>Delete the account</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            veritatis cupiditate numquam eius est, beatae quasi placeat aliquid
            quas voluptas a suscipit iure esse? Cupiditate veniam fugiat cum aut
            inventore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eius
            eos doloremque porro incidunt voluptatem molestiae harum minus, nam
            optio quo aut perspiciatis. Temporibus debitis error minus iure modi
            molestias.
          </p>
          <ButtonComponent
            text="Delete Acccount"
            handleClick={() => setIsDeleteModal(true)}
          />
          {isDeleteModal && (
            <DeleteModal onClose={() => setIsDeleteModal(false)} />
          )}
        </SectionAccount>
      </ContainerProfile>
    </>
  );
};

export default Profile;
