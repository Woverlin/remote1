import Button from './components/Button'

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Remote 1 App (Standalone)</h1>
      <p>This is the standalone version of Remote 1. It exposes the following Button component:</p>
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <Button />
      </div>
    </div>
  )
}

export default App
