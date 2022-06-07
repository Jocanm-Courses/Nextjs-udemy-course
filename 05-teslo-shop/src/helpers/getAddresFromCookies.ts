import Cookies from 'js-cookie';
import { AdressFormProps } from '../pages/checkout/address';



export const getAddresFromCookies = (): AdressFormProps => {
    const data = JSON.parse(Cookies.get('address') || "{}") || {};

    console.log(data)

    const {
        name = "",
        lastname = "",
        direction = "",
        direction2 = "",
        postalCode = "",
        country = "",
        city = "",
        phone = ""
    } = data as AdressFormProps;

    return {
        name,
        lastname,
        direction,
        direction2,
        postalCode,
        country,
        city,
        phone
    }
}