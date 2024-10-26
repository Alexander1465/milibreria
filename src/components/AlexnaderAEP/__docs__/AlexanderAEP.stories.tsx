import type { Meta, StoryObj } from "@storybook/react";
import AlexanderAEP from "../AlexanderAEP"; // importamos el componente AlexanderAEP

const meta: Meta<typeof AlexanderAEP> = {
  title: "AlexanderAEP", // el título de la historia
  component: AlexanderAEP, // el componente principal
};
export default meta;

type Story = StoryObj<typeof AlexanderAEP>;

export const Primary: Story = {
  args: {
    title: "Primary Title",
    description: "This is the primary AlexanderAEP component.",
    avatar: "https://example.com/avatar-primary.jpg", // URL de ejemplo para el avatar
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Title",
    description: "This is the secondary AlexanderAEP component.",
    avatar: "https://example.com/avatar-secondary.jpg", // URL de ejemplo para el avatar
  },
};