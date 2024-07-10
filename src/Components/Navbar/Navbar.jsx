

import React, {useState} from "react"
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";




const NavBar = () =>{

    const [active , setActive] = useState('navBar')
    // Função para aparecer navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

      // Função para remover navBar
      const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                        <MdOutlineTravelExplore className="icon"/>
                            Travel.
                            </h1>
                    </a>
                </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">
                           Inicio
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Pacotes
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                           Loja
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Sobre
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Pages
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                            Novidades
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">
                           Contato
                        </a>
                    </li>

                    <button className="btn">
                        <a href="#"> Agende agora</a>
                    </button>

                </ul>

            <div onClick={removeNavbar}  className="closeNavbar">
            <FaRegWindowClose className="icon"  />
            </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
            </div>


            </header>
        </section>
    )
}


export default NavBar;