
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 

const meta: Meta<typeof Example> = {
  title: "MyButton",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button primary",
    txtcolor: 'black',
    bgcolor: 'red',
    bordercolor: 'red',
    bordersize: '2px',
    hoverTxtColor: 'white',
    hoverBgColor: 'blue',
    disabled: false,
    size: "small",
    onClick: () => alert("Button Primary"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button secondary",
    txtcolor: 'white',
    bgcolor: 'pink',
    bordercolor: 'pink',
    bordersize: '1px',
    hoverTxtColor: 'black',
    hoverBgColor: 'yellow',
    disabled: false,
    size: "small",
    onClick: () => alert("Button secondary"),
  },
};
