import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //¿Real mente necesitamos implementar esta función este aqui ?
  /*const getGifs()... NO*/
  const {gifs, isLoading} =  useFetchGifs(category)
  
 

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <p>Cargando...</p>
         }
        {
          gifs.map((gif) => (
            <GifItem 
            key={gif.id} 
            {...gif} />
          ))
        }
        
      </div>
    </>
  );
};
