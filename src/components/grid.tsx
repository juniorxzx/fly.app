import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return (
    <div className={`max-w-[1800px] px-5 md:px-10  ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
