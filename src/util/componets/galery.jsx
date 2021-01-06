import React from "react"
import "../bootstrap/scss/bootstrap.scss"
import "../style.css"
import img1 from "../../images/coach1.jpg"
import img2 from "../../images/coach2.jpg"
import img3 from "../../images/equipos1.jpg"
import img4 from "../../images/equipos2.jpg"
import img5 from "../../images/entrenamiento1.jpg"
import img6 from "../../images/entrenamiento2.jpg"

const images = [img1, img2, img3, img4, img5, img6]

export default function galery(){

    return (
        <GaleryComponent images={images}/>
    )
}

function GaleryComponent(props){
    const images = props.images;
    return (
        <div className="container-fluid mt-5 text-center bg-dark ">
            <div className="row mt-5">
                <div className="col mt-5">
                    <h3 className="text-light">Galeria de nuesto gimnasio</h3>
                </div>
            </div>
            <div className="row mt-4">
                {
                    images.map((image, index) =>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img key={index} className="img-fluid" src={image} alt=""/>
                    </div>
                    )
                }
            </div>
        </div>
    );
}
