let state = {
    token: null
}

export const deleteToken = () => {
    return new Promise((resolve) => {
        state.token = null;
        localStorage.removeItem('token');
        resolve();
    })
    }

export const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = state.token ? state.token :
        localStorage.getItem('token') ? localStorage.getItem('token') :
            null;
    return token;
}

export const isLogin = () => {
    // return true;
    return state.token || localStorage.getItem('token');
}

