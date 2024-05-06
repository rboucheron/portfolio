'use client'
import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button onClick={toggleMode}>
      {isDarkMode ? <Moon color="#f66d0d" /> : <Sun color="#f66d0d" />}
    </button>
  )
}

const Header = () => {
  return (
    <header className="w-full sticky top-0 pt-2 pb-2 bg-transparent border-b border-primary grid grid-cols-2">
      <div className={`w-11 m-2 flex items-start`}>
        <svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M67.6595 29.984C65.4301 27.5831 62.4527 26.1675 58.7248 25.7421V25.6003C61.7193 24.6297 64.073 22.9843 65.7834 20.6641C67.4939 18.3439 68.3491 15.6692 68.3491 12.64C68.3491 8.82846 66.9091 5.76991 64.0316 3.46195C61.154 1.15398 57.3092 0 52.4971 0H23.3199C17.9888 0 13.8126 1.2909 10.7938 3.87024C7.77491 6.44959 6.26428 10.0607 6.26428 14.6986C6.26428 22.3217 10.3211 27.2677 18.4371 29.539V29.7175C16.9289 30.3556 15.6229 31.2676 14.5265 32.4509C13.4301 33.6342 12.0096 35.6586 10.2626 38.5215L0 55H8.34993L17.443 39.7317C19.2606 36.6781 20.9223 34.5999 22.433 33.4997C23.9436 32.3995 25.7466 31.8494 27.8469 31.8494H32.9417V55H52.9186C58.2034 55 62.538 53.538 65.9223 50.6139C69.3066 47.6898 71 43.8636 71 39.1278C71 35.4361 69.8865 32.3873 67.6571 29.984H67.6595ZM32.9441 25.6346H24.5942C21.3633 25.6346 18.7392 24.6884 16.7218 22.7936C14.7044 20.8988 13.6956 18.4148 13.6956 15.3367C13.6956 12.4738 14.6166 10.2367 16.4562 8.62553C18.2958 7.0168 20.9735 6.20999 24.4894 6.20999H32.9465V25.6321L32.9441 25.6346ZM43.4747 6.21244H50.5528C57.4408 6.21244 60.886 8.80401 60.886 13.9872C60.886 16.9455 59.9139 19.2608 57.9671 20.9282C56.0203 22.598 53.3377 23.4317 49.9169 23.4317H43.4771V6.21244H43.4747ZM60.5474 46.2107C58.5299 47.927 55.6695 48.7851 51.966 48.7851H43.4747V29.6124H50.7989C59.3145 29.6124 63.5735 32.7614 63.5735 39.0569C63.5735 42.1106 62.5648 44.4944 60.5474 46.2107Z"
            fill="#FF7518" />
        </svg>
      </div>
      <div className={`flex items-center space-x-4 justify-end mr-4`}>
        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-boucheron-287b02233/"
          className="text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/rboucheron"
          className="text-primary "
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        < ToggleMode />
      </div>
    </header>
  )
}



export default Header
