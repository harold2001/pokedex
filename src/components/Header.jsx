import React, { Fragment } from 'react';
import PokemonSpinner from "../components/PokemonSpinner";
import "../styleSheets/Header.css"
import '../App.css';
import { Link } from 'react-router-dom';


export default function Header() {
   return (
      <div className="col-12 text-center p-3 col-sm-10 col-md-11 col-lg-10 col-xl-12" id="divHeader">
         <Link to="/">
            <img
               className="p-0"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
               alt="pokemón!"
               width={200}
            />
         </Link>
      </div>
   )
}
