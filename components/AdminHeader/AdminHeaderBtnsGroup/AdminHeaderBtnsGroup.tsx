import { faBars, faVolumeDown, faEarthAmericas, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminHeaderBtn from '../AdminHeaderBtn/AdminHeaderBtn';
import adminBtnsStyle from './AdminHeaderBtnsGroup.module.scss';

const AdminHeaderBtnsGroup = (): JSX.Element => {
    return (
        <div className={adminBtnsStyle.btnsGroup}>
            <AdminHeaderBtn className={[adminBtnsStyle.btnsGroup__btn, adminBtnsStyle.btnsGroup__btn_menu]}>
                <FontAwesomeIcon icon={faBars} />
            </AdminHeaderBtn>
            <AdminHeaderBtn className={[adminBtnsStyle.btnsGroup__btn, adminBtnsStyle.btnsGroup__btn_speaker]}>
                <FontAwesomeIcon icon={faVolumeDown} />
            </AdminHeaderBtn>
            <AdminHeaderBtn className={[adminBtnsStyle.btnsGroup__btn, adminBtnsStyle.btnsGroup__btn_lang]}>
                <FontAwesomeIcon icon={faEarthAmericas} />
            </AdminHeaderBtn>
            <AdminHeaderBtn className={[adminBtnsStyle.btnsGroup__btn, adminBtnsStyle.btnsGroup__btn_graph]}>
                <FontAwesomeIcon icon={faChartPie} />
            </AdminHeaderBtn>
        </div>
    )
};

export default AdminHeaderBtnsGroup;