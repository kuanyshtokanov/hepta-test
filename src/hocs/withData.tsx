import React from 'react';

import EmptyData from 'components/EmptyData';

const withData = <T extends Record<string, any>>(Component: React.ComponentType<T>): React.FC<T> => ({
  ...props
}: T) => {
  if(Array.isArray(props.data)){
    return (
      props.data.length > 0 ? <Component {...props as T}/> : <EmptyData />
    )
  } else {
    return (
      props.data ? <Component {...props as T}/> : <EmptyData />
    )
  }
}
  

export default withData;
