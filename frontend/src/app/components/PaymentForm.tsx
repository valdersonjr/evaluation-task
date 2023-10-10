'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { IPaymentForm, IPaymentMethods } from "../interfaces";
import { isAmericanExpress, isCreditCardExpired } from "../utils";


const paymentMethods:IPaymentMethods[] = [
{
    id: 0,
    name: "Card",
}];

interface PaymentFormProps {
    paymentForm: IPaymentForm;
    handleFormSubmit: (data:IPaymentForm) => void;
}


export const PaymentForm = ( { paymentForm, handleFormSubmit }:PaymentFormProps ) => {
    const { register, handleSubmit, formState: { errors }} = useForm<IPaymentForm>();
    const onSubmit: SubmitHandler<IPaymentForm> = (data) => handleFormSubmit(data);

    const validCvcLength = isAmericanExpress(paymentForm.cardInformations.pan) ? 4 : 3;
    
    return(
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label>Payment Method</label>
            <select name="paymentMethods" id="paymentMethods">
                {paymentMethods.map((paymentMethod:IPaymentMethods) => (
                    <option key={paymentMethod.id} value={paymentMethod.name}>{paymentMethod.name}</option>
                ))}
            </select>

            <label>First Name</label>
            <input placeholder="Valderson" type="text" {...register("clientUser.firstName", { required: true, minLength: 3 })} />
            {errors.clientUser?.firstName?.type === 'required' && <span className="custom-error-text">This field is required</span>}
            {errors.clientUser?.firstName?.type === 'minLength' && <span className="custom-error-text">Minimum length is 3 characters</span>}

            <label>Last Name</label>
            <input placeholder="Junior" type="text" {...register("clientUser.lastName", { required: true, minLength: 3 })} />
            {errors.clientUser?.lastName?.type === 'required' && <span className="custom-error-text">This field is required</span>}
            {errors.clientUser?.lastName?.type === 'minLength' && <span className="custom-error-text">Minimum length is 3 characters</span>}

            <label>Card Number</label>
            <input placeholder="0000000000000000" type="text" {...register("cardInformations.pan", { required: true, pattern: /^\d{16,19}$/ })} />
            {errors.cardInformations?.pan?.type === 'required' && <span className="custom-error-text" >This field is required</span>}
            {errors.cardInformations?.pan?.type === 'pattern' && <span className="custom-error-text" >Invalid PAN format (should be 16 to 19 digits)</span>}

            <label>Expiration Date</label>
            <input placeholder="MM/YY" type="text" {...register("cardInformations.expirationDate", { pattern: /^(0[1-9]|1[0-2])\/(2[2-9]|3[0-9])$/, validate: (value) => !isCreditCardExpired(value)  })} />
            {errors.cardInformations?.expirationDate?.type === 'pattern' && ( <span className="custom-error-text" >Invalid expiration date format (should be MM/YY)</span> )}
            {errors.cardInformations?.expirationDate?.type === 'validate' && ( <span className="custom-error-text" >Credit card is expired</span> )}

            <label>Security Code</label>
            <input placeholder="123 or 1234" type="number" {...register("cardInformations.cvc", { required: true, minLength: validCvcLength, maxLength: validCvcLength })} />
            {errors.cardInformations?.cvc?.type === 'required' && ( <span className="custom-error-text" >This field is required</span> )}
            {(errors.cardInformations?.cvc?.type === 'minLength' || errors.cardInformations?.cvc?.type === 'maxLength') && ( <span className="custom-error-text" >Invalid CVC length. Should be {validCvcLength} digits</span> )}

            <input className="border-black border-solid border-2 border-rounded cursor-pointer" type="submit" />
        </form>
    )
}

export default PaymentForm;