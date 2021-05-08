import { SIGN_IN, SIGN_OUT } from 'src/store/actionTypes';

const initialState = {
    isAuth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
          return {
            ...state,
            isAuth: action.isAuth
          };
        case SIGN_OUT:
            return {
                ...state,
                isAuth: action.isAuth
              };
        default:
          return state;
      }
}