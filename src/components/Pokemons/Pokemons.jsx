import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Pokemon from './Pokemon';

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
      <div className="col-12 col-sm-11 col-md-11 col-lg-10 col-xl-12">
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
