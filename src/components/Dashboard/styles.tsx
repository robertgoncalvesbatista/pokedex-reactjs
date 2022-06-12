import { styled } from "@stitches/react";

const Container = styled("div", {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 8rem",
});

const Wrapper = styled("div", {
    display: "flex",
    overflow: "scroll",
    padding: "0 1rem",
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

const List = styled("div", {
    margin: "0 2rem",
});

const Frame = styled("div", {
    background: "var(--color-red-secondary)",
    color: "var(--color-black-primary)",
    display: "flex",

    marginBottom: "2rem",

    width: "1256px",
    borderRadius: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
});

const CardWrapper = styled("div", {
})

export { Container, Wrapper, NavBar, Button, Frame, List, CardWrapper };
