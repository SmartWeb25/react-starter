import * as Types from './../actionTypes'; 
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'; 
import Api from './../ApiClient'; 
function* login(action) {
  console.log('in login saga'); 
  try {
    const loginData = yield new Api().post('login', {data: action.data}).then((res) => {
      console.log('res: ', res);
      return res; 
    });
    yield put({type: Types.LOGIN_SUCCESS, data: loginData})
  } catch (e) {
    yield put({type: Types.LOGIN_FAIL, data: e});
  }
  
}

export default function* watchAuthSagas() {
    yield takeLatest(Types.LOGIN_LOAD, login);
}
