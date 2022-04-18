export const getLocalDataUser = () => {
    const userNameLS = localStorage.getItem('userName');
    const userIdLS = localStorage.getItem('userId');
    return { login: userNameLS, id: userIdLS };
};