import React from "react"
import "../bootstrap/scss/bootstrap.scss"
import Eq1 from "../../images/equipos1.jpg"
import Eq2 from "../../images/equipos2.jpg"
import "../style.css"
import ImagesContainer from "./imagesContainer"

const info = {
    reverse: false,
    images: [Eq1, Eq2],
    title: "Los mejores equipos del pais.",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?"
    ]
}

export default function equipo(){
    return(
        <ImagesContainer content={info}/>
    )
}