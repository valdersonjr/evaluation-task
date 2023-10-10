import { ICardInformations } from './';
import { IClientUser } from './';

export interface IPaymentForm {
    cardInformations: ICardInformations;
    clientUser: IClientUser;
}