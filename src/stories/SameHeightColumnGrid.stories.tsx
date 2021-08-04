import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'

import SameHeightColumnGrid from '../layouts/SameHeightColumnGrid'

export default {
  title: 'Layouts/SameHeightColumnGrid',
  component: SameHeightColumnGrid,
  argTypes: {
    amount: {
      type: {
        name: 'number',
        required: true,
      },
    },
  },
  args: {
    amount: 4,
  },
} as ComponentMeta<typeof SameHeightColumnGrid>

type Args = React.ComponentProps<typeof SameHeightColumnGrid> & {
  amount: number
}

const Template: Story<Args> = (args) => (
  <SameHeightColumnGrid>
    {Array(args.amount)
      .fill(0)
      .map((_, i) => (
        <>
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '0.25px',
              height: '250px',
              width: '100%',
            }}
          />
          <div style={{ borderStyle: 'groove', borderColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div
              key={i}
              style={{
                borderRadius: '0.25rem',
                height: '200px',
                width: '100%',
              }}
            />
            <div style={{ padding: '10px' }}>
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '0.25rem',
                  height: '40px',
                  width: '80px',
                }}
              />
            </div>
          </div>
        </>
      ))}
  </SameHeightColumnGrid>
)

export const Primary = Template.bind({})
