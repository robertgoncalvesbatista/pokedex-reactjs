import { Fragment } from "react";

import { IPokemon } from "../../types";

import {
    DisplayStyled,
    StatusStyled,
    TypeStyled,
    ScreenStyled,
    Polygon,
    Cross,
} from "./styles";

const Info = (props: { pokemon: IPokemon | undefined }) => {
    return (
        <Fragment>
            <DisplayStyled>
                <div style={{ display: "flex", padding: "1rem 0", width: "170px", justifyContent: "space-between", marginLeft: "-177px" }}>
                    <Polygon format="large" color="azul" />
                    <div style={{ display: "flex", width: "80px", justifyContent: "space-between" }}>
                        <Polygon format="small" color="vermelho" />
                        <Polygon format="small" color="amarelo" />
                        <Polygon format="small" color="verde" />
                    </div>
                </div>
                <div style={{ display: "grid", justifyContent: "center", border: "2px solid #000000", marginBottom: "2rem" }}>
                    <ScreenStyled>
                        <img src={props.pokemon?.sprites.other.dream_world.front_default} style={{
                            width: "186px",
                            height: "136px",
                            padding: "2rem",
                        }} />
                    </ScreenStyled>

                    <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: "2rem",
                    }}>
                        <Polygon format="medium" color="cinza" />

                        <div style={{ display: "grid" }}>
                            <div style={{ display: "flex", width: "192px", justifyContent: "space-around" }}>
                                <Polygon format="retangle" color="verde" />
                                <Polygon format="retangle" color="amarelo" />
                            </div>

                            <div style={{ width: "160px", padding: "0.5rem 1rem", background: "var(--color-green)", color: "var(--color-white-primary)" }}>
                                <span>{props.pokemon?.name.charAt(0).toUpperCase()}{props.pokemon?.name.slice(1)}</span>
                            </div>

                        </div>

                        <Cross />
                    </div>
                </div>
            </DisplayStyled>

            <StatusStyled>
                {props.pokemon?.stats.map(value => {
                    return (
                        <div>
                            <span><b>{value.stat.name.toUpperCase()}</b>: {value.base_stat}</span>
                        </div>
                    )
                })}

                {props.pokemon?.types.map(value => {
                    return (
                        <TypeStyled>
                            <span>{value.type.name.charAt(0).toUpperCase()}{value.type.name.slice(1)}</span>
                        </TypeStyled>
                    )
                })}
            </StatusStyled>
        </Fragment>
    )
}

export default Info;