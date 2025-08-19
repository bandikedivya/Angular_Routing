import { Injectable } from "@angular/core";


// Method-2 Registering the service.
@Injectable({providedIn: "root"})
export class OrderService{
    OrderDetails(){
        return [ 
            {
                Id: 1075,
                ProductName: 'Teamspirit Men Sweatshirt',
                OrderDate: '25-01-2025',
                PaymentMode: 'Prepaid',
            },
             {
                Id: 1065,
                ProductName: 'Denim Mens Jeans',
                OrderDate: '15-10-2025',
                PaymentMode: 'Postpaid',
            },
             {
                Id: 7884,
                ProductName: 'Micheal Kors Women Watch',
                OrderDate: '30-01-2025',
                PaymentMode: 'Prepaid',
            },
        ]
    }
}