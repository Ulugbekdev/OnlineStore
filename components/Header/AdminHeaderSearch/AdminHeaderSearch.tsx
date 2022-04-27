import { createRef } from 'react';
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminHeaderBtn from '../AdminHeaderBtn/AdminHeaderBtn';
import adminSearchStyle from './AdminHeaderSearch.module.scss';

const AdminHeaderSearch = (): JSX.Element => {
    const searchRef = createRef<HTMLDivElement>();

    const clickOpenEvent = () => {
        searchRef.current.classList.add(adminSearchStyle.search_active);
    }

    const clickCloseEvent = () => {
        searchRef.current.classList.remove(adminSearchStyle.search_active);
    }

    return (
        <div className={adminSearchStyle.search} ref={searchRef}>
            <input className={adminSearchStyle.search__input} type="text" name="search" placeholder="Type to search..." />
            <AdminHeaderBtn className={adminSearchStyle.search__btnOpen} clickEvent={clickOpenEvent}>
                <FontAwesomeIcon icon={faSearch} />
            </AdminHeaderBtn>
            <AdminHeaderBtn className={adminSearchStyle.search__btnClose} clickEvent={clickCloseEvent}>
                <FontAwesomeIcon icon={faClose} />
            </AdminHeaderBtn>
        </div>
    )
};

export default AdminHeaderSearch;