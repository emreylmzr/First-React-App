import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/cards.js";
import Collapse from "./components/collapse.js";


const App = () => {

    return (

        <div className="container">

            <div className="row">

                <div className="card-group w-100">
                    <div className="col">

                        <Collapse href="collapseExample1">
                            <Card
                                // cardTitle="Trabzonspor"
                                cardText="Reddit tarihinin en nefret edilen yorumu."
                                lastUpdated="20 dakika önce"
                                image="https://picsum.photos/id/3/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card cardTitle="Kastamonuspor"
                                cardText="Dep dep."
                                lastUpdated="15 dakika önce"
                                image="https://picsum.photos/id/2/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">

                        <Collapse href="collapseExample3">
                            <Card cardTitle="Bursaspor" cardText="Tüm bunları yaparak Bursaspora destek olabilirsin." lastUpdated="10 dakika önce"
                                image="https://picsum.photos/id/4/200/300" />
                        </Collapse>
                    </div>

                </div>

            </div>

        </div>


    );
}



ReactDOM.render(
    <App />,

    document.getElementById("root")

);
