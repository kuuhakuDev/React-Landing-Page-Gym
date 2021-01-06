import React from "react"
import "../bootstrap/scss/bootstrap.scss"
import img1 from "../../images/coach1.jpg"
import img2 from "../../images/coach2.jpg"
import "../style.css"
import ImagesContainer from "./imagesContainer"

const info = {
    reverse: false  ,
    images: [img1, img2],
    title: "Los mejores entrenadores altamente capasitados.",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?"
    ]
}

export default function coach(){
    return(
        <ImagesContainer content={info}/>
    )
}