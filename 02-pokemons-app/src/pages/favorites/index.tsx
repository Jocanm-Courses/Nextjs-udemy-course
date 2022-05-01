import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layouts';
import { FavoritesList, NoFavorites } from '../../components/pokemon';
import { pokemons } from '../../utils';

const FavoritesPage = () => {

    const [favoritesPokemons, setFavoritesPokemos] = useState<number[]>([])

    useEffect(() => {
        setFavoritesPokemos(pokemons())
    }, [])

    return (
        <MainLayout
            title="Favoritos"
        >
            {
                favoritesPokemons.length === 0
                    ? <NoFavorites />
                    : <FavoritesList favorites={favoritesPokemons} />
            }
        </MainLayout>
    )
}

export default FavoritesPage