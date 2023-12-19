import React from "react";
import loading from "../images/loadingcat.gif";

const Spinner = () => {
    return (
        <div className="SpinnerDiv text-center my-2">
            <img src={loading} alt="Spinner" width={"200px"} />
        </div>
    );
};
export default Spinner;