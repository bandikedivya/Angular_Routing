import { Injectable } from "@angular/core";

// Method-2 Registering the service.
@Injectable({providedIn: "root"})
export class OrderDetailsService
{   
    OrderDetails(){
        return [ 
            {
                Id: 1075,
                ProductName: 'Teamspirit Men Sweatshirt',
                OrderDate: '25-01-2025',
                PaymentMode: 'Prepaid',
                ContactNo: 9876543210,
                Address: 'Divya Drushya pg for ladies 1st Main Road, Teachers colony, 1st Main Road, teachers colony, koramangala Bengaluru, KARNATAKA 560034 India',
                
            },
             {
                Id: 1065,
                ProductName: 'Denim Mens Jeans',
                OrderDate: '15-10-2025',
                PaymentMode: 'Postpaid',
                ContactNo: 7988463210,
                Address : 'Divya Drushya pg for ladies 1st Main Road, Teachers colony, 1st Main Road, teachers colony, koramangala Bengaluru, KARNATAKA 560034 India',
            },
             {
                Id: 7884,
                ProductName: 'Micheal Kors Women Watch',
                OrderDate: '30-01-2025',
                PaymentMode: 'Prepaid',
                ContactNo: 9645605390,
                Address : 'Drushya pg for ladies 1st Main Road,  India',
            },
        ]
    }

}

