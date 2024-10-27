import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
  title: 'MyFavouriteBorder',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    iconColor: 'orange',  
    disabled: false,
    onClick: () => alert('Icon clicked'),
  },
};

export const Disabled: Story = {
  args: {
    iconColor: 'lightgray',  
    disabled: true,
  },
};
 