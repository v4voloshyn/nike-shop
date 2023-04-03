import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'ui-kit/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    backgroundColor: '#ff0',
    label: 'Button label'
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '😄👍😍💯'
  }
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '📚📕📈🤓'
  }
};
