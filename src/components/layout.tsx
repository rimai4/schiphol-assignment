import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <div className="h-16 bg-schiphol-blue flex items-center px-4">
        <h3 className="text-white text-2xl font-bold">Schiphol flight search</h3>
      </div>

      <div className="container max-w-xl mx-auto px-4 pt-6">{children}</div>
    </div>
  );
}

export default Layout;
