import { useState } from 'react'

function Assassin({index}) {
    const [np, setNP] = useState(0)
    const imageClick = () => {
        setNP(np + 1);
        if(np > 4)
        {
            setNP(0);
        }
    }
    return (
        <figure>
        <img 
        className={`servant ${np > 0 ? 'owned' : ''}`} 
        src={process.env.PUBLIC_URL+ `images/assassin/${index+1}.png`} 
        onClick = {imageClick}>
        </img>
        {
            np > 0 ? <figcaption>NP {np}</figcaption> : ''
        }
        </figure>
    )
}

export default Assassin
