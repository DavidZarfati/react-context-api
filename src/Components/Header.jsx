import styles from "./HeaderModule.module.css"
import { NavLink } from "react-router-dom"
import { useBudget } from "../Context/PreferitiContext"
export default function Header() {
    const { isBudget, addBudget, removeBudget, changeBudget } = useBudget();

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
                        <li key={index}>
                            <NavLink to={link.path} className={styles["menu-link"]} data-text={link.title}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button onClick={changeBudget}>Bottone di Test effettivo</button>
                <ul>
                    {/* Sezione secondaria, puoi aggiungere altri <NavLink> qui se necessario */}
                </ul>
            </nav>
        </header>
    )
}