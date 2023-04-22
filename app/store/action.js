export const signupUser = (userData) => ({
    type: 'SIGNUO_USER',
    payload: userData,
});

export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
})