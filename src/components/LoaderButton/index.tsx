import React from 'react';

import './styles.css';

interface LoaderButtonComponentProps {
  title: string;
  onLoad?: () => void;
}

const LoaderButton: React.FC<LoaderButtonComponentProps> = ({title, onLoad}) => {
  return (
    <div className='button-wrapper'>
      <button
        className="loader-button"
        onClick={onLoad}
      >
        {title}
      </button>
    </div>
    
  );
};

export default LoaderButton;