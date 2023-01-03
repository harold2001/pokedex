import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Pokemon from './Pokemon';
import PokemonSpinner from './PokemonSpinner';

export default function Pokemones() {
   const [datos, setDatos] = useState([]);

   const getData = () => {
      try {
         axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(res => {
               const allData = res.data.results
               setDatos(allData);
            })
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => getData(), []);

   return (
      <div>
         <div className="d-flex flex-wrap gap-3 justify-content-center p-4">
            {
               datos.map(pokemon => {
                  let newId = uuid()
                  return (
                     <Pokemon key={newId} name={pokemon.name} pokeapikey={pokemon.url} />
                  )
               })
            }
         </div>
      </div>
   )
}
