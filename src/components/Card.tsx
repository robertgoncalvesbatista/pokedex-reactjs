import { styled } from "@stitches/react";

const CardStyled = styled("div", {
    padding: "0.25rem 1rem",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    background: "#0096c7",
    margin: "0.8rem",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const ImageStyled = styled("img", {
    width: "54px",
    height: "54px",
    margin: "0 1rem",
});

type ICard = {
    id: string;
    name: string;
};

export function Card(props: ICard) {
    return (
        <CardStyled>
            <span>#{props.id}</span>

            <ImageStyled
                src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" +
                    props.id +
                    ".png"
                }
                alt="Imagem de um Pokémon"
            />
            <span>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </span>
        </CardStyled>
    );
}
