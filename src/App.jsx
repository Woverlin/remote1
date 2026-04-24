import React from 'react'
import ButtonLocal from './components/Button'
import { Button as SharedButton } from '@woverlin/shared-ui'
import '@woverlin/shared-ui/style.css'

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Remote 1 App (Standalone)</h1>
      <p>This is the standalone version of Remote 1. It exposes the following Button component:</p>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
        <h3>1. Nút Local cũ (Chưa dùng chung)</h3>
        <ButtonLocal />
      </div>

      <div style={{ padding: '20px', border: '1px solid #4f46e5', backgroundColor: '#f5f5ff' }}>
        <h3 style={{ color: '#4f46e5' }}>2. Nút Component (Từ @woverlin/shared-ui 🚀)</h3>
        <p>Thử 2 phiên bản màu sắc khác nhau xuất ra từ thư viện dùng chung:</p>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <SharedButton variant="primary" onClick={() => alert("Primary button clicked!")}>
            Primary Style
          </SharedButton>
          
          <SharedButton variant="secondary" onClick={() => alert("Secondary button clicked!")}>
            Secondary Style
          </SharedButton>
        </div>
      </div>
    </div>
  )
}

export default App
