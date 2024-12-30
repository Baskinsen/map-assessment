import User from '../assets/user.png'
import Monitor from '../assets/Misc icon.png'

export interface QuoteDetails {
    quoteInformation: {
        title: string;
        rfqNo: string;
        creationDate: string;
        requestor: {
        name: string;
        role: string;
        };
        status: string;
        department: string;
        expectedDeliveryDate: string;
        client: {
        name: string;
        address: string;
        };
    };
    items: {
        id: number;
        image: string;
        name: string;
        variant: string;
        quantity: string;
        price: number;
        amount: number;
        expectedDeliveryDate: string;
    }[];
    totals: {
        subTotal: number;
        total: number;
    };
}

export const quoteDetail:QuoteDetails = {
  quoteInformation: {
    title: "Request for Equipments",
    rfqNo: "RQ #01234",
    creationDate: 'Wed, 12th June 2022, 08:00am',
    requestor: {
      name: "Jane Doe",
      role: "Head Nurse, Paediatrics",
    },
    status: "Awaiting",
    department: "Maternity",
    expectedDeliveryDate: "2024-12-02",
    client: {
      name: "Westend Hospital",
      address: "Clear street",
    },
  },
  items: [
    {
      id: 28373,
      image: Monitor,
      name: "Oxygen concentrator",
      variant: "Blue",
      quantity: "100 pieces",
      price: 200.0,
      amount: 2000.0,
      expectedDeliveryDate: "2024-08-07",
    },
    {
      id: 28373,
      image: Monitor,
      name: "Mechanical ventilator",
      variant: "NIL",
      quantity: "45 Kg",
      price: 350.0,
      amount: 2500.0,
      expectedDeliveryDate: "2024-08-07",
    },
    {
      id: 28373,
      image: Monitor,
      name: "Patient Monitor",
      variant: "Blue",
      quantity: "30 Units",
      price: 300.0,
      amount: 1500.0,
      expectedDeliveryDate: "2024-08-07",
    },
    {
      id: 28373,
      image: Monitor,
      name: "Mechanical ventilator",
      variant: "Blue",
      quantity: "35 Units",
      price: 200.0,
      amount: 1500.0,
      expectedDeliveryDate: "2024-08-07",
    },
  ],
  totals: {
    subTotal: 8000.0,
    total: 8750.0,
  },
};


export const user = {
    name: "JMark Benson",
    email: 'markbenson@coremed.com',
    avatar: User
}