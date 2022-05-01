export const toggleFavorites = (id: number) => {

    console.log("toggleFavorites llamado")

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

}

export const existInFavorites = (id: number) => {

    if (typeof window === 'undefined') return false;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)

}