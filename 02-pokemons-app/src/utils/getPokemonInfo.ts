import { pokeApi } from "../apis"
import { PokemonDetailProps } from "../types/interfaces"

export const getPokemonInfo = async (pokemon: string) => {

    const { data: { id, name, sprites } } = await pokeApi.get<PokemonDetailProps>(`/pokemon/${pokemon}`)

    return {
        id, name, sprites
    }


}