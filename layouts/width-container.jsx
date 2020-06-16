import React from "react";

export default ({ width, children, center }) => (
    <div
        style={{
            width: width ? width : "100%",
            textAlign: center ? "center" : "initial",
        }}
    >
        {children}
    </div>
);
