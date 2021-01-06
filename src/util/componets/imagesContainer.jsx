import React from "react"
import "../bootstrap/scss/bootstrap.scss"
import "../style.css"


export default function equipos(props){
    const content = props.content;
    return (
        <ImagesContainer reverse={content.reverse} images={content.images} title={content.title} text={content.text}/>
    );
}

function ImagesContainer(props){
    return (
        <div className="container-fluid container-md mt-5">
            <div className="row">
                <ContainerImage reverse={props.reverse} images={props.images}/>
                <div className="col-12 col-lg-6">
                    <h3 className="text-center mt-4">{props.title}</h3>
                    {
                        props.text.map((txt, index) =>
                            <p key={index} className="text-content">{txt}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

function ContainerImage(props){
    var images = props.images
    if(props.reverse){
        return (
            <div className="col-12 col-lg-6 order-lg-5">
                <ImagesView images={images}/>
            </div>
        )
    }else{
        return (
            <div className="col-12 col-lg-6">
                <ImagesView images={images}/>
            </div>
        )
    }
}

function ImagesView(props) {
    var images = props.images;
    return(
        <div>
            <img className="image-back" src={images[0]} alt=""/>
            <img className="image-front" src={images[1]} alt=""/>
        </div>
    )
}