import cs from 'classnames';
import { faBars, faVolumeDown, faEarthAmericas, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import btnsStyle from './HeaderBtnsGroup.module.scss';

const BtnsGroup = () => {
    return (
        <div className={btnsStyle.btnsGroup}>
            <HeaderBtn className={[btnsStyle.btnsGroup__btn, btnsStyle.btnsGroup__btn_menu]}>
                <FontAwesomeIcon icon={faBars} />
            </HeaderBtn>
            <HeaderBtn className={[btnsStyle.btnsGroup__btn, btnsStyle.btnsGroup__btn_speaker]}>
                <FontAwesomeIcon icon={faVolumeDown} />
            </HeaderBtn>
            <HeaderBtn className={[btnsStyle.btnsGroup__btn, btnsStyle.btnsGroup__btn_lang]}>
                <FontAwesomeIcon icon={faEarthAmericas} />
            </HeaderBtn>
            <HeaderBtn className={[btnsStyle.btnsGroup__btn, btnsStyle.btnsGroup__btn_graph]}>
                <FontAwesomeIcon icon={faChartPie} />
            </HeaderBtn>
        </div>
    )
};

export default BtnsGroup;