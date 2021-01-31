import { ProfileTypes } from "./types";

const initialProfileState = {
  name: 'Matheus Francisco',
  address: 'Sao Francisco SP',
  email: 'm@gmail.com',
};

const reducer = (state = initialProfileState, action: any) => {
  switch (action.type) {
    case ProfileTypes.GET_PROFILE_INFORMATION: {
      const { profile } = action.payload.profileInformation
      return {...state, 
        name: profile.name,
        // address: user.address,
        email: profile.email
      }
      
    }
    default: {
      return state;
    }
  }
};

export default reducer;