import { combineReducers } from 'redux-immutable';

import { reducer as majorReducer } from '@/pages/major/store';

import { reducer as discoverReducer } from '@/pages/discover/store';

import { reducer as answerReducer } from '@/pages/answer/store';

const cReducer = combineReducers({
  major: majorReducer,
  discover: discoverReducer,
  answer: answerReducer
})

export default cReducer