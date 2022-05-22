import React from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

const withLoading = <T extends object>(Component: React.ComponentType<T>): React.FC<T & WithLoadingProps> => ({
  isLoading,
  ...props
}: WithLoadingProps) =>
isLoading ? 
    <div>Loading...</div>
  : <Component {...props as T} />;

export default withLoading;
