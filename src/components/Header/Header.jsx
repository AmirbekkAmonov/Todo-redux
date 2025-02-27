import { useState } from "react";
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
            <div className='profile'>
                <img src="night.png" alt="" />
            </div>
        </header>
    );
}

export default Header;
