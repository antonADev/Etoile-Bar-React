import { useState, useEffect } from 'react';
import MosaicImage from '../mosaic-image/image-element.component';
import { ImageContainer, ImageMosaicContainer } from './image-mosaic.styles';
import { v4 as uuidv4 } from 'uuid';

const imageIndexArray = {
  pictures: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 17,
    },
  ],
};

const gridAreaArray = {
  grid: [
    {
      gridArea: 'main',
    },
    {
      gridArea: 'second',
    },
    {
      gridArea: 'third',
    },
    {
      gridArea: 'fourth',
    },
    {
      gridArea: 'fifth',
    },
    {
      gridArea: 'sixth',
    },
    {
      gridArea: 'seventh',
    },
    {
      gridArea: 'secondMain',
    },
  ],
};

const ImageMosaicComponent = () => {
  const [currentArray, setCurrentArray] = useState([
    ...imageIndexArray.pictures,
  ]);

  const shuffleArray = () => {
    const newArray = imageIndexArray.pictures.sort(
      (a, b) => 0.5 - Math.random()
    );
    return setCurrentArray([...newArray]);
  };

  // ACTIVATE ONCE FINISHED
  useEffect(() => {
    const interval = setInterval(shuffleArray, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageMosaicContainer>
      {gridAreaArray.grid.map(({ gridArea }, index) => {
        const imageUrl = currentArray[index];

        return (
          <ImageContainer key={uuidv4()} gridArea={gridArea}>
            <MosaicImage id={imageUrl.id} />
          </ImageContainer>
        );
      })}
    </ImageMosaicContainer>
  );
};

export default ImageMosaicComponent;
