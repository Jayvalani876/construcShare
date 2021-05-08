import { SIGN_IN, SIGN_OUT } from 'src/store/actionTypes';


export const signIn = (username, password) => {
    return async (disptach) => {
      try {
        disptach({ type: SIGN_IN, isAuth: true });
      } catch (err) {
        throw err;
      }
    };
  };

  export const signOut = () => {
    return async (disptach) => {
      try {
        disptach({ type: SIGN_OUT, isAuth: false });
      } catch (err) {
        throw err;
      }
    };
  };