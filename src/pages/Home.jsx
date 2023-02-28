import React, { useEffect, useState } from 'react'
import {
  Link

} from "react-router-dom";
import { Helmet } from "react-helmet";
import countriesApi from '../api/api';
import { Loading } from '../components/Loading';
export const Home = () => {
  const [input, setInput] = useState("");
  const [dados, setDados] = useState(null);
  const [endpoint, setEndpoint] = useState("/all");

  useEffect(()=>{
    if(input !== ""){
      const getName = async ()=>{
        try{
          const responseName = await countriesApi.get(`/name/${input}`);
          const json = await responseName.data;
          setDados(json)
        }
        catch (erro){
          console.log(erro);
        }
      }
      getName();

    }else{
      const getAll = async ()=>{
        const response = await countriesApi.get(endpoint);
        const jbody = await response.data;
        setDados(jbody)
      }
      setTimeout(() => {
          getAll();
      }, 2000);
    }
  }, [endpoint, input])

  if(dados === null) return <Loading/>;
  return (
    <section className="c fadeLeft">
      <Helmet>
        <title>Countries Search</title>
        <meta name="description" content="Countries Search..." />
      </Helmet>

      <form>
          <input 
            type="text"
            className="search"
            title="search countries"
            placeholder="Search countries..."
            value={input}
            onChange={({target})=> setInput(target.value)}
            required 
          />

          <select 
            value={endpoint} 
            onChange={({target}) => setEndpoint(`${target.value}`)} 
            className="filter">
            <option value="/all" disabled>
              Filter by region
            </option>

            <option value="/all">
              All
            </option>
            
            <option value="/region/europe">
              Europe
            </option>
            <option value="/region/africa">
              Africa
            </option>
            <option value="/region/americas">
              Americas
            </option>
            <option value="/region/asia">
              Asia
            </option>
            <option value="/region/oceania">
              Oceania
            </option>
          </select>
      </form>

      <div className="countries">
      {
        dados.map((e, index)=>(
          <Link to={`countrie/${e.name.common}`} className="box" key={index}>
            <img src={e.flags.png} alt={e.flags.alt} />
            <h3>{e.name.common}</h3>
            <p>Population: {e.population}</p>
            <p>Region: {e.region}</p>
            <p>Capital: {e.capital}</p>
          </Link>
        ))
      }
      </div>
    </section>
  )
}
