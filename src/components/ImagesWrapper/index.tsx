import React from 'react';
import { AxiosError } from 'axios';

import './styles.css';
import ImageContainer from 'components/ImageContainer';
import { ImgElement } from 'models';
import withData from 'hocs/withData';
import withLoading from 'hocs/withLoading';
import withError from 'hocs/withError';

interface ImagesWrapperProps {
  data?: ImgElement[];
  isLoading: boolean;
  error?: AxiosError;
}

const ImagesWrapper: React.FC<ImagesWrapperProps> = ({data}) => {

  return (
    <div className='images-wrapper'>
      {data?.map((imgEl, idx)=> (
        <ImageContainer key={imgEl.id+imgEl.url+idx} src={imgEl.url} idx={imgEl.id}/>
      ))}
    </div>
  );
};

export default withError(withLoading(withData(ImagesWrapper)));