import { action } from 'typesafe-actions'
import { ProfileState } from './types'

export const getProfileInformationsRequest = (profileInformation: any) => ({
  type: action(ProfileState.GET_PROFILE_REQUEST, { profileInformation })
})
export const getProfileSucess = (profileInformation: any) => ({
  type: action(ProfileState.GET_PROFILE_INFORMATION, { profileInformation })
})
