import React from "react";
import {Link} from "react-router-dom";
function Home () {

    return (
            <div>
                <div>
                    <h1>Idol Debut Insurance (Vehicle)</h1>
                </div>
                <div>
                    <Link to="/customer">
                        <button>고객관리서비스</button>
                    </Link>
                    <Link to="/insurance">
                        <button>보험관리서비스</button>
                    </Link>
                </div>

            </div>
    );
}

export default Home;