import Hero from '../../components/hero/hero.component';
import ImageMosaicComponent from '../../components/image-mosaic/image-mosaic.component';
import InfoComponent from '../../components/info/info.component';

function Home() {
  return (
    <div>
      <Hero />
      <InfoComponent />
      <ImageMosaicComponent />
    </div>
  );
}

export default Home;
