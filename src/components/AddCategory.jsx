import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    //En React 17 : se disparaba un render por cada función ejecutada
    //En React 18 : no se renderiza hasta que se termina de ejecutar todo el hilo de funciones o la funcion principal "onSubmit"
    const onSubmit = (event) =>{
        event.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1 ) return;
        onNewCategory(value)
        //limipio
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            type='text'
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={onInputChange}
             />
        </form>
    );
}

