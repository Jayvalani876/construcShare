import { SIGN_IN, SIGN_OUT } from 'src/store/actionTypes';


export const signIn = (username, password) => {
  return async (disptach) => {
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyC8F8HKFyoYHibaPqc-u5c9GMSYR2GLA2Q',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          returnSecureToken: true
        })
      }
    );

    try {
      disptach({ type: SIGN_IN, isAuth: true });
    } catch (err) {
      throw err;
    }
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyC8F8HKFyoYHibaPqc-u5c9GMSYR2GLA2Q',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const resData = await response.json();
    console.log(resData);

    disptach({ type: SIGN_IN, isAuth: true })
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