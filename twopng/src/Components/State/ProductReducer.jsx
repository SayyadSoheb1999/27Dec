const data = [
  {
    name: "shoehb",
    slug: "success party event",
    start: "01/11/2021",
    photo: "34",
  },
  {
    name: "shoehb",
    slug: "success party event",
    start: "21/11/2021",
    photo: "14",
  },
];

export const ProductReducer = (state = { products: [...data] }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...action.data, ...state.products],
      };
    default:
      return state;
  }
};
