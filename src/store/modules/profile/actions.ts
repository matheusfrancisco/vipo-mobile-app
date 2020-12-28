import { action } from 'typesafe-actions'
import { ProfileTypes } from './types'
import { AnyAction } from 'redux'

export const getProfileInformationsRequest = (profileInformation: AnyAction) => {
  action(ProfileTypes.GET_PROFILE_REQUEST, { profileInformation })
}
export const getProfileSucess = (profileInformation: AnyAction) => {
  action(ProfileTypes.GET_PROFILE_INFORMATION, { profileInformation })
}
