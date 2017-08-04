import React from "react";
import View from "./View.js";

const Contact = (props) => {
    return (
        <View
            viewId="contact"
        >
            <section
                className="hero is-fullheight"
                style={{
                    backgroundColor: "black",
                    paddingTop: "5rem",
                }}
            >
                <div
                    className="hero-body"
                    style={{color:"#eee"}}
                >
                    <div className="container">
                        <div
                            style={{marginBottom:"20px"}}
                        >
                            <div>Lateral Studio Sàrl</div>
                            <div>Chemin de Bérée 22B</div>
                            <div>1010 Lausanne</div>
                        </div>
                        <div>
                            <div>
                                <a href="mailto:guillaume@lateralstudio.ch">
                                    guillaume@lateralstudio.ch
                                </a>
                            </div>
                            <div>
                                +41 (0) 76 516 86 71
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </View>
    )
}

export default Contact;
