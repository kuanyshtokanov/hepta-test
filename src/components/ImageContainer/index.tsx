import React from 'react';

import './styles.css';
import { useIntersection } from 'hooks/intersection';

interface ImageContainerProps {
  src: string;
  idx: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({src, idx}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef<HTMLDivElement>(null);

  useIntersection(imgRef, () => {
    // console.log('--current--',src)
    // console.log('--idx--',idx)
    setIsInView(true);
  });

  // if (idx === 5500){
  //   imgRef.current?.scrollIntoView();
  // }

  return (
    <div
      ref={imgRef}
      className="image-container"
    >
      {isInView ? 
        <img
          className="image full"
          src={src}
          alt={'alt'}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      : <img
          className="image thumb"
          src={src} alt={'alt'}
          style={{ visibility: isLoaded ? "hidden" : "visible" }}
        />
      }
    </div>
  );
}

export default ImageContainer;