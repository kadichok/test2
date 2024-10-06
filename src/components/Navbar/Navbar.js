import logo from "./logo.svg"
import navbarStyle from "./navbar.module.css"

export default function Navbar() {
    return (
        <header className={navbarStyle.container}>
            <a href="/public#"> <img className={navbarStyle.picture} src={logo} alt="logo"/> </a>
            <nav className={navbarStyle.caption}>
                <a href="/public#">Главная</a>
                <a href="/public#">Мое портфолио</a>
                <a href="/public#">Обо мне</a>
                <a href="/public#">Контакты</a>
            </nav>
        </header>

    );
}