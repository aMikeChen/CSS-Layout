import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  column-gap: 1rem;
  width: 100%;
`

const Item = styled.div`
  break-inside: avoid;
`

type Props = {
  children: React.ReactNode
}

function MasonryGrid(props: Props) {
  const { children } = props
  const columnCount = React.Children.count(children)

  return (
    <Container style={{ columnCount }}>
      {React.Children.map(children, (child) => (
        <Item>{child}</Item>
      ))}
    </Container>
  )
}

export default MasonryGrid
