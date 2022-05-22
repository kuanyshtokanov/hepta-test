import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import './App.css';
import { imagesApi } from 'api/images';
import ImagesWrapper from 'components/ImagesWrapper';
import LoaderButton from 'components/LoaderButton';
import { ApiResponse, ImgElement } from 'models';

const App: React.FC = () => {
  const [pageNumber, setPageNumber] = React.useState(0);
  const itemsPerPage: number = 201;

  const { data, isLoading } = useQuery<ApiResponse<ImgElement[]>>(
    ["getAllImages", {pageNumber}],
    () => imagesApi.getImages(pageNumber, itemsPerPage).then(res => res),
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log('--images--', data);

  // setTimeout(() => {
  //   setPageNumber(3)
  // }, 3000)

  const memoizedEndOfData = useMemo(() => {
    console.log('--trigger--', pageNumber)
    return data?.totalCount && pageNumber*itemsPerPage > data?.totalCount
  }, [data?.totalCount, pageNumber]);

  console.log('--isLoading--',isLoading)

  return (
    <div className="App">
      <div className="container">
        {data?.totalCount && pageNumber > 0 && (<LoaderButton title='Load previous' onLoad={() => setPageNumber(pageNumber-1)}/>)}
        <ImagesWrapper data={data?.data} isLoading={isLoading}/>
        {/* {!(data?.totalCount && pageNumber*itemsPerPage > data?.totalCount) && (<LoaderButton onLoad={() => setPageNumber(pageNumber+1)}/>)} */}
        {data?.totalCount && !memoizedEndOfData && (<LoaderButton title='Load more...' onLoad={() => setPageNumber(pageNumber+1)}/>)}
      </div>
      <div className="container">
        Map component
      </div>
    </div>
  );
}

export default App;
