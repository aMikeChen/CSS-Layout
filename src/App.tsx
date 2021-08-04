import Grid from './layouts/Grid'

function App() {
  return (
    <Grid columns={4}>
      {Array(32)
        .fill(0)
        .map((_, i) => (
          <div style={{ backgroundColor: 'grey', margin: '8px' }}>{i}</div>
        ))}
    </Grid>
  )
}

export default App
