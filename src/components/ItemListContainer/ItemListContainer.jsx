import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, where, query, collection} from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map (doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer