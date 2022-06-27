import { styled } from "@stitches/react";

const ScreenStyled = styled("figure", {
    width: "250px",
    height: "200px",
    borderRadius: "4px 4px 4px 45px",
    background: "var(--color-black-secondary)",
    border: "2rem solid var(--color-white-terciary)",
})

const Cross = styled("div", {
    position: "relative",
    background: "var(--color-green-terciary)",

    width: "27px",
    height: "71px",

    margin: "0 1.3rem",

    border: "2px solid #00000044",
    borderRadius: "4px",
    boxShadow: "1px 1px 2px 2px #000000",
    "&::before": {
        content: '',
        position: "absolute",
        background: "var(--color-green-terciary)",

        width: "71px",
        height: "25px",

        top: "20px",
        left: "-24px",

        border: "2px solid #00000044",
        borderRadius: "4px",
        boxShadow: "1px 1px 2px 2px #000000",
    }
})

const ScreenGreen = styled("div", {
    width: "130px",
    height: "35px",
    padding: "0.5rem",
    background: "var(--color-green-primary)",
    color: "var(--color-white-primary)",
    border: "2px solid var(--color-green-secondary)",
})

const Frame = styled("div", {
    color: "var(--color-black-primary)",
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "2rem",
});

export { ScreenStyled, Cross, ScreenGreen, Frame };
