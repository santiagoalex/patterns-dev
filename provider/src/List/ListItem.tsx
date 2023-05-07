import React from 'react'
import { ThemeCtx } from '../context/ThemeContext'


function ListItem() {
  const { useContextTheme } = ThemeCtx
  const { theme } = useContextTheme()
  return (
    <li style={theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad? Velit aspernatur nisi totam accusantium ex reprehenderit pariatur inventore veritatis?
    </li>
  )
}

export default ListItem