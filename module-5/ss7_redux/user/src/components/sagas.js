// sagas.js

import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    getUsers,
    setUsers,
    setError,
    resetError,
} from './actions';

// Hàm gọi API lấy danh sách người dùng
const fetchUsers = () =>
    axios.get('https://jsonplaceholder.typicode.com/users');

// Hàm gọi API xóa người dùng
const deleteUserById = (userId) =>
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

// Saga để lấy danh sách người dùng
function* getUsersSaga() {
    try {
        const response = yield call(fetchUsers);
        yield put(setUsers(response.data));
    } catch (error) {
        yield put(setError(error.message));
    }
}

// Saga để xóa người dùng
function* deleteUserSaga(action) {
    try {
        yield call(deleteUserById, action.payload);
        yield put(getUsers());
        yield put(resetError());
    } catch (error) {
        yield put(setError(error.message));
    }
}

// Saga root để theo dõi các hành động
export default function* rootSaga() {
    yield takeEvery('GET_USERS', getUsersSaga);

    yield takeEvery('DELETE_USER', deleteUserSaga);
}
