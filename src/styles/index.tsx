import { styled } from "@stitches/react";

const Polygon = styled("div", {
    content: "",
    variants: {
        color: {
            branco: {
                background: "var(--color-white-terciary)",
                border: "2px solid var(--color-black-secondary)"
            },
            cinza: {
                background: "var(--color-black-secondary)",
                border: "2px solid #00000044"
            },
            blueLight: {
                background: "var(--color-blue-primary)",
                border: "6px solid var(--color-white-primary)"
            },
            blueMarine: {
                background: "var(--color-blue-primary)",
                border: "2px solid var(--color-blue-terciary)"
            },
            verde: {
                background: "var(--color-green-primary)",
                border: "2px solid var(--color-green-secondary)"
            },
            verdeEscuro: {
                background: "var(--color-green-terciary)",
                border: "2px solid #00000044"
            },
            vermelho: {
                background: "var(--color-red-primary)",
                border: "2px solid var(--color-red-terciary)"
            },
            amarelo: {
                background: "var(--color-yellow-primary)",
                border: "2px solid var(--color-yellow-secondary)"
            }
        },
        rounded: {
            small: {
                borderRadius: "0.5rem",
            },
            medium: {
                borderRadius: "50%",
            },
            large: {
                borderRadius: "1rem",
            }
        }
    },
})

const FlexBox = styled("div", {
    variants: {
        display: {
            flex: {
                display: "flex"
            },
            grid: {
                display: "grid"
            }
        },
        alignment: {
            center: {
                justifyContent: "center",
                alignItems: "center",
            },
            justifyAround: {
                justifyContent: "space-around",
                alignItems: "center",
            },
            justifyBetween: {
                justifyContent: "space-between",
                alignItems: "center",
            },
            justifyEvenly: {
                justifyContent: "space-evenly",
                alignItems: "center",
            },
        },
    }
})

export { Polygon, FlexBox }