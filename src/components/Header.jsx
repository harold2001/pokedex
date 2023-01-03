import React, { Fragment } from 'react';
import PokemonSpinner from "../components/PokemonSpinner";
import "../styleSheets/Header.css"
import '../App.css';
import { Link } from 'react-router-dom';


export default function Header() {
   return (
      <div className="p-3" id="divHeader">
         <Link to="/">
            <img
               className="p-0"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
               alt="pokemón!"
               width={200}
            />
            <div>
               {/* <PokemonSpinner /> */}
            </div>
         </Link>
      </div>
   )
}
