import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import { Helmet } from "react-helmet";
import countriesApi from '../api/api';

export const Countrie = () => {
  const {id} = useParams();
  const [dados, setDados] = useState(null);

  useEffect(()=>{
    const getCountrie = async (url)=>{
      const response = await countriesApi.get(url);
      const jbody = await response.data;
      setDados(jbody);
      console.log(jbody)
    }
    getCountrie(`/name/${id}?fullText=true`)
  }, [id])

  if(dados === null) return null;
  return (
    <section className="countrie fadeLeft">
      <Helmet>
        <title>Countrie {dados[0].name.common}</title>
      </Helmet>

        <Link to="/">
          <BiArrowBack/>  
          Back
        </Link>

        <main className="details-countrie">
          <img src={dados[0].flags.png} alt={dados[0].flags.alt} />
          <div>
            <h1>{dados[0].name.common}</h1>
            <p>
              <span>Capital: </span>
              {dados[0].capital[0]}
            </p>
            <p>
              <span>Region: </span> 
              {dados[0].region}
            </p>
            <p>
              <span>Population: </span>
              {dados[0].population}
            </p>

            <div className="border-countrie">
              <h3>Borders:</h3> 
              <div className="border">
                {
                  dados[0].borders ?
                  dados[0].borders.map((e,index) =>(
                    <span key={index}>{e}</span>
                  ))
                  : <span>No neighboring country</span>
                }
              </div>
            </div>
          </div>
        </main>
    </section>
  )
}
