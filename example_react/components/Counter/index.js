import { useState } from 'react';

const Eventos = () => {
  const [counter, setCounter] = useState(0);

  const handleMore = () => {
    setCounter(counter + 1);
  };

  const handleLess = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Eventos</h2>
      <h2>{`the conunter is in: ${counter}`}</h2>
      <button type="button" onClick={handleMore}>
        +
      </button>
      <button type="button" onClick={handleLess}>
        -
      </button>
    </div>
  );
};

export default Eventos;
