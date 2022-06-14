import { styled } from "@stitches/react";

const TypeStyled = styled("div", {
    color: "#ffffff",
    textAlign: "center",
    background: "#ef7c09",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
})

const ScreenStyled = styled("figure", {
    width: "250px",
    height: "200px",
    borderRadius: "4px 4px 4px 45px",
    background: "var(--color-black-secondary)",
    border: "3rem solid var(--color-white-primary)",
})

const Cross = styled("div", {
    position: "relative",
    borderRadius: "4px",
    border: "2px solid var(--color-black-primary)",
    background: "var(--color-black-secondary)",
    width: "20px",
    height: "60px",
    margin: "0 1.3rem",
    "&::before": {
        content: '',
        position: "absolute",
        borderRadius: "4px",
        background: "var(--color-black-secondary)",
        width: "60px",
        height: "20px",
        top: "20px",
        left: "-22px",
        border: "2px solid #ffffff44",
    }
})

const ScreenGreen = styled("div", {
    width: "160px",
    padding: "0.5rem 1rem",
    background: "var(--color-green-primary)",
    color: "var(--color-white-primary)",
    border: "2px solid var(--color-green-secondary)",
})

const Frame = styled("div", {
    background: "var(--color-red-secondary)",
    color: "var(--color-black-primary)",
    display: "flex",

    marginBottom: "2rem",

    borderRadius: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
});

export { TypeStyled, ScreenStyled, Cross, ScreenGreen, Frame };
