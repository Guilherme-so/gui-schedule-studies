import React from "react"
import './style.scss'

type botaoTypes = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

function Botao({children, type, onClick}: botaoTypes) {
        return (
            <button onClick={onClick} type={type} className="botao">{children}</button>
        ) 
}

export default Botao