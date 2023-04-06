

// Hành động để lấy danh sách người dùng
export const getUsers = () => ({
    type: 'GET_USERS',
});

// Hành động để xóa người dùng
export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
});

// Hành động để cập nhật danh sách người dùng
export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
});

// Hành động để hiển thị thông báo lỗi
export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
});

// Hành động để reset thông báo lỗi
export const resetError = () => ({
    type: 'RESET_ERROR',
});
