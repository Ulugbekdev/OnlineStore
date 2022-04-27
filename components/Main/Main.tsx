import Header from '../Header/Header';
import mainStyle from './Main.module.scss';

const Main = ({children, ...props}): JSX.Element => {    
    return (
        <div className={mainStyle.container}>
            <Header/>
            {children}
        </div>
    )
};

export default Main;