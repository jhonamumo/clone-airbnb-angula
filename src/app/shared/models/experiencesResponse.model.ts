import { IExperience } from './experience.models';

export interface IExperiencesResponse {
    experiences: Array<IExperience>,
    experience: IExperience
}