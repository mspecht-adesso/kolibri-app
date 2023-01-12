import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button2 } from './Button2';

export default {
  title: 'Example/Button2',
  component: Button2,
} as ComponentMeta<typeof Button2>;

const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    _label: 'Button2',
    _variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    _label: 'Button2',
    _variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  _label: 'DANGER',
  _variant: "danger",
};

export const Ghost = Template.bind({});
Ghost.args = {
    _label: 'Button2',
    _variant: "ghost",
};
