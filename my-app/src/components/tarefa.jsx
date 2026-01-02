import { useState } from "react";
import './tarefa.css';

function Tarefa({texto, onRemove}) {
     

    const [concluida, setConcluida] = useState(false);

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }
    
    return(
        <li>
        <input 
            type="checkbox"
            checked={concluida}
            onChange={alternarConcluida} 
        /> 

          <span className={concluida ? "concluida" : ""}>
            {texto} 
            </span> 
            <button className="remover" onClick={onRemove}>Remover</button> </li>
    );

   
}

export default Tarefa;