import React from 'react'
import './styles.scss'

type Props = {
  leftComponent: () => React.ReactNode
  children: React.ReactNode
  rightComponent: () => React.ReactNode
  leftWidth: string
  rightWidth: string
}

function HolyGrail(props: Props) {
  const { leftComponent, leftWidth = '25%', rightComponent, rightWidth = '25%', children } = props
  return (
    <div className="container">
      <div style={{ width: leftWidth }}>{leftComponent()}</div>
      <div className="middle">{children}</div>
      <div style={{ width: rightWidth }}>{rightComponent()}</div>
    </div>
  )
}

export default HolyGrail
