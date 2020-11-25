const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // console.log("hit");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
