// components.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser } from './actions';

// Component hiển thị danh sách người dùng
const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <div>
            <h2>Title</h2>
            <button onClick={() => dispatch(getUsers())}>Get users</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => handleDeleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default UserList;
