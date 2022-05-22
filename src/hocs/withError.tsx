import React from 'react';
import axios, { AxiosError } from 'axios';

interface WithErrorProps {
  error?: string | AxiosError;
}

const withError = <T extends object>(Component: React.ComponentType<T>): React.FC<T & WithErrorProps> => ({
  error,
  ...props
}: WithErrorProps) => 
    error ? 
    <>
      <h4>
        Error:
      </h4>
      <span>
      {axios.isAxiosError(error)? error.message : error}
      </span>
    </>
  : <Component {...props as T} />;

export default withError;
