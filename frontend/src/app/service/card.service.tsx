import { IPaymentForm } from "../interfaces";

export const addCardApiService = async (card: IPaymentForm) => {

    const response = await fetch('http://localhost:3001/card/add', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(card.cardInformations)
    });
    const data = await response;
    return data;
}