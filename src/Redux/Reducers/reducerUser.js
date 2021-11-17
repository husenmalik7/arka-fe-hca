const initialState = {
  userData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "LOGIN_USER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case "LOGIN_USER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData: action.payload.data,
        //trye change data with response
      };

    default:
      return prevState;
  }
};

export default userReducer;
