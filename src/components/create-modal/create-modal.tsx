import { useEffect, useState } from "react";
import { useUserDataMutate } from "../../hooks/useUserDataMutate";

import "./modal.css";
import { UserData } from "../../interface/UserData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps{
    closeModal(): void;
}

const Input = ({label, value, updateValue}: InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>        
    )
}

export function CreateModal( {closeModal}:ModalProps) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {mutate, isSuccess} = useUserDataMutate();

    const submit = () => {
        const userData: UserData = {
            name, 
            password
        }

        mutate(userData);
    }

    useEffect(() => {
        if(!isSuccess) return
        
        closeModal();
    }, [isSuccess])

    
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Tela de Login</h2>
                <form className="input-conteiner">
                    <Input label="Nome" value={name} updateValue={setName}/>
                    <Input label="Password" value={password} updateValue={setPassword}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isSuccess ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}