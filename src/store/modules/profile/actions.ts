import { action } from 'typesafe-actions'
import { ProfileTypes } from './types'

export const getProfileInformationsRequest = (profileInformation: any) => ({
  type: action(ProfileTypes.GET_PROFILE_REQUEST, { profileInformation })
})
export const getProfileSucess = (profileInformation: any) => ({
  type: action(ProfileTypes.GET_PROFILE_INFORMATION, { profileInformation })
})
