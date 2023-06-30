import type { TypographyProps } from '@/ui/typography';
import { Typography } from '@/ui/typography';
import type { Meta, StoryObj } from '@storybook/react';

const typographiesProps: TypographyProps[] = [
  {
    children: 'title 1',
    variant: 'title-1',
  },
  {
    children: 'title 2',
    variant: 'title-2',
  },
  {
    children: 'body 1',
    variant: 'body-1',
  },
  {
    children: 'body 2',
    variant: 'body-2',
  },
  {
    children: 'body 3',
    variant: 'body-3',
  },
  {
    children: 'link',
    variant: 'link',
  },
];

const typographyProps: TypographyProps = {
  children: 'typography',
  tag: 'div',
  variant: 'title-1',
};

type Story = StoryObj<typeof Typography>;

const TypographyTemplate: Story = {
  args: {
    ...typographyProps,
  },
};

export const Playground: Story = {
  args: {
    ...typographyProps,
    children: 'Playground Title',
    variant: 'title-1',
  },
};

export const AllTypographies = () => (
  <>
    {typographiesProps.map((typographyProps) => (
      <Typography key={typographyProps.variant} {...typographyProps} />
    ))}
  </>
);

const meta: Meta<typeof Typography> = {
  title: 'ui-kit/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
