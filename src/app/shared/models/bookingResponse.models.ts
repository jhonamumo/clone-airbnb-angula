import { IBooking } from './booking.models';

export interface IBookingResponse {
    status: number,
    response: IBooking
}