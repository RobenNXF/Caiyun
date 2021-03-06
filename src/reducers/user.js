import ActionTypes from '../constants';

const INITIAL_STATE = {
  isFetching: false,
  currentUser: {},
  scrollTop: 0,
  team: require('./../mocks/team.json'),
  // team: [
  //   {
  //     id: 0,
  //     name: 'ahbing',
  //     avator: 'sea-clouds-cloudy-flowers-landscape.jpeg',
  //     blog: 'http://huangbingbing.com',
  //     github: 'http://github.com/ahbing',
  //     describe: '人来人往',
  //     period: 4,
  //     profession: '工商管理',
  //     motto: 'some motto',
  //     company: 'upyun',
  //   },
  // ],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ActionTypes.REQUEST_USER:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case ActionTypes.RECEIVE_USER:
    return Object.assign({}, state, {
      isFetching: false,
    });
  case ActionTypes.SELECT_USER:
    return Object.assign({}, state, {
      currentUser: state.team[action.userId] || {},
    });
  case ActionTypes.SET_SCROLLTOP:
    return Object.assign({}, state, {
      scrollTop: action.scrollTop,
    });
  default:
    return state;
  }
}

export default user;
