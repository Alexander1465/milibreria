import React from 'react';
import AlexanderAEP, { AlexanderAEPProps } from '../AlexanderAEP';

function Example(props: AlexanderAEPProps) {
  return (
    <AlexanderAEP
      title={props.title}
      description={props.description}
      avatar={props.avatar}
    />
  );
}

export default Example;
