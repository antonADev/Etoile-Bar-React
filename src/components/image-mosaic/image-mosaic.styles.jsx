import styled from 'styled-components';
// import { ImageElement } from '../image-element/image-element.component';

export const ImageMosaicContainer = styled.div`
  overflow: hidden;
  display: grid;
  width: calc(100vw - 10%);
  height: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'main main second third'
    'main main fourth fifth'
    'sixth seventh secondMain secondMain';

  /* @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'main main'
      'main main'
      'second';
  } */
`;

export const ImageContainer = styled.div`
  position: relative;
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  height: 100%;
`;

// export const MainPicture = styled.div`
//   grid-area: main;
//   width: 100%;
//   height: 100%;
//   background-image: ${(props) =>
//     `url(${require(`../../assets/${props.imageUrl}.JPG`)})`};
//   background-size: cover;
//   background-position: center;
//   opacity: 1;
//   transition: opacity 1000ms ease-in-out;
// `;
// export const SecondPicture = styled(MainPicture)`
//   grid-area: second;
// `;
// export const ThirdPicture = styled(MainPicture)`
//   grid-area: third;
// `;
// export const FourthPicture = styled(MainPicture)`
//   grid-area: fourth;
// `;
// export const FifthPicture = styled(MainPicture)`
//   grid-area: fifth;
// `;
// export const SixthPicture = styled(MainPicture)`
//   grid-area: sixth;
// `;
// export const SeventhPicture = styled(MainPicture)`
//   grid-area: seventh;
// `;
// export const SecondMainPicture = styled(MainPicture)`
//   grid-area: secondMain;
// `;
