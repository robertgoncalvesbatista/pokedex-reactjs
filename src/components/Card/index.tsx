import { CardStyled, ImageStyled } from "./styles";

import { IPokemon } from "../../types";

const Card = (props: {pokemon: IPokemon}) => {
    return (
        <CardStyled>
            <span>#{props.pokemon.id}</span>

            <ImageStyled  src={props.pokemon.sprites.front_default} alt="Imagem de um Pokémon" />

            <span>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</span>
        </CardStyled>
    );
};

export default Card;
