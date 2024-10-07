import clsx from "clsx";
import { TitleStyled } from "./styled";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string
}

export default function Title({children, className}:TitleProps) {
 
 return (
   <TitleStyled className={clsx('Title', className)}>
    {children}
   </TitleStyled>
 );
};