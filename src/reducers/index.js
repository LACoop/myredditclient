import { combineReducers } from "redux";
import Posts from './reducers-posts';

const allReducers = combineReducers({
    posts: Posts
});

export default allReducers;