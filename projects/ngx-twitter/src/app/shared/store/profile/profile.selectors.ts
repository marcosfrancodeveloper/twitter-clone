import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProfileState } from "./profile.reducer";

const getProfilesFeatureState = createFeatureSelector<IProfileState>('profiles');
export const getProfiles = createSelector(getProfilesFeatureState, (state: IProfileState) => state.profiles);
export const getProfile = createSelector(getProfilesFeatureState, (state: IProfileState) => state.profile);
