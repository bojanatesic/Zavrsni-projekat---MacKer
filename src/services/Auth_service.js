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
    return state.token || localStorage.getItem('token');
}

export const setId = (id) => {
    localStorage.setItem('id', id)
    state.id = id
}

export const getId = () => {
    const id = state.id ? state.id : localStorage.getItem('id') ? localStorage.getItem('id') : null
    return id
}