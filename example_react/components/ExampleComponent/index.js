import { StrictMode, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = (props) => {
  const { text } = props;

  const inputEl = useRef(null);

  useEffect(() => {
    console.log('El componente se ha montado');

    return () => {
      console.log('El componente se ha desmontado');
    };
  }, []);

  const onButtonClick = () => {
    // `current` apunta al elemento inputEl montado
    inputEl.current.focus();
  };

  return (
    <StrictMode>
      <div>
        {text} <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    </StrictMode>
  );
};

ExampleComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleComponent;
