import React from "react";
import View from "./View.js";

const Title = (props) => {
    return (
        <View
            viewId="home"
        >
            <section
                className="hero is-fullheight"
                style={{
                    backgroundColor:"black",
                    paddingTop: "5rem",
                }}
            >
                <div
                    className="hero-body"
                    style={{
                        backgroundImage: "url(\"blackboard.jpg\")"
                    }}
                >
                    <div className="container">
                        <h1
                            className="title"
                            style={{
                                fontSize: "3rem",
                                color: "white",
                            }}
                        >
                            Learning environments
                        </h1>
                        <h2
                            className="subtitle"
                            style={{
                                fontSize: "1.5rem",
                                color: "#aaa"
                            }}
                        >
                            Web and mobile apps
                        </h2>
                    </div>
                </div>
            </section>
        </View>
    )
}

export default Title;
