import { ProfileState } from "./types";

const initialProfileState = {
  name: 'Matheus Francisco',
  address: 'Sao Francisco SP',
  email: 'm@gmail.com',
};

const reducer = (state = initialProfileState, action: any) => {
  switch (action.type) {
    case ProfileState.GET_PROFILE_INFORMATION: {
      const user = action.payload

      return {...state, 
        name: user.name,
        // address: user.address,
        email: user.email
      }
      
    }
    default: {
      return state;
    }
  }
};

export default reducer;