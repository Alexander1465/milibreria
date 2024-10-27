import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AlexanderAEP from '../AlexanderAEP'; 

describe('AlexanderAEP component', () => {
  it('El componente AlexanderAEP se debería renderizar correctamente', () => {
    render(
      <AlexanderAEP
        title="Titulo del test"
        description="Descripcion del test"
        avatar="https://example.com/avatar.jpg"
      />
    );

    const title = screen.getByText('Titulo del test');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('Descripcion del test');
    expect(description).toBeInTheDocument();

    const avatar = screen.getByAltText('Titulo del test');
    expect(avatar).toBeInTheDocument();
  });
});
