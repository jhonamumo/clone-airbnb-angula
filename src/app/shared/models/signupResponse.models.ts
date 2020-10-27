import { ISignup } from './signup.models';

export interface ISignupResponse {
    status: number,
    response: ISignup,
}