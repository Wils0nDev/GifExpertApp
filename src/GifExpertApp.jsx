import { useState } from "react";
import { AddCategory,GifGrid } from "./components/";




export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch']);

    const [existCategory, setExistCategory] = useState(false)
    const onAddCategory = (NewCategory) => {
       if(categories.includes(NewCategory)) {
        setExistCategory(true)
        return true;
       };
        setExistCategory(false)
        setCategories([NewCategory,...categories])
    }
    return (
       <>
       {/*  titulo */}
       <h1>GifExpertApp</h1> 
       {/* Input */}
       <AddCategory  
    //    setCategories={setCategories}
          onNewCategory={onAddCategory}
       />
       {/* Listado de Gifs */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {/** no se debería usar los indices como llaves */}
        {categories.map((category)=>(
            <GifGrid 
            key={category}
            category={category}
            />
        ))}
       <p style={existCategory ? {visibility: 'visible'} : {visibility: 'hidden'} } >Ya existe la categoria</p>
            {/* Gif Item */}
       </>
    );
}

