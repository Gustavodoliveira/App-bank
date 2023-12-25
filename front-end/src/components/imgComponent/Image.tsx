import React from 'react';
import { ImageContainer } from './image';

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return <ImageContainer src={src} alt={alt} />;
};

export default Image;
