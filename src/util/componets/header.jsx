import * as React from "react"
import "../bootstrap/scss/bootstrap.scss"
import Back from "../../images/background.jpg"

const divstyle = {
    maxHeight: '40rem',
    height: '40rem',
    overflow: "hidden",
    backgroundImage: 'url('+Back+')',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
}

const text = {
    color: "white",
    fontSize: "2.5rem"
}

const h1style = {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '5rem'
}

export default function Header(){
    return (
        <div style={divstyle} className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
                <div style={{background: "rgba(38, 33, 56,0.7)"}}>
                    <h1 className="text-center" style={h1style}>Healthy living</h1>
                    <p className="text-center" style={text}>Si entrenas duro, no solo serás duro, serás duro de superar.</p>
                </div>
            </div>
        </div>
    )
}