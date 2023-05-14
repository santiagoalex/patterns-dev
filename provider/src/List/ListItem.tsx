import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


function ListItem() {

  const { theme } = useContext(ThemeContext)
  return (
    <li style={theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad? Velit aspernatur nisi totam accusantium ex reprehenderit pariatur inventore veritatis?
    </li>
  )
}

export default ListItem