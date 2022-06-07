import { styled } from "@stitches/react";

const Display = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    margin: "4rem",
});

const Status = styled("div", {
    justifyContent: "space-around",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "1rem",
    margin: "2rem 4rem",
});

const Abilities = styled("div", {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
});

const Ability = styled("span", {
    width: "170px",
    color: "#ffffff",
    textAlign: "center",
    background: "#ef7c09",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
})


export { Display, Status, Abilities, Ability };
