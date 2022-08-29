import { ReactNode } from "react";

import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
  type?: string;
};

export function MainButton({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
