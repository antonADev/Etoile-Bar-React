import Hero from '../../components/hero/hero.component';
import ImageMosaicComponent from '../../components/image-mosaic/image-mosaic.component';
import InfoComponent from '../../components/info/info.component';

import cappuccinoVideo from '../../assets/cappuccino.mp4';
function Home() {
  return (
    <>
      <Hero
        header='Etoile Food Bar & Cocktail'
        para='0984-951496'
        routeButton={true}
        route='/menu'
        video={cappuccinoVideo}
      />
      <InfoComponent />
      <ImageMosaicComponent />
    </>
  );
}

export default Home;
