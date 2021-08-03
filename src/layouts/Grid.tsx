import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  padding: 8px;
  box-sizing: border-box;
`

type Props = {
  columns: number
  children: React.ReactNode
}

function Grid(props: Props) {
  const { columns, children } = props

  return (
    <Container>
      {React.Children.map(children, (child) => (
        <Item
          style={{
            flexBasis: `${100 / columns}%`,
          }}
        >
          {child}
        </Item>
      ))}
    </Container>
  )
}

export default Grid
