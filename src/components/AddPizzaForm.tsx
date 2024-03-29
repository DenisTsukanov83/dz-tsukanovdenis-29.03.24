import React, { ChangeEvent, FC, useState, FormEvent } from "react";
import Pizza from '../models/Pizza';
import './styles.css';

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '', price: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] =
        useState<{title: string, price: string}>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price} = newPizza;

        if(title && price) {
            addPizza({
                title, price: price, id: Date.now()
            });
            setNewPizza(initState);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" placeholder="Название" onChange={handleChange}/>
            <input name='price' type='text' placeholder="Количество" onChange={handleChange}/>
            <button type="submit">Добавить покупку</button>
        </form>
    )
}


export default AddPizzaForm;

