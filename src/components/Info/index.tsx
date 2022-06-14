import { Polygon, FlexBox } from "../../styles";
import { TypeStyled, ScreenStyled, Cross, ScreenGreen, Frame } from "./styles";

import { IPokemon } from "../../types";

const Info = (props: { pokemon: IPokemon | undefined }) => {
    return (
        <Frame>
            <FlexBox display="flex" alignment="center" css={{ width: "498px", flexDirection: "column", borderRight: "4px solid var(--color-red-terciary)" }}>
                <FlexBox display="flex" alignment="justifyBetween" css={{ padding: "1rem 0", marginLeft: "-177px", width: "170px" }}>
                    <Polygon color="blueLight" rounded="medium" css={{ width: "60px", height: "60px" }} />

                    <FlexBox display="flex" alignment="justifyBetween" css={{ width: "80px" }}>
                        <Polygon color="vermelho" rounded="medium" css={{ width: "20px", height: "20px" }} />
                        <Polygon color="amarelo" rounded="medium" css={{ width: "20px", height: "20px" }} />
                        <Polygon color="verde" rounded="medium" css={{ width: "20px", height: "20px" }} />
                    </FlexBox>
                </FlexBox>

                <FlexBox display="grid" alignment="center" css={{ border: "2px solid var(--color-red-terciary)", margin: "2rem", borderRadius: "14px 0 0 14px" }}>
                    <ScreenStyled>
                        <img src={props.pokemon?.sprites.other.dream_world.front_default} style={{ width: "186px", height: "136px", padding: "2rem" }} />
                    </ScreenStyled>

                    <FlexBox display="flex" alignment="justifyAround" css={{ width: "85%", margin: "0 auto 2rem" }}>
                        <Polygon color="cinza" rounded="medium" css={{ width: "50px", height: "50px" }} />

                        <FlexBox display="grid" css={{ gridTemplateRows: "1fr 2fr" }}>
                            <FlexBox display="flex" alignment="justifyAround" css={{ width: "192px", marginBottom: "1rem" }}>
                                <Polygon color="vermelho" rounded="small" css={{ width: "60px", height: "10px" }} />
                                <Polygon color="blueMarine" rounded="small" css={{ width: "60px", height: "10px" }} />
                            </FlexBox>

                            <ScreenGreen>
                                <span>
                                    {props.pokemon?.name.charAt(0).toUpperCase()}
                                    {props.pokemon?.name.slice(1)}
                                </span>
                            </ScreenGreen>
                        </FlexBox>

                        <Cross>
                            <Polygon color="cinza" rounded="medium" css={{ height: "30px", width: "30px", top: "15px", left: "-7px", position: "relative" }} />
                        </Cross>
                    </FlexBox>
                </FlexBox>
            </FlexBox>

            <FlexBox display="flex" alignment="center" css={{ width: "498px", flexDirection: "column", borderLeft: "4px solid var(--color-red-terciary)" }}>
                <FlexBox display="grid" alignment="center" css={{ height: "454px", border: "2px solid var(--color-red-terciary)", margin: "116px 2rem 18px", borderRadius: "0 14px 14px 0" }}>
                    <FlexBox css={{ margin: "1rem 2rem", width: "367px" }} >
                        <Polygon color="cinza" css={{ padding: "1rem", height: "50px" }}>
                            {props.pokemon?.stats.map(value => {
                                return (
                                    <span>
                                        <b>{value.stat.name.toUpperCase()}</b>:
                                        {value.base_stat}
                                    </span>
                                )
                            })}
                        </Polygon>
                    </FlexBox>

                    <FlexBox display="grid" css={{ gridTemplateColumns: "auto auto auto auto auto", justifyContent: "center" }} >
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                        <Polygon color="blueMarine" css={{ width: "69px", height: "35px" }} />
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyEvenly" css={{ alignSelf: "self-end", padding: "1.3rem", width: "189px" }}>
                        <Polygon color="cinza" rounded="small" css={{ width: "70px", height: "10px" }} />
                        <Polygon color="cinza" rounded="small" css={{ width: "70px", height: "10px" }} />
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyBetween" css={{ margin: "0 2rem 2rem" }}>
                        <FlexBox display="flex">
                            <Polygon color="cinza" css={{ width: "60px", height: "45px" }} />
                            <Polygon color="cinza" css={{ width: "60px", height: "45px" }} />
                        </FlexBox>
                        <Polygon color="amarelo" rounded="medium" css={{ width: "40px", height: "40px" }} />
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyBetween" css={{ margin: "0 2rem 2rem" }}>
                        <Polygon color="cinza" css={{ width: "150px", height: "35px" }}>
                            <span>
                                {props.pokemon?.types[0].type.name.charAt(0).toUpperCase()}
                                {props.pokemon?.types[0].type.name.slice(1)}
                            </span>
                        </Polygon>
                        <Polygon color="cinza" css={{ width: "150px", height: "35px" }}>
                            <span>
                                {props.pokemon?.types[0].type.name.charAt(0).toUpperCase()}
                                {props.pokemon?.types[0].type.name.slice(1)}
                            </span>
                        </Polygon>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Frame>
    )
}

export default Info;