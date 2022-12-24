import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@trslucax-ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi inventore quidem obcaecati aspernatur? Nihil tenetur, ipsa, magni eligendi, numquam eum blanditiis voluptatibus eius facere quas sequi quae dignissimos voluptates. Rerum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
