import { reset, SubmissionError } from 'redux-form';
import ApiService from '../../../services/Api';


export const setCurrentUser = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  };
}

export const authenticationRequest = () => {
  return { type: 'AUTHENTICATION_REQUEST' };
}

export const logout = (router) => {
  localStorage.removeItem('token');
  router.history.replace('./login');
  return { type: 'LOGOUT' };
}

export const authenticationFailure = (errors) => {
  return { type: 'AUTHENTICATION_FAILURE', errors };
}

export const createUserFailure = (errors) => {
  return { type: 'CREATE_USER_FAILURE', errors}
}


export const signup = (user, router) => {
  return dispatch => {
    dispatch(authenticationRequest());
    return ApiService.post(`/users`, user)
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(setCurrentUser(user));
        dispatch(reset('signup'));
        router.history.replace('/dashboard');
      })
      .catch((err) => {
        console.log(err)
        dispatch(createUserFailure(err))
        throw new SubmissionError(err)
      })
  }
}

export const login = (user, router) => {
  return dispatch => {
    dispatch(authenticationRequest());
    return ApiService.post(`/auth`, user)
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(setCurrentUser(user))
        dispatch(reset('login'));
        router.history.replace('/dashboard');
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authenticationFailure(errors))
      })
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticationRequest());
    return ApiService.post(`/auth/refresh`)
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(setCurrentUser(user));
      })
      .catch(() => {
        localStorage.removeItem('token');
        window.location = '/login';
      });
  };
}
