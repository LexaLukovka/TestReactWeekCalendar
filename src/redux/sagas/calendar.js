import { all, put, takeEvery } from 'redux-saga/effects'
import { CLEAR_INTERVAL } from 'src/redux/app/calendar/action'
import actions from '../app/actions'

function* cancelAlert() {
  yield put(actions.alert.show('Clear intervals'))
}

export default function* filters() {
  yield all([
    takeEvery(CLEAR_INTERVAL, cancelAlert),
  ])
}
