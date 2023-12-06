import React, { ReactNode } from 'react';
import { ContainerCard } from './card';

interface IList {
  improvementA: string;
  improvementB: string;
  improvementC?: string;
}

interface ICard {
  title: string;
  content: string;
  list: IList;
}

export const Card = ({ title, content, list }: ICard): ReactNode => {
  return (
    <ContainerCard className={title}>
      <h3>{title}</h3>
      <p>{content}</p>
      <ul>
        {list.improvementA && list.improvementB && (
          <>
            <li>{list.improvementA}</li>
            <li>{list.improvementB}</li>
          </>
        )}
        {list.improvementC && (
          <>
            <li>{list.improvementC}</li>
          </>
        )}
      </ul>
    </ContainerCard>
  );
};
