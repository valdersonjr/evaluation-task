"use client";
import { useState } from 'react';
import { PaymentForm } from './components';
import { IPaymentForm } from './interfaces';
import { addCardApiService } from './service';

const paymentFormMock:IPaymentForm = {
  cardInformations: { 
    pan: '',
    cvc: 0,
    expirationDate: '',
   },
  clientUser: {
    firstName: '',
    lastName: '',
  }
}

export default function Home() {  

  const [paymentForm, setPaymentForm] = useState<IPaymentForm>(paymentFormMock);

  const handleFormSubmit = (data:IPaymentForm) => {
    addCardApiService(data).then((response) => { 
      if(response.status === 201) {
        alert('Card added successfully!');
      } else {
        alert('Error adding card!');
      }
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaymentForm paymentForm={paymentFormMock} handleFormSubmit={handleFormSubmit} />
    </main>
  )
}
