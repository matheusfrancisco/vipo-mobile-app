
export enum ProfileTypes {
    "GET_PROFILE_INFORMATION" = "@profile/GET_PROFILE_INFORMATION",
    "GET_PROFILE_REQUEST" = "@profile/GET_PROFILE_REQUEST",
}

export interface ProfileState {
    address: string;
    name: string;
    email: string
}