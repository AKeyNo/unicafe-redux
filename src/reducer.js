const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      const goodState = {
        ...state,
        good: state.good + 1,
      };
      return goodState;
    case "OK":
      const OKState = {
        ...state,
        ok: state.ok + 1,
      };
      return OKState;
    case "BAD":
      const badState = {
        ...state,
        bad: state.bad + 1,
      };
      return badState;
    case "ZERO":
      const zeroState = {
        good: 0,
        ok: 0,
        bad: 0,
      };
      return zeroState;
    default:
      return state;
  }
};

export default counterReducer;