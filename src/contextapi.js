import React,{useContext} from 'react';
import {ThemeContext} from '.context/ThemeContext';

export default function ThemedComponent() {
    const {theme, toggletheme} = useContext (Themecontext);
  return (
    <div style ={{bckground : theme === 'light '?  '#fff' : '#333', color : theme === 'light'? '#000','#fff'}}>
      <button onclick={toggletheme}>Toggle theme</button>
    </div>
  )
}
