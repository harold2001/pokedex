import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "../styleSheets/PokemonCard.css";
import PokemonSpinner from "../components/PokemonSpinner"

const ContainerSuperior = ({ children, colNumber }) => {
  return (
    <div className={`p-2 col-${colNumber}`}>
      <div className="border border-2 col-12 d-flex justify-content-center align-items-center" style={{ minHeight: "100%" }}>
        {children}
      </div>
    </div>
  );
}

export default function PokemonCard() {
  const [datos, setDatos] = useState([]);
  const [image, setImage] = useState([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  const getData = () => {
    try {
      setLoading(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
          const datosPokemon = res.data;
          const urlImagen = res.data.sprites.front_default;
          const rasgos = res.data.stats;
          setLoading(false);
          setDatos(datosPokemon);
          setImage(urlImagen);
          setFeatures(rasgos);
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getData(), []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div>
          <PokemonSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="col-12 text-center p-3 col-md-9 col-lg-7 col-xl-7 col-xxl-6">
      <div className="d-flex">
        <ContainerSuperior colNumber={"8"}>
          <p className="m-0 fs-1 fw-bold text-capitalize">{datos.name}</p>
        </ContainerSuperior>
        <ContainerSuperior colNumber={"4"}>
          <img src={image} alt={datos.name} />
        </ContainerSuperior>
      </div>

      <div className="p-0 m-2 border border-2" id="containerTable">
        <table style={{ width: "100%" }}>
          <tbody>
            {features.map((obj) => {
              return (
                <tr key={obj.stat.name}>
                  <td className="text-uppercase fw-bold col-7">
                    {obj.stat.name}
                  </td>
                  <td className="text-uppercase fw-bold col-5" >
                    {obj.base_stat}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-3 col-12 text-center">
        <Link className="btn text-white fw-semibold" to="/" style={{ backgroundColor: "#ef5450" }}>
          Back
        </Link>
      </div>
    </div>
  )
}
