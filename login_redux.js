const redux = require("redux");
const createStore = redux.createStore;

let initialState = {
  loggedIn: false,
  username: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

let actionLoginSuccess = {
  type: "LOGIN_SUCCESS",
  payload: { username: "husnil" },
};

const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
  console.log("subscription", store.getState());
});

store.dispatch(actionLoginSuccess);

console.log("after dispatch", store.getState());
