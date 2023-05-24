import Image from '../image'
import Heading from '../heading';
import Text from '../text';
import Button from '../button';
import './index.css'


const ImageCard = ({image, heading, text, link, onClick}) => {
  // It should be first ensured whether this component renders only links or buttons or per-choice.
  if (link && onClick) {
    throw Error('Either one of `link` or `onClick` prop may be provided, but not both!')
  }

  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button onClick={onClick}>Read More</Button>
      </div>
    </div>
  )
};

export default ImageCard;
