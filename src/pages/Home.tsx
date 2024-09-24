// src/pages/Home.tsx
import React from 'react';
import BaseButton from '../shared-module/components/base-components/BaseButton';
import { HorizontalAlign } from '../shared-module/enums/components/position-aling.enum';
import {EnumIcoFontIcons} from '../shared-module/enums/components/base-components/base-icon-ux.enum';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Botón clickeado!');
  };

  return (
    <>
      <h1>Home Page</h1>
      <BaseButton 
        label="Hola, botón" 
        onClick={handleClick} 
        variant="primary" 
        id="example-button" 
        ariaLabel="Ejemplo de botón"
        disabled={false}
        ariaDescribedBy="description"
        role="button"
        tabIndex={0}
        ariaPressed={false}
        iconName={EnumIcoFontIcons.Alert}
        iconPosition={HorizontalAlign.Left}
      />
    </>
  );
};

export default Home;
