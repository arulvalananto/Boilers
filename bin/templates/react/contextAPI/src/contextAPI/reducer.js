export const initialState = {
  sample: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SAMPLE":
      return {
        ...state,
        sample: {
          name: "Boilers",
        },
      };
    default:
      return state;
  }
};

export default reducer;
