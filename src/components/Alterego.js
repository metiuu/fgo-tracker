import { useState, useRef } from 'react'

function Alterego({index}) {
    const ex = useRef();
    const [np, setNP] = useState(0)
    const imageClick = () => {
        setNP(np + 1);
        if(np > 4)
        {
            setNP(0);
        }

        console.log(ex.current)

    }

    return (
        <figure>
        <img 
        className={`servant ${np > 0 ? 'owned' : ''}`} 
        src={process.env.PUBLIC_URL+ `images/alterego/${index+1}.png`}
        onClick = {imageClick}
        ref={ex}
        >            
        </img>
        {
            np > 0 ? <figcaption>NP {np}</figcaption> : ''
        }
        </figure>
    )
}

export default Alterego
