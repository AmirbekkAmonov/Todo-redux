import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchInformation } from "../../redux/slices/searchSlice";
import "./Header.scss";

function Header({ toggleMenu }) {
    const [query, setQuery] = useState(""); 
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        dispatch(searchInformation(value));
    };

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
        } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return (
        <header>
            <div className='menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <input 
                type="text" 
                placeholder='Search...' 
                value={query}
                onChange={handleSearch} 
            />
            <div className='profile'  onClick={() => setDarkMode(!darkMode)}>
                <img src={darkMode ? "sun.png" : "night.png"} alt="" />
            </div>
        </header>
    );
}

export default Header;
