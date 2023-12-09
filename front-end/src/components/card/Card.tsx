import React, { ElementType, ReactNode } from 'react';
import { ContainerCard, ContainerContent, ContainerTitle } from './card';
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
      <ContainerTitle>
        <span>{Icon && <Icon />}</span>
        <h3>{title}</h3>
      </ContainerTitle>
      <ContainerContent>
        <h4>{content}</h4>

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
      </ContainerContent>
    </ContainerCard>
  );
};
