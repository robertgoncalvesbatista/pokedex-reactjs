import { Fragment } from "react";

import { IPokemon } from "../../types";

import {
    Display,
    Status,
    Abilities,
    Ability
} from "./styles";

const Info = (props: { pokemon: IPokemon | undefined }) => {
    return (
        <Fragment>
            <Display>
                <h2>{props.pokemon?.name.charAt(0).toUpperCase()}{props.pokemon?.name.slice(1)}</h2>
                <img src={props.pokemon?.sprites.other.dream_world.front_default} style={{ height: "200px", margin: "1rem 0" }} />

                <Abilities>
                    {props.pokemon?.abilities.map(value => {
                        return (
                            <Ability>{value.ability.name.charAt(0).toUpperCase()}{value.ability.name.slice(1)}</Ability>
                        )
                    })}
                </Abilities>
            </Display>

            <Status>
                {props.pokemon?.stats.map(value => {
                    return (
                        <div>
                            <span><b>{value.stat.name.toUpperCase()}</b>: {value.base_stat}</span>
                        </div>
                    )
                })}
            </Status>
        </Fragment>
    )
}

export default Info;