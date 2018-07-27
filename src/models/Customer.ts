declare namespace VOO.Mobile.App.Models {
    class Identifier implements Domain.Views.Identifier {
        system: string;
        value: any;
    }

    class ProductAvailability implements Domain.Views.Customer.ProductAvailability {
        hdTelevision: boolean;
        idTelevision: boolean;
        internet: boolean;
        internetLevel: number;
        newConnexionRequired: boolean;
        telephone: boolean;
        television: boolean;
    }

    class ProductPresence implements Domain.Core.Views.Customer.Portfolio.ProductPresence {
        internet: boolean;
        telephone: boolean;
        television: boolean;
    }

    class Address implements Domain.Views.Customer.Address {
        addressType: Domain.Views.Customer.AddressType;
        boxNumber: string;
        city: string;
        cityIds: VOO.Mobile.App.Models.Identifier[];
        countryCode: string;
        frequencyPlan: string;
        houseNumber: string;
        id: number;
        networkId: string;
        newConnectionRequired: boolean;
        packFriendlyName: string;
        packId: string;
        pointOfDelivery: string;
        productAvailability: VOO.Mobile.App.Models.ProductAvailability;
        productPresence: VOO.Mobile.App.Models.ProductPresence;
        street: string;
        streetId: number;
        vooStreetId: number;
        zipCode: string;
        relations: System.Collections.Generic.KeyValuePair<string, Domain.Core.Hal.Link>[];
    }

    class Customer implements VOO.Domain.Views.Customer.Customer {
        addresses: VOO.Mobile.App.Models.Address[];
        birthdate: Date;
        customerId: string;
        emailAddress: string;
        firstname: string;
        gsmNumber: string;
        invoiceDeliveryType: Domain.Views.Billing.Account.invoiceDeliveryType;
        isEligibleForEBilling: boolean;
        isEligibleForFixDomiciliation: boolean;
        isSMSNotificationRequired: boolean;
        language: string;
        lastname: string;
        login: string;
        telephoneNumber: string;
        title: string;
        relations: System.Collections.Generic.KeyValuePair<string, Domain.Core.Hal.Link>[];

    }
}