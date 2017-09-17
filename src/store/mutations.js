import * as types from './mutation-types';

const mutataions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  }
};

export default mutataions;
