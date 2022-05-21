import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <>
            <Link
                style={{
                    fontSize: "16px",
                    fontFamily: "rubik",
                    padding: " 6px 12px",
                    fontWeight: "300",
                    textDecoration: "none",
                    color: match ? "white" : "black",
                    borderBottom: match ? "2px solid #C34854" : "none",
                    backgroundColor: match ? " #DC3545" : "",
                    // borderRadius: match ? " 30px" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
};

export default CustomLink;
