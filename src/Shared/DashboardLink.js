import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const DashboardLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <Link
                style={{
                    fontSize: "16px",
                    fontFamily: "rubik",
                    padding: " 10px 25px",
                    fontWeight: "400",
                    textDecoration: "none",
                    color: match ? "white" : "rgb(135 136 237)",
                    borderLeft: match ? "3px solid #ffffff" : "none",
                    backgroundColor: match ? " #5960C0" : "",
                    // border-r: match ? " 30px" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};

export default DashboardLink;
