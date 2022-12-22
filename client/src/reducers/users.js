
export default (users = [], action) => {
    switch (action.type) {
      case "FETCH":
        return action.payload;
      case "UPDATE":
        return users.map((user) => (user._id === action.payload._id ? action.payload : user));
      default:
        return users;
    }
}