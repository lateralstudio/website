import React from "react";
import View from "./View.js";

const Team = (props) => {
    const members = [{
        name: "Guillaume Zufferey",
        description: "Owner. Crafts learning platforms, bringing together leading-edge web technologies.",
    }, {
        name: "Manfred Künzel",
        description: "Consultant. Explores educational environments and creates generic solutions.",
    }, {
        name: "Nora Leben",
        description: "Consultant. Improves the usability and quality of our Learning environments.",
    }, {
        name: "Basile Bruneau",
        description: "Web development.",
    }, {
        name: "Kévin Brou Boni",
        description: "Web development.",
    }];
    return (
        <View
            viewId="team"
        >
            <section
                className="hero is-fullheight"
                style={{
                    backgroundColor: "#5fa55f",
                    paddingTop: "5rem",
                }}
            >
                <div className="hero-body">
                    <div
                        className="container"
                    >
                        {members.map((member) => {
                            return (
                                <div
                                    key={member.name}
                                    style={{marginBottom:"10px"}}
                                >
                                    <div
                                        style={{
                                            color:"white",
                                            fontSize: "1.5rem"
                                        }}
                                    >
                                        {member.name}
                                    </div>
                                    <div
                                        style={{
                                            color:"black",
                                            fontSize: "1rem"
                                        }}
                                    >
                                        {member.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </View>
    )
}

export default Team;
