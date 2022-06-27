import { styled } from "@stitches/react";

const Wrapper = styled("div", {
    width: "1200px",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto",
    padding: "0 1rem",
});

const NavBar = styled("div", {
    margin: "1rem auto",
    padding: "1rem 4rem",

    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",

    alignItems: "center",
    justifyItems: "center",

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
