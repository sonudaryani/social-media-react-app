// src/middleware/thunkMiddleware.js
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const thunkMiddleware = applyMiddleware(thunk);

export default thunkMiddleware;
