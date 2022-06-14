import { styled } from "@stitches/react";

const Wrapper = styled("div", {
    width: "1200px",
    display: "flex",
    overflow: "scroll",
    padding: "0 1rem",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
        width: "16px",
    },
    "&::-webkit-scrollbar-track": {
        background: "var(--color-white-primary)",
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--color-red-primary)",
        borderRadius: "10px",
    },
});

const NavBar = styled("div", {
    margin: "1rem 0 2rem",
    padding: "0.5rem 1rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",

    background: "var(--color-white-primary)",

    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
});

const Button = styled("button", {
    background: "#0077b6",
    color: "var(--color-white-primary)",

    padding: "0.5rem 1rem",
    borderRadius: "6px",

    "&:hover": {
        background: "#00b4d8",
    },
});



export { Wrapper, NavBar, Button };
