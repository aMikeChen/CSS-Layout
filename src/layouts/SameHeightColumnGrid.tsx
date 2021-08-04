import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const ColumnItem = styled.div`
  flex: 1;
  margin: 0 8px;

  display: flex;
  flex-direction: column;
`

type Props = {
  children: React.ReactNode
}

function SameHeightColumnGrid(props: Props) {
  const { children } = props

  return (
    <Container>
      {React.Children.map(children, (element) => (
        <ColumnItem>{element}</ColumnItem>
      ))}
    </Container>
  )
}

export default SameHeightColumnGrid
