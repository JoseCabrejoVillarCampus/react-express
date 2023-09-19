import React, {useState} from "react";

export default function Header(){
    const [men, getMen] = useState('');
    const send = async()=>{
        let data = await(await fetch("http://localhost:5138/user")).json();
        getMen(data);
    }
    send();
    return(
        <div>
            {men.message}
        </div>
    )
}