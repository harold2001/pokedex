import "../styleSheets/Pokemon.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Fragment } from 'react';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonSpinner from "./PokemonSpinner";

const Pokemon = ({ pokeapikey, name }) => {
   const [pokemon, setPokemon] = useState();
   const [datos, setDatos] = useState([]);
   const [loading, setLoading] = useState(false);

   const getImgs = () => {
      try {
         setLoading(true);
         axios.get(pokeapikey)
            .then((response) => {
               const pokemonData = response.data;
               setDatos(pokemonData);

               const imgs = response.data.sprites.front_default;
               setPokemon(imgs);
               setLoading(false);
            })
      } catch (error) {
         console.log(error)
      }
   }

   const id = datos.id;
   useEffect(() => getImgs(), [])

   return (
      <Fragment>
         <Link to={`/${id}`}>
            <div className="pokemonCard card d-flex flex-column align-items-center p-1 position-relative">
               {loading ? <PokemonSpinner/> : <img src={pokemon} alt="Pokemon" width={100} />}
               <div className="card-body">
                  <h1>{name}</h1>
               </div>
            </div>
         </Link>
      </Fragment>
   );
}

export default Pokemon;
