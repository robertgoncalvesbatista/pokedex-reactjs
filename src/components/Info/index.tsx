import { Fragment } from "react";

import { IPokemon } from "../../types";

import {
    Display,
    Status,
} from "./styles";

const Info = (props: { pokemon: IPokemon | undefined }) => {
    return (
        <Fragment>
            <Display>
                <h2>{props.pokemon?.name}</h2>
                <img src={props.pokemon?.sprites.versions["generation-iv"].platinum.front_default} alt="Pokemon" />

                <div>
                    {props.pokemon?.abilities.map(value => {
                        return (
                            <div>
                                <h3>{value.ability.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </Display>

            <Status>
                {props.pokemon?.stats.map(value => {
                    return (
                        <div>
                            <h3>{value.stat.name}: {value.base_stat}</h3>
                        </div>
                    )
                })}
            </Status>
        </Fragment>
    )
}

export default Info;