import { Button } from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const story: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Button'
}

export default story
