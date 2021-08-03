import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  * {
    box-sizing: border-box;
  }
`

const Middle = styled.div`
  flex-grow: 1;
`

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
    <Container>
      <div style={{ width: leftWidth }}>{leftComponent()}</div>
      <Middle>{children}</Middle>
      <div style={{ width: rightWidth }}>{rightComponent()}</div>
    </Container>
  )
}

export default HolyGrail
