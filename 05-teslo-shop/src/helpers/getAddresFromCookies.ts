import Cookies from 'js-cookie';
import { FormProps } from '../pages/checkout/address';



export const getAddresFromCookies = (): FormProps => {
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
    } = data as FormProps;

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