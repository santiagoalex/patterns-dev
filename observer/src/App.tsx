import './App.css'
import Toast from './components/Toast/Toast';
import { Button, Switch, FormControlLabel } from '@mui/material'
import observable from './observer'

function App() {

  function handleClick() {
    observable.notify("User clicked button!")
  }

  function handleToggle() {
    observable.notify("User toggled switch!")
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click Aqui</Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <Toast />
    </>
  )
}

export default App
