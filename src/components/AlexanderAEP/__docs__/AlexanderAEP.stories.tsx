import type { Meta, StoryObj } from "@storybook/react";
import AlexanderAEP from "../AlexanderAEP"; 

const meta: Meta<typeof AlexanderAEP> = {
  title: "AlexanderAEP", 
  component: AlexanderAEP, 
};
export default meta;

type Story = StoryObj<typeof AlexanderAEP>;

export const Primary: Story = {
  args: {
    title: "Primary",
    description: "Componente primary",
    avatar: "https://example.com/avatar-primary.jpg",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    description: "Componente secondary",
    avatar: "https://example.com/avatar-secondary.jpg", 
  },
};
