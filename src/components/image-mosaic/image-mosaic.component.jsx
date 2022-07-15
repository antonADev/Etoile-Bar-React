import { useState, useEffect } from 'react';

import {
  ImageMosaicContainer,
  MainPicture,
  SecondPicture,
  ThirdPicture,
  FourthPicture,
  FifthPicture,
  SixthPicture,
  SeventhPicture,
  SecondMainPicture,
} from './image-mosaic.styles';

const imageIndexArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
const shuffleArray = () => {
  return imageIndexArray.sort((a, b) => 0.5 - Math.random());
};

const ImageMosaicComponent = () => {
  const [currentArray, setCurrentArray] = useState(imageIndexArray);

  useEffect(() => {
    const interval = setInterval(() => {
      const newArray = shuffleArray();
      setCurrentArray(newArray);
    }, 5000);

    // setCurrentArray(shuffleArray);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageMosaicContainer>
      <MainPicture imageUrl={currentArray[0]}></MainPicture>
      <SecondPicture imageUrl={currentArray[1]}></SecondPicture>
      <ThirdPicture imageUrl={currentArray[2]}></ThirdPicture>
      <FourthPicture imageUrl={currentArray[3]}></FourthPicture>
      <FifthPicture imageUrl={currentArray[4]}></FifthPicture>
      <SixthPicture imageUrl={currentArray[5]}></SixthPicture>
      <SeventhPicture imageUrl={currentArray[6]}></SeventhPicture>
      <SecondMainPicture imageUrl={currentArray[7]}></SecondMainPicture>
    </ImageMosaicContainer>
  );
};

export default ImageMosaicComponent;
