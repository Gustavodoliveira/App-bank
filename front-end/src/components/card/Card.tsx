import React, { ElementType, ReactNode } from 'react';
import { ContainerCard } from './card';
import { IconType } from 'react-icons';

interface IList {
  improvementA: string;
  improvementB: string;
  improvementC?: string;
}

interface ICard {
  title: string;
  content: string;
  list: IList;
  Icon?: IconType;
}

export const Card = ({ title, content, list, Icon }: ICard): ReactNode => {
  return (
    <ContainerCard className={title}>
      <>
        <h3>
          {Icon && <Icon />}

          {title}
        </h3>
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
      </>
    </ContainerCard>
  );
};
