import { Fragment } from "react";

import { CardStyled, ImageStyled } from "./styles";

import { ICard, IPokemon } from "../../types";

const Card = (props: ICard) => {
    return (
        <Fragment>
            {props.loading ? (
                <h1>Loading...</h1>
            ) : (
                props.pokemon.map((item: IPokemon, index) => {
                    return (
                        <CardStyled key={index}>
                            <span>#{item.id}</span>

                            <ImageStyled
                                src={item.sprites.front_default}
                                alt="Imagem de um Pokémon"
                            />

                            <span>{item.name}</span>
                        </CardStyled>
                    );
                })
            )}
        </Fragment>
    );
};

export default Card;
