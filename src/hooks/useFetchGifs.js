import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagesGif = async () => {
      const gifs = await getGifs(category);
      setGifs(gifs);
      setIsLoading(false)
    };
  
    //* useEffect : Es un hook que recibe 2 parametros (callback, dependencias)
    //* Este hook dispara un efecto que esta dentro de su callback, este efecto
    //* se ejecuta segun las dependencias que recibe.
    useEffect(() => {
      //* Dispara la funcion getGifs
      getImagesGif();
    }, []); //*Las dependencias son los estados que van a cambiar disparando un evento
    //* Si no se tiene dependencias es recomendable usar un array vacio

    return {
        gifs,
        isLoading
    }
}

 