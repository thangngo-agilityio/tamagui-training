import { useState } from 'react';

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);

  // Return an object containing a set of props and the current focus state.
  // onFocus: sets isFocused to true when the element receives focus.
  // onBlur: sets isFocused to false when the element loses focus.
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    // current state of isFocused so it can be used by the component
    isFocused,
  };
};
