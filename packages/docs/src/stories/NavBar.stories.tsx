import type { StoryObj, Meta } from '@storybook/react'
import {
  NavigationBar,
  NavigationBarProps,
  Text,
} from '@trslucax-ignite-ui/react'

export default {
  title: 'Data display/MenuBar',
  component: NavigationBar,
  args: {
    children: (
      <>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<NavigationBarProps>

export const Primary: StoryObj<NavigationBarProps> = {}
