import {creatStore} from 'redux';
import counterReducer from './counter reducer';

const store = creatstore (counterReducer);
export default store;