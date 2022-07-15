import styled from 'styled-components';
export const ImageMosaicContainer = styled.div`
  display: grid;
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'main main second third'
    'main main fourth fifth'
    'sixth seventh secondMain secondMain';
`;

export const MainPicture = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `url(${require(`../../assets/${props.imageUrl}.JPG`)})`};
  background-size: cover;
  background-position: center;
`;
export const SecondPicture = styled(MainPicture)`
  grid-area: second;
`;
export const ThirdPicture = styled(MainPicture)`
  grid-area: third;
`;
export const FourthPicture = styled(MainPicture)`
  grid-area: fourth;
`;
export const FifthPicture = styled(MainPicture)`
  grid-area: fifth;
`;
export const SixthPicture = styled(MainPicture)`
  grid-area: sixth;
`;
export const SeventhPicture = styled(MainPicture)`
  grid-area: seventh;
`;
export const SecondMainPicture = styled(MainPicture)`
  grid-area: secondMain;
`;
