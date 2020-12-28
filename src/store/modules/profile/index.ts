import { ProfileTypes } from "./types";

const initialProfileState = {
  name: '',
  address: '',
  email: '',
};

const reducer = (state = initialProfileState, action: any) => {
  switch (action.type) {
    case ProfileTypes.GET_PROFILE_INFORMATION:
      return {...state, ...action.payload}
    default: {
      return state;
    }
  }
};

export default reducer;