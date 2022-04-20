import cs from 'classnames';
import { createRef } from 'react';
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import searchStyle from './HeaderSearch.module.scss';

const Search = () => {
    const searchRef = createRef();

    const clickOpenEvent = () => {
        searchRef.current.classList.add(searchStyle.search_active);
    }

    const clickCloseEvent = () => {
        searchRef.current.classList.remove(searchStyle.search_active);
    }

    return (
        <div className={searchStyle.search} ref={searchRef}>
            <input className={searchStyle.search__input} type="text" name="search" placeholder="Type to search..." />
            <HeaderBtn className={searchStyle.search__btnOpen} clickEvent={clickOpenEvent}>
                <FontAwesomeIcon icon={faSearch} />
            </HeaderBtn>
            <HeaderBtn className={searchStyle.search__btnClose} clickEvent={clickCloseEvent}>
                <FontAwesomeIcon icon={faClose} />
            </HeaderBtn>
        </div>
    )
};

export default Search;