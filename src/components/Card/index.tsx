import { CardStyled, ImageStyled, InfoStyled } from "./styles";

import { IPokemon } from "../../types";

const Card = (props: { pokemon: IPokemon }) => {
    if (props.pokemon.id.toString().length == 1) {
        var pokeNumber = `00${props.pokemon.id}`;
    } else if (props.pokemon.id.toString().length == 2) {
        var pokeNumber = `0${props.pokemon.id}`;
    } else {
        var pokeNumber = `${props.pokemon.id}`;
    }

    return (
        <CardStyled>
            <ImageStyled src={props.pokemon.sprites.front_default} alt="Imagem de um Pokémon" />

            <InfoStyled>
                <span>Nº {pokeNumber}</span>
                <span>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</span>
            </InfoStyled>
        </CardStyled>
    );
};

export default Card;
