import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFectchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
      const newImages = await getGifs ( category );
      setImages(newImages);
      setIsLoading(false);
    }
    //Función lo que se quiere disparar y el segundo parámetro en una lista de dependencias(cuando se va disparar) no debe de regresar una promesa
    useEffect( () => {
      getImages();
    }, [] )
    //Si dejo vacías mis dependencias, significa que se va a disparar la primera vez que se crea el componente 
  
    return {
      images,
      isLoading
  }
}
