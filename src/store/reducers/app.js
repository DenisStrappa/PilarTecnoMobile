import { SET_LOADING } from '../constants';

const initialState = {
 loading:false
};
 
export default (state = initialState, action) => {
 if (action.type === SET_LOADING) {
   return {
     ...state,
     loading: action.value
   };
 }
 return { ...state };
};
