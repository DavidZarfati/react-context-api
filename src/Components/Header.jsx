import styles from "./HeaderModule.module.css"
import { NavLink } from "react-router-dom"
import { useBudget } from "../Context/PreferitiContext"
import '../App.css'

export default function Header() {
    const { isBudget, addBudget, removeBudget, changeBudget } = useBudget();
    const { budgetMode } = useBudget();
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/chi-siamo"
        },
        {
            title: "Prodotti",
            path: "/prodotti"
        },
    ]

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menuList}>
                    {navLinks.map((link, index) => (
                        <button key={index}>
                            <NavLink to={link.path} className={styles["menu-link"]} data-text={link.title}>
                                {link.title}
                            </NavLink>
                        </button>
                    ))}
                    <button onClick={changeBudget}>{budgetMode ? "Budget Mode:On" : "Budget Mode:Off"}</button>

                </ul>
                {/* <ul> */}
                {/* Sezione secondaria, puoi aggiungere altri <NavLink> qui se necessario */}
                {/* </ul> */}
            </nav>
        </header>
    )
}