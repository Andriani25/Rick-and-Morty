import './App.css'
import CharacterList from './components/CharacterList'
import Container from "@mui/material/Container"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"

function App() {

  return (
<Container>
  <AppBar position = "relative" >
    <IconButton color='inherit' edge="start" aria-label='CharacterList' />

<h1>Rick and Morty Universe 🌍</h1>

<CharacterList/>

</AppBar>
</Container>
  )
}

export default App
