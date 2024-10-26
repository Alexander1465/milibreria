// AlexanderAEP.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AlexanderAEP from '../AlexanderAEP'; // importo mi componente AlexanderAEP

describe('AlexanderAEP component', () => {
  it('El componente AlexanderAEP se debería renderizar correctamente', () => {
    render(
      <AlexanderAEP
        title="Test Title"
        description="Test Description"
        avatar="https://example.com/avatar.jpg"
      />
    );
    
    // Verificar que el título está presente
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
    
    // Verificar que la descripción está presente
    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();
    
    // Verificar que el avatar se renderiza correctamente (por ejemplo con el alt text del avatar)
    const avatar = screen.getByAltText('Test Title');
    expect(avatar).toBeInTheDocument();
  });
});
