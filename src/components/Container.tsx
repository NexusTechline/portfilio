import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1900px] mx-auto xl:px-20 md:px-2 px-2">
      {children}
    </div>
  );
};

export default Container;
