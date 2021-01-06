import React from "react"
import "../bootstrap/scss/bootstrap.scss"
import img2 from "../../images/entrenamiento1.jpg"
import img1 from "../../images/entrenamiento2.jpg"
import "../style.css"
import ImagesContainer from "./imagesContainer"

const info = {
    reverse: true,
    images: [img1, img2],
    title: "Las mejores rutinas multiarticulares.",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, at incidunt nemo omnis sit animi commodi vel fuga ipsam temporibus dolore ad, cum, molestias recusandae tempore praesentium pariatur? Aspernatur, facere?"
    ]
}

export default function rutinas(){
    return(
        <ImagesContainer content={info}/>
    )
}