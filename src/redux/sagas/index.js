import { all, fork } from 'redux-saga/effects'
import calendar from './calendar'

export default function* rootSaga() {
  yield all([
    fork(calendar),
  ])
}
