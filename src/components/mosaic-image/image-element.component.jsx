import { Image } from './image-element.styles';
const MosaicImage = (props) => {
  return (
    <Image
      src={require(`../../assets/${props.id}.jpg`)}
      alt='image'
      loading='lazy'
    />
  );
};

export default MosaicImage;
