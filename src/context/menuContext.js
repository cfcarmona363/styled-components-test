import React, { createContext, useState } from 'react'

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return <MenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuContext.Provider>
}

export default MenuProvider
