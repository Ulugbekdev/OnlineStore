type GetLocalDataUser = {
    login: string
    id: string
}

export const getLocalDataUser = (): GetLocalDataUser => {
    const userNameLS = localStorage.getItem('userName');
    const userIdLS = localStorage.getItem('userId');
    return { login: userNameLS, id: userIdLS };
};