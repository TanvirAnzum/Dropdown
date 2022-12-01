export const initState = {
  options: [
    "Indigo",
    "Blue",
    "Purple",
    "Red",
    "Green",
    "Gold",
    "Orchid",
    "Orange",
    "Tomato",
    "Silver",
  ],
  selected: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    // this is for clearing the selected field
    case "CLEAR_SELECTION": {
      return {
        ...initState,
      };
    }

    // this is for selecting item from options list
    case "SELECT_OPTIONS": {
      const selectedItems = action.payload;
      const updatedOptions = state.options.filter(
        (item) => item !== selectedItems
      );
      const updatedSelections = [...state.selected, selectedItems];

      return {
        ...state,
        options: updatedOptions,
        selected: updatedSelections,
      };
    }

    // this is for unselecting item from display
    case "UNSELECT_OPTIONS": {
      const selectedItems = action.payload;
      const updatedOptions = [...state.options, selectedItems];
      const updatedSelections = state.selected.filter(
        (item) => item !== selectedItems
      );
      return {
        ...state,
        options: updatedOptions,
        selected: updatedSelections,
      };
    }

    default:
      break;
  }
};
