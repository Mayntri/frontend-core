import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './Table'

const story: ComponentMeta<typeof Table> = {
  title: 'Table',
  component: Table,
}

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: [
    {
      id: 1,
      name: 'test'
    },
    {
      id: 2,
      name: 'test2'
    }
  ],
  columns: [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
  ],
}

export default story
