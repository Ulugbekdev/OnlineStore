import cs from 'classnames';
import adminHeaderStyle from '../AdminHeader.module.scss';

const AdminHeaderBtn = ({ className = null, children = null, clickEvent = null, ...props }): JSX.Element => {
    const onClickEvent = () => {
        if (clickEvent === null) return;
        return clickEvent();
    };
    
    return (
        <>
            <button className={cs(adminHeaderStyle.header__btn, className)} onClick={() => onClickEvent()}>
                {children}
            </button>
        </>
    )
};

export default AdminHeaderBtn;