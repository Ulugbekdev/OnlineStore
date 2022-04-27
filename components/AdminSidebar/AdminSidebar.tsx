import { faNoteSticky, faP, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Burger from '../AdminBurger/AdminBurger';
import adminSidebarStyle from './AdminSidebar.module.scss';
import Link from 'next/link';
import { createRef } from 'react';

const AdminSidebar = ({isChangeWidth, ...props}): JSX.Element => {
    const sidebarRef = createRef<HTMLDivElement>();

    const clickEvent = () => {
        const sidebarClassList = Array.from(sidebarRef.current.classList);
        const sidebarClasses = [...sidebarClassList];
        const sidebarClassIsActive = sidebarClasses.filter(el => el === adminSidebarStyle.sidebar_active);
        sidebarRef.current.classList.toggle(adminSidebarStyle.sidebar_active);
        if (sidebarClassIsActive.length === 1) {
            return isChangeWidth(false);
        }
        isChangeWidth(true);
    }

    return (
        <div className={adminSidebarStyle.sidebar} ref={sidebarRef}>
            <div className={adminSidebarStyle.sidebar__menuControl}>
                <Burger classNameBurger={adminSidebarStyle.sidebar__burger} classNameBurgerBtn={adminSidebarStyle.sidebar__burgerBtn} clickEvent={clickEvent}/>
            </div>
            <ul className={adminSidebarStyle.sidebar__nav}>
                <li className={adminSidebarStyle.sidebar__heading}>Menu</li>
                <li>
                    <Link href={'/admin'}>
                        <a className={adminSidebarStyle.sidebar__initial}>
                            <span className={adminSidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/admin/notes'}>
                        <a className={adminSidebarStyle.sidebar__initial}>
                            <span className={adminSidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </span>
                            Notes
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/admin/products'}>
                        <a className={adminSidebarStyle.sidebar__initial}>
                            <span className={adminSidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faP} />
                            </span>
                            Products
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/admin/orders'}>
                        <a className={adminSidebarStyle.sidebar__initial}>
                            <span className={adminSidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                            Orders
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default AdminSidebar;