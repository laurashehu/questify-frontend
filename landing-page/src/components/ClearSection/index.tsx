import React from 'react';
import bgImage from 'resources/ClearSection/bg.jpg'; 

const ClearSection: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        height: '30vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ClearSection;
