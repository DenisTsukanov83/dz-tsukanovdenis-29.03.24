import React, {FC, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deletePizza(pizza.id);
    }

    return(
        <div className="pizza">
            <div className="title">{pizza.title}</div>
            <span>{pizza.price}</span>
            

            {edit
                ? <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                    />
                : null}

            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default SinglePizza;