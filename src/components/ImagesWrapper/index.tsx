import React from 'react';

import './styles.css';
import ImageContainer from 'components/ImageContainer';
import { ImgElement } from 'models';
import withData from 'hocs/withData';
import withLoading from 'hocs/withLoading';

interface ImagesWrapperProps {
  data?: ImgElement[];
  isLoading: boolean;
}

const ImagesWrapper: React.FC<ImagesWrapperProps> = ({data}) => {

  console.log('--images--', data);

  return (
    <div className='images-wrapper'>
      {data?.map((imgEl, idx)=> (
        <ImageContainer key={imgEl.id+imgEl.url+idx} src={imgEl.url} idx={imgEl.id}/>
      ))}
    </div>
  );
};

export default withLoading(withData(ImagesWrapper));