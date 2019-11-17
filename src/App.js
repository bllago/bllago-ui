import React from 'react'
import Bllago from './components/Bllago'

function App() {
  return (
    <div className="App">
      <div>
        <Bllago
          component="button"
          color="primary"
          variant="contained"
          size="md"
          shape="rectangle">
          My button
        </Bllago>
        <Bllago
          component="button"
          color="primary"
          variant="outlined"
          size="md"
          shape="rectangle">
          My button
        </Bllago>
        <Bllago
          component="button"
          color="primary"
          variant="text"
          size="md"
          shape="rectangle">
          My button
        </Bllago>
      </div>
      <div>
        <Bllago
          component="button"
          color="primary"
          variant="contained"
          size="sm"
          shape="rectangle">
          My button
        </Bllago>
        <Bllago
          component="button"
          color="primary"
          variant="contained"
          size="md"
          shape="rectangle">
          My button
        </Bllago>
        <Bllago
          component="button"
          color="primary"
          variant="contained"
          size="lg"
          shape="rectangle">
          My button
        </Bllago>
      </div>
    </div>
  )
}

export default App
