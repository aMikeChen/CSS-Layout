import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import HolyGrail from '../layouts/HolyGrail'

export default {
  title: 'Layouts/HolyGrail',
  component: HolyGrail,
} as ComponentMeta<typeof HolyGrail>

type Args = React.ComponentProps<typeof HolyGrail>

const grayBlock = () => (
  <div style={{ padding: '10px', height: '100%', width: '100%' }}>
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

const Template: Story<Args> = (args) => (
  <div style={{ height: '100vh' }}>
    <HolyGrail {...args} leftComponent={grayBlock} rightComponent={grayBlock}>
      {grayBlock()}
    </HolyGrail>
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  leftWidth: '25%',
  rightWidth: '25%',
}
