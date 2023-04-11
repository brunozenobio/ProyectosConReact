import React from "react"
import {useState} from 'react'


export function Target() {
    const [mode,setMode] = useState(false)
    const setclassMode = mode ? 'darkMode' : 'lightMode';
    const invSetclassMode = mode ? 'lightMode' : 'darkMode';
    const handleClick=()=>{
        setMode(!mode)
    }
    return (
        <article className={`fc-card${setclassMode}`}>
            <button className={`butMode${setclassMode}` } onClick={handleClick} >
                <span className={setclassMode}>{setclassMode}</span>
                <span className="changeMode">{invSetclassMode}</span>
            </button>
        <header className={`fc-card-press ${setclassMode}`} >
            
            <img className={`fc-card-press-img ${setclassMode}`} src={'https://scontent.faep27-1.fna.fbcdn.net/v/t39.30808-6/238546428_4745718358795108_2660809755240195104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEOvp_2OPLqZuAUteHLXX0egqscs1D8xyKCqxyzUPzHIgGtrDPbq9515LX1wXq9Xv_mo5nA7z3Sxy9xP4n-_Vzk&_nc_ohc=c6u0hfaG3ZAAX_C8kTV&_nc_ht=scontent.faep27-1.fna&oh=00_AfA1hLKDIZWPbHhXQBNAvXqko064pWyuDvrsU4TnJcDVOQ&oe=643817D8'} alt="Bruno Zenobio" />
            <div className={`fc-card-press-user ${setclassMode}`}>
                <strong>Bruno Zenobio</strong>
                <span>bruno.zenobio</span>
            </div>
        </header>
        <aside className={`fc-card-press-button ${setclassMode}`}>
            <button>
                <span>Seguir</span>
            </button>
        </aside>
    </article>
    )
}

