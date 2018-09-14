import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* helloSagaAsync(action) {
	yield delay(1000)
	yield put({type: 'HELLO_SAGA_ASYNC', data: action.data})
}

export default function* rootSaga() {
	yield takeEvery('TEST_BUTTON', helloSagaAsync)
}