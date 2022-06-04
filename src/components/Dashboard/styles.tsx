import { styled } from "@stitches/react";

const Container = styled("div", {
    display: "flex",
    padding: "0 8rem",
});

const Wrapper = styled("div", {
    display: "grid",
    gridTemplateColumns: "auto auto",
});

const NavBar = styled("div", {
    display: "flex",
    padding: "0.5rem 1rem",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: "#f8f9fa",
    color: "#343a40",
    margin: "1rem 0",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const Link = styled("a", {
    textDecoration: "none",
    background: "#0077b6",
    color: "#f8f9fa",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    "&:hover": {
        background: "#00b4d8",
    },
});

const Button = styled("button", {
    background: "#0077b6",
    color: "#f8f9fa",
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
    background: "#f8f9fa",
    padding: "1rem",
    width: "100%",
    margin: " 4rem 2rem",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const Display = styled("div", {
    padding: "1rem",
    margin: "4rem",
});

const Status = styled("div", {
    padding: "1rem",
    margin: "4rem",
});

export {
    Container,
    Wrapper,
    NavBar,
    Link,
    Button,
    Frame,
    Display,
    Status,
    List,
};
