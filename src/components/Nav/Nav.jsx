import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css";
import { Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
    <div className={style.divPrimary}>
        <div className={style.divSecond}>
            <Link className ={style.link} to="/home">Home</Link>
            <Link className ={style.link} to="/about">About</Link>
        </div>
        <SearchBar onSearch={onSearch}/>
    </div>
)};

export default Nav;