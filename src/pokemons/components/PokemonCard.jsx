import { Link } from 'react-router-dom';

export const PokemonCard = ({ 
    id,
    name,
    sprites,
    stats,
    types
}) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ sprites.front_default } className="card-img" alt={ name } />
                    </div>

                    <div className="col-8">

                        <div className="card-body" >

                            <h5 className="card-title">Name:</h5>
                            <p className="card-text">
                                { name }
                            </p>
                            <h5 className="card-title">Stats: </h5>
                            {
                                stats.map( ({ stat, base_stat }) => (
                                    <p className="card-text" key = { stat.name }>
                                        { stat.name }: { base_stat }
                                    </p>
                                ))   
                            }
                            <h5 className="card-title">Types: </h5>
                            {
                                types.map( ({ slot, type }) => (
                                    <p className="card-text" key = { slot }>
                                        { type.name }
                                    </p>
                                ))
                            }

                            <Link to={`/pokemon/${ id }`}>
                                More...
                            </Link>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
