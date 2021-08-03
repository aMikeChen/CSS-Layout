import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { random } from 'lodash'

import MasonryGrid from '../layouts/MasonryGrid'

export default {
  title: 'Layouts/MasonryGrid',
  component: MasonryGrid,
  argTypes: {
    amount: {
      type: {
        name: 'number',
        required: true,
      },
    },
  },
  args: {
    amount: 3,
  },
} as ComponentMeta<typeof MasonryGrid>

type Args = React.ComponentProps<typeof MasonryGrid> & {
  amount: number
}

const grayBlocks = () =>
  Array(4)
    .fill(0)
    .map((_, i) => {
      const height = random(20, 100)

      return (
        <div key={`block_${i}`} style={{ padding: '5px', height: `${height}px`, width: '100%' }}>
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              height: '100%',
              width: '100%',
              borderRadius: '0.25rem',
            }}
          />
        </div>
      )
    })

const blocksColumn = (index: number) => (
  <div key={`column_${index}`} style={{ display: 'flex', flexDirection: 'column' }}>
    {grayBlocks()}
  </div>
)

const Template: Story<Args> = (args) => {
  const { amount } = args

  return (
    <MasonryGrid {...args}>
      {Array(amount)
        .fill(0)
        .map((_, i) => blocksColumn(i))}
    </MasonryGrid>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
