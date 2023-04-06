// reducers.js

const initialState = {
    users: [],
    error: null,
};

// Reducer để xử lý hành động liên quan đến danh sách người dùng
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'RESET_ERROR':
            return { ...state, error: null };
        default:
            return state;
    }
};
