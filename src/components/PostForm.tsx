import { useState, ChangeEvent } from 'react';
import styled from "styled-components";
type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    }

    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert("Preencha os campos");
        }
    }


    const Fieldset = styled.fieldset `
       text-align: center;
      display: flex;
        flex-direction: column;
        align-items: center;

        & legend {
            padding: 2rem;
            font-weight: bold;
        }

        & input {
            margin: 2rem;
        }
        & button {
            margin: 2rem;
        }
        
    `;

    return (
        <Fieldset>
            <legend>Adicionar Novo Post</legend>
            <input
            value={addTitleText}
            onChange={handleAddTitleChange}
            className="block border"
            type="text"
            placeholder="Digite um título"
            />
            <textarea
            className="block border"
            value={addBodyText}
            onChange={handleAddBodyChange}
            ></textarea>
            <button className="block border" onClick={handleAddClick}>Adicionar</button>
        </Fieldset>
    );
}