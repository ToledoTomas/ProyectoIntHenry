import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {
    return (
    <div className={style.divPrimary}>
        <div className={style.divSecond}>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact</a>
        </div>
        <SearchBar onSearch={onSearch}/>
    </div>
)};

export default Nav;