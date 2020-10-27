export interface IBooking {
    id?: string,
    booking_date_start: Date,
    booking_date_end: Date,
    experience_id: string,
    comments: string,
    user_id?: string,
}