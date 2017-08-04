import React from "react";
import View from "./View.js";

const Product = (props) => {
    return (
        <View
            viewId="product"
        >
            <section
                className="hero is-fullheight"
                style={{
                    backgroundColor: "#efefef",
                    paddingTop: "5rem",
                }}
            >
                <div
                    className="hero-body"
                >
                    <div className="container">
                        <div>
                            <img
                                src="isyflow.png"
                                style={{
                                    maxWidth: "200px",
                                }}
                            />
                        </div>
                        <div>
                            Isyflow is an easy to use CLOM (course, learning and objective managementsystem) for in house training, schools, vocational and higher education. Usable for On-Site and On-Line programms. Supports rapid development of training and learning units, Videoannotation, social interaction over learning-ressources and tracking of developed competences.
                        </div>
                    </div>
                </div>
            </section>
        </View>

    )
}

export default Product;
