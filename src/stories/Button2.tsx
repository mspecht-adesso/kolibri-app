import React from 'react';
import { KolButton } from '@public-ui/react';

interface Button2Props {
  _label: string;
  _type: "button" | "reset" | "submit" | undefined;
  _variant?: "custom" | "danger" | "ghost" | "normal" | "primary" | "secondary" | undefined;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  ...props
}: Button2Props) => {
  return (
    <KolButton
      {...props}
    >{props._label}</KolButton>
  );
};
