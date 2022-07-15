import ReactPlayer from 'react-player';
import cappuccinoVideo from '../../assets/cappuccino.mp4';
import {
  HeroContainer,
  OverlayContainer,
  Box,
  Header,
  Paragraph,
} from './hero.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Hero = () => {
  return (
    <HeroContainer>
      <ReactPlayer
        url={cappuccinoVideo}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <OverlayContainer>
        <Box>
          <Header>Etoile Food Bar & Cocktail</Header>
          <Paragraph>0984-951496</Paragraph>
          <Button buttonType={BUTTON_TYPE_CLASSES.base}>Scopri il menu</Button>
        </Box>
      </OverlayContainer>
    </HeroContainer>
  );
};

export default Hero;
