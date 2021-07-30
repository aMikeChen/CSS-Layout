import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'

import Grid from '../layouts/Grid'

export default {
  title: 'Layouts/Grid',
  component: Grid,
  argTypes: {
    amount: {
      type: {
        name: 'number',
        required: true,
      },
    },
  },
  args: {
    amount: 20,
  },
} as ComponentMeta<typeof Grid>

type Args = React.ComponentProps<typeof Grid> & {
  amount: number
}

const Template: Story<Args> = (args) => (
  <Grid {...args}>
    {Array(args.amount)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '0.25rem',
            height: '80px',
            width: '100%',
          }}
        />
      ))}
  </Grid>
)

export const Primary = Template.bind({})
Primary.args = {
  columns: 4,
}
