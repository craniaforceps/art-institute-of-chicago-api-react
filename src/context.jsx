import { createContext, useContext, useState, useEffect } from 'react'

//1. Criação do contexto React que pode ser compartilhado entre componentes (importamos previamente o createContext)
const AppContext = createContext()

//2. O AppProvider é o componente que envolve os outros componentes e fornece o contexto
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false) //estado do Dark Theme
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false) //estado dos filtros
  const [searchTerm, setSearchTerm] = useState('Picasso') //estado do input search
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  //modal

  //função Dark theme
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    //usamos aqui o JS DOM para ir buscar o body
    const body = document.querySelector('body')
    //e adicionar uma classe previamente criada em CSS, se o newDarkTheme for true, ele acrescenta a classe, se false remove a classe
    body.classList.toggle('dark-theme', newDarkTheme)
  }

  const toggleAdvancedFilters = () => {
    const newAdvancedFilters = !showAdvancedFilters
    setShowAdvancedFilters(newAdvancedFilters)
    console.log(showAdvancedFilters)
  }

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        toggleAdvancedFilters,
        showAdvancedFilters,
        searchTerm,
        setSearchTerm,
        selectedArtwork,
        setSelectedArtwork,
        selectedImage,
        setSelectedImage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
//3. Um hook personalizado para facilitar o acesso ao contexto por parte de outros componentes

export const useGlobalContext = () => useContext(AppContext)
