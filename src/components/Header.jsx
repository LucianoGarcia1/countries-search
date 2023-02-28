import { useEffect, useState } from "react"
import { CiDark } from "react-icons/ci"

export const Header = () => {

  const [active, setActive] = useState(false);

  useEffect(()=>{ 
    const darkMode = ()=>{
      document.body.classList.toggle("themes")
    }

    darkMode()
  }, [active])

  return (
    <header className="header">
      <h1>
        Know the world!
      </h1>

        <button 
          type="button" 
          className="darkMode"
          title="dark mode"
          onClick={()=> setActive((prev) => !prev)}
        >
          <CiDark/>
        </button>
    </header>
  )
}
