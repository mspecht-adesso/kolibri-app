import React from 'react';
import { KolButton } from '@public-ui/react';

import { Meta, Story } from '@storybook/addon-docs';


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
    <>
    <Meta title="KolButton" />
    
    <Story name="Bar">
    <KolButton
      {...props}
      >{props._label}</KolButton>
    </Story>
      </>
  );
};
