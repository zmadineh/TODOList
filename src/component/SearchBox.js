import React from "react";
import {FaSearch} from "react-icons/fa";
import '../App.css';
import clsx from "clsx";

const SearchBox = ({filter}) => {
    return (
        <div className={'searchBox'}>
            <div className={'search_component'}>
                <FaSearch className={clsx('gray_heart', 'icon_margin' )}/>
                <input className={'search_input'} name={'todo-search'} type={"text"} onChange={filter} />
            </div>
        </div>
    )
}

export default SearchBox;