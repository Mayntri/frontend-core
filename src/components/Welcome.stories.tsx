import { Welcome } from './Welcome'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const story: ComponentMeta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
}

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />

export const FirstStory = Template.bind({
  args: {},
})

export default story
