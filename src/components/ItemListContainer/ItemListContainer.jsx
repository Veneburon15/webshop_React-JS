import React from 'react'
import { useState, useEffect } from 'react';
import { getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos()
        .then(productos => setProductos(productos))
        .catch(error => console.log(error))
    },[])




    return (
        <main>
            <h2 className='text-center m-5'> {greeting} </h2>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer