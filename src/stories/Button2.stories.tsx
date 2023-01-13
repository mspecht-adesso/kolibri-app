import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KolButton } from '@public-ui/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button2',
  component: KolButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof KolButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KolButton> = (args) => <KolButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    _label: 'Button',
    _variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    _label: 'Button',
    _variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
    _label: 'Button',
    _variant: 'danger',
};
