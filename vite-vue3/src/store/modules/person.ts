import { PERSON } from '../mutation-types';


export interface StateMap {
  name: string,
  age: number,
}

const state = {
  name: '',
  age: 0,
};

const getters = {

  personInfo: (state: StateMap) => {
    return `이름 : ${state.name}, 나이 : ${state.age}`;
  },
};



// actions
const actions = {
  callMutation ({ state, commit }, { newMsg: string }) {
    commit('changeMessage', newMsg);
  }
}
// const actions = {
//     changeName({ commit: any }, name: any){
//         commit(PERSON.SET_NAME, name);
//     },
// }

const mutations = {
  [PERSON.SET_NAME](state: StateMap, name: any) {
    state.name = name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations,
};
