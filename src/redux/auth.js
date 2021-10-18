import * as Types from './actionTypes'; 
const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  user: {},
  errorMessage: '',
  firstTimeLogin: true,
};


export function login(data) {
  return {
    type: Types.LOGIN_LOAD,
    data: data
  };
}

export function logout() {

}

export function registerUser() {

}

export default function reducer(state = initialState, action = {}) {
  console.log("in reducer: ", state, action);
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {...state, isLoggedIn: true}
    case Types.LOGIN_FAIL:
      return {...state, isLoggedIn: false, errorMessage: action.data}
    default:
      return state;
  }
}