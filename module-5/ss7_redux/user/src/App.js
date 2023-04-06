// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./components/sagas";
import {usersReducer} from "./components/reducers";
import UserList from "./components/components";


// Tạo middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Tạo Redux Store
const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));

// Chạy Saga root
sagaMiddleware.run(rootSaga);

// App component
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <UserList />
            </div>
        </Provider>
    );
};

export default App;
