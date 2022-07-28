import { Image } from './image-element.styles';
const MosaicImage = (props) => {
  return (
    <Image
      src={require(`../../assets/${props.id}.JPG`)}
      alt='image'
      loading='lazy'
    />
  );
};

export default MosaicImage;
