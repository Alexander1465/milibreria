// example.tsx
import React from 'react';
import AlexanderAEP, { AlexanderAEP } from '../AlexanderAEP';

// Creamos un componente Example para renderizar AlexanderAEP con las props que le pasamos
function Example(props: AlexanderAEP) {
  return (
    <AlexanderAEP
      title={props.title}
      description={props.description}
      avatar={props.avatar}
    />
  );
}

export default Example;

