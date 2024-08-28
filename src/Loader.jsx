import React from 'react';
import { RotatingTriangles } from "react-loader-spinner";
function Loader() {
    return <>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <RotatingTriangles
                visible={true}
                height="50"
                width="50"
                color="#6b1d2f"
                ariaLabel="st charles loader"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    </>;
}

export default Loader;
