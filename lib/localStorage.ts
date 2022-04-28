import { GetLocalDataUser } from './types';

export const getLocalDataUser = (isAdmin: boolean): GetLocalDataUser => {
    const userIdLS = isAdmin ? localStorage.getItem('userIdAdmin') : localStorage.getItem('userId');
    const userNameLS = isAdmin ? localStorage.getItem('userNameAdmin') : localStorage.getItem('userName');

    return {
        login: userNameLS,
        id: userIdLS
    };
};

export const removeLocalDataUser = (isAdmin: boolean) => {
    if (isAdmin) {
        localStorage.removeItem('userIdAdmin');
        localStorage.removeItem('userNameAdmin');
        return
    }
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
}