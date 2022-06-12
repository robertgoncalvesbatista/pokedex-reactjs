import { styled } from "@stitches/react";

const DisplayStyled = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRight: "4px solid #000000",
});

const StatusStyled = styled("div", {
    justifyContent: "space-around",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    width: "100%",
});

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
    background: "var(--color-black-primary)",
    border: "3rem solid var(--color-white-primary)",
})

const Polygon = styled("div", {
    content: "",
    variants: {
        color: {
            cinza: {
                background: "var(--color-black-secondary)"
            },
            azul: {
                background: "var(--color-blue-primary)",
            },
            verde: {
                background: "var(--color-green)",
            },
            vermelho: {
                background: "var(--color-red-primary)",
            },
            amarelo: {
                background: "var(--color-yellow)",
            }
        },
        format: {
            small: {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
            },
            medium: {
                width: "50px",
                height: "50px",
                borderRadius: "50%",
            },
            large: {
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "3px solid var(--color-white-primary)"
            },
            retangle: {
                width: "60px",
                height: "10px",
                borderRadius: "1rem",
            }
        },
    },
})

const Cross = styled("div", {
    background: "var(--color-black-secondary)",
    height: "60px",
    position: "relative",
    borderRadius: "4px",
    width: "20px",
    "&::after": {
        background: "var(--color-black-secondary)",
        content: '',
        height: "20px",
        left: "-20px",
        position: "absolute",
        borderRadius: "4px",
        top: "20px",
        width: "60px",
    }
})

export { DisplayStyled, StatusStyled, TypeStyled, ScreenStyled, Polygon, Cross };
