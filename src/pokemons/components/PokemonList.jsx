import { PokemonCard } from "./PokemonCard"

export const PokemonList = ({ pokemons }) => {

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                pokemons.map( ({ id, name, sprites, stats, types }) => (
                    <PokemonCard
                        key = { id }
                        id = { id }
                        name = { name }
                        sprites = { sprites }
                        stats = { stats }
                        types = { types }
                    />
                ))
            }
        </div>
    )
}
