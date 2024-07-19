import React from "react"

import "./Feature.css"



export const Feature = (props) => {
    const {
        imagesUrl = "",
        name = "",
        detail = "",
    } = props
    return (
        <div className="container-card">
            <div className="card">
                <div className="card-text">
                    <div className="portada"  style={{backgroundImage: `url(${imagesUrl})`}}>

                    </div>
                    <div className="title-total">
                        <div className="title"><h2>{name}</h2></div>

                        <div className="desc">{detail}
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}


