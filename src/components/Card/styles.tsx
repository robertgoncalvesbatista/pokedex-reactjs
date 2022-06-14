import { styled } from "@stitches/react";

const CardStyled = styled("div", {
    width: "100px",
    padding: "0.5rem",
    margin: "0.5rem 1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    background: "var(--color-white-primary)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
    borderRadius: "4px",

    "&:hover": {
        background: "var(--color-white-secondary)",
    },
});

const ImageStyled = styled("img", {
    background: "var(--color-black-terciary)",
    marginBottom: "0.5rem",
    width: "100%",
    height: "100%",
});

const InfoStyled = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-around",
    color: "#000000",
});

export { CardStyled, ImageStyled, InfoStyled };
