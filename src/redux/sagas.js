import { call, all, fork } from 'redux-saga/effects';
import auth from './sagas/auth'; 

export default function* rootSaga() {
    // yield call(watchGetLogin);          
    yield all([
        fork(auth)
    ])
    // yield all([...Object.values(watchLogins), ...Object.values(watchTrackings)].map(fork));
}
