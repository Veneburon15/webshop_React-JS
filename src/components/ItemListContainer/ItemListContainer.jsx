import React from 'react'
import { useState, useEffect } from 'react';
import { getProductos, getProductoPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductoPorCategoria : getProductos;
        funcion(idCategoria)
            .then(res => setProductos(res))
    }, [idCategoria])

    return (
        <main>
            <h2 className='text-center m-5'> {greeting} </h2>
            <ItemList productos={productos}/>
        </main>
    )
}

export default ItemListContainer