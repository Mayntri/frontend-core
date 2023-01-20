import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from './Loader'

const story: ComponentMeta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
}

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const FirstStory = Template.bind({
  args: {},
})

export default story
