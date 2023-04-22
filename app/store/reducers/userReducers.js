const initialState = {
    signedUpUser: null,
    loggedInUser: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return {
                ...state,
                signedUpUser: action.payload
            };
  
        case 'LOGIN_USER':
            return {
                ...state,
                loggedInUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;