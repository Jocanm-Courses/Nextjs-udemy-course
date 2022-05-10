
import { formatDistanceToNow } from 'date-fns'
import localeEs from 'date-fns/locale/es'

export const getTimeSinceNow = (date: string): string => {

    const dateObject = new Date(date)

    const time = formatDistanceToNow(dateObject, {
        includeSeconds: true,
        locale: localeEs
    })

    return `Hace ${time}`

}