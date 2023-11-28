import React, { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className='container mx-auto justify-center pt-8'>
      {children}
    </div>
  );
};

export default PageWrapper;
