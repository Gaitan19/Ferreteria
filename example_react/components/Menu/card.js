import { CCard, CCardBody, CCardImage, CCardText } from '@coreui/react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { text, picture } = props;

  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={picture} className="Card-image" />
      <CCardBody>
        <CCardText>{text}</CCardText>
      </CCardBody>
    </CCard>
  );
};

Card.propTypes = {
  text: PropTypes.string,
  picture: PropTypes.string,
};

Card.defaultProps = {
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  picture: '/picture.png',
};

export default Card;
