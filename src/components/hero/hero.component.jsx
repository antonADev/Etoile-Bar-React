import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import {
  HeroContainer,
  OverlayContainer,
  Box,
  Header,
  Paragraph,
} from './hero.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Hero = (props) => {
  const navigate = useNavigate();
  const goToMenuHandler = () => {
    navigate('/menu');
  };
  return (
    <HeroContainer>
      <ReactPlayer
        url={props.video}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <OverlayContainer>
        <Box>
          <Header>{props.header}</Header>
          {props.para ? <Paragraph>{props.para}</Paragraph> : ''}
          {props.routeButton ? (
            <Button
              onClick={goToMenuHandler}
              buttonType={BUTTON_TYPE_CLASSES.base}>
              Scopri il menu
            </Button>
          ) : (
            ''
          )}
        </Box>
      </OverlayContainer>
    </HeroContainer>
  );
};

export default Hero;
