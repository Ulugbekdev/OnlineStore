import { faNoteSticky, faP } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Burger from '../Burger/Burger';
import sidebarStyle from './Sidebar.module.scss';
import Link from 'next/link';
import { createRef } from 'react';

const Sidebar = ({isChangeWidth, ...props}) => {
    const sidebarRef = createRef();

    const clickEvent = () => {
        const sidebarClasses = [...sidebarRef.current.classList];
        const sidebarClassIsActive = sidebarClasses.filter(el => el === sidebarStyle.sidebar_active);
        sidebarRef.current.classList.toggle(sidebarStyle.sidebar_active);
        if (sidebarClassIsActive.length === 1) {
            return isChangeWidth(false);
        }
        isChangeWidth(true);
    }

    return (
        <div className={sidebarStyle.sidebar} ref={sidebarRef}>
            <div className={sidebarStyle.sidebar__menuControl}>
                <Burger classNameBurger={sidebarStyle.sidebar__burger} classNameBurgerBtn={sidebarStyle.sidebar__burgerBtn} clickEvent={clickEvent}/>
            </div>
            <ul className={sidebarStyle.sidebar__nav}>
                <li className={sidebarStyle.sidebar__heading}>Menu</li>
                <li>
                    <Link href={'/notes'}>
                        <a className={sidebarStyle.sidebar__initial}>
                            <span className={sidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </span>
                            Notes
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/products'}>
                        <a className={sidebarStyle.sidebar__initial}>
                            <span className={sidebarStyle.sidebar__icon}>
                                <FontAwesomeIcon icon={faP} />
                            </span>
                            Products
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;