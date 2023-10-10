export interface IPaymentMethods {
    id: number;
    name: string;
}

export interface ICardInformations {
    pan: string;
    cvc: number;
    expirationDate: string;
}