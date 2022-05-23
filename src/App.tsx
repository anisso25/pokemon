import React, { FunctionComponent, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
    const [pokemons] = useState<Pokemon[]>(POKEMONS);

    return (
        <div>
            <h1 className='centre'>POKEDEX</h1>
                <div className='container'>
                    <div className='row'>
                        {pokemons.map(({id, name, hp, cp, types, picture, created}) =>(
                            <div className='col s6 m4' key={id}>
                                <div className='card horizontal'>
                                    <div className='card-image'>
                                        <img src={picture} alt={name}/>
                                    </div>
                                    <div className='card-stacked'>
                                        <div className='card-content'>
                                            <p><strong>{name}</strong></p>
{/*                                             <p>{hp}</p>
                                            <p>{cp}</p>
                                            <p>{types}</p> */}
                                            <p><small>{created.toString()}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default App;

                            {/*{pokemons.map(({id, name, picture, created}) => (
                            <div className='col s6 m4' key={id}>
                                <div className='card horizontal'>
                                    <div className='' >
                                        <img src={picture} />
                                    )} */}