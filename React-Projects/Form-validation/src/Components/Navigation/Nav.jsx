import React from 'react'
import styles from "./Nav.module.css";
import githubLogo from '../../images/github.png'; // ✅ import it properly

export const Nav = () => {
    console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
     <div className={`${styles.logo}`}>
        <img src={githubLogo} alt="profile" />
     </div>

     <ul>
        <li>
            <a href="#home">Home</a>
        </li>

        <li>
            <a href="#About">About</a>
        </li>

        <li>
            <a href="#contact">Contact</a>
        </li>
     </ul>
    </nav>
  )
}
