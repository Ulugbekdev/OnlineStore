import Header from '../Header/Header';
import containerStyle from './Container.module.scss';

const Container = ({children, ...props}): JSX.Element => {    
    return (
        <div className={containerStyle.container}>
            <Header/>
            {children}
        </div>
    )
};

export default Container;