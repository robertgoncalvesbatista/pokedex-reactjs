import { useState } from "react";

import { Polygon, FlexBox } from "../../styles";
import { TypeStyled, ScreenStyled, Cross, ScreenGreen, Frame } from "./styles";

import { IPokemon } from "../../types";

const Info = (props: { pokemon: IPokemon | undefined }) => {
    const arr = [""];

    arr.shift();
    props.pokemon?.types.map(iten => {
        arr.push(iten.type.name);
    })

    console.log(arr)

    return (
        <Frame>
            <FlexBox display="flex" alignment="center" css={{
                justifyContent: "end", flexDirection: "column", borderRight: "4px solid var(--color-red-terciary)", background: "var(--color-red-secondary)", borderRadius: "1rem 1rem 0 1rem", boxShadow: "#d10023cc 6px 6px 2px, #343a40 5px 5px 20px 5px"
            }}>
                <div style={{ width: "100%" }}>
                    <FlexBox display="flex" alignment="justifyBetween" css={{ padding: "1rem 0", marginLeft: "3rem", width: "170px" }}>
                        <Polygon color="blueLight" rounded="medium" css={{ width: "60px", height: "60px", boxShadow: "inset 0px 0px 4px 0px #000000, 1px 1px 4px 0px #000000" }}>
                            <div style={{ width: "55px", height: "55px", borderRadius: "50%", top: "5px", left: "4px", background: "#19699e", position: "relative" }}></div>
                            <div style={{ position: "relative", width: "30px", top: "-48px", left: "8px", height: "30px", borderRadius: "50%", background: "#28aafe" }}></div>
                            <div style={{ position: "relative", width: "15px", top: "-76px", left: "11px", height: "15px", borderRadius: "50%", background: "#9fdbfd" }}></div>
                        </Polygon>

                        <FlexBox display="flex" alignment="justifyBetween" css={{ width: "80px" }}>
                            <Polygon color="vermelho" rounded="medium" css={{ width: "20px", height: "20px", boxShadow: "1px 1px 5px 0px #000000" }}>
                                <div style={{ width: "18px", height: "18px", top: "2px", left: "2px", borderRadius: "50%", background: "rgb(158 6 29)", position: "relative" }}></div>
                                <div style={{ width: "10px", height: "10px", top: "-15px", left: "3px", borderRadius: "50%", background: "rgb(248 21 59)", position: "relative" }}></div>
                                <div style={{ width: "5px", height: "5px", top: "-24px", left: "4px", borderRadius: "50%", background: "rgb(252 126 147)", position: "relative" }}></div>
                            </Polygon>
                            <Polygon color="amarelo" rounded="medium" css={{ width: "20px", height: "20px", boxShadow: "1px 1px 5px 0px #000000" }}>
                                <div style={{ width: "18px", height: "18px", top: "2px", left: "2px", borderRadius: "50%", background: "rgb(178 137 3)", position: "relative" }}></div>
                                <div style={{ width: "10px", height: "10px", top: "-15px", left: "3px", borderRadius: "50%", background: "rgb(255 195 0)", position: "relative" }}></div>
                                <div style={{ width: "5px", height: "5px", top: "-24px", left: "4px", borderRadius: "50%", background: "rgb(255 225 127)", position: "relative" }}></div>
                            </Polygon>
                            <Polygon color="verde" rounded="medium" css={{ width: "20px", height: "20px", boxShadow: "1px 1px 5px 0px #000000" }}>
                                <div style={{ width: "18px", height: "18px", top: "2px", left: "2px", borderRadius: "50%", background: "rgb(25 134 40)", position: "relative" }}></div>
                                <div style={{ width: "10px", height: "10px", top: "-15px", left: "3px", borderRadius: "50%", background: "rgb(82 174 95)", position: "relative" }}></div>
                                <div style={{ width: "5px", height: "5px", top: "-24px", left: "4px", borderRadius: "50%", background: "rgb(135 207 146)", position: "relative" }}></div>
                            </Polygon>
                        </FlexBox>
                    </FlexBox>
                </div>

                <FlexBox display="flex" css={{ height: "440px" }}>
                    <FlexBox display="grid" alignment="center" css={{ border: "2px solid var(--color-red-terciary)", margin: "0.5rem", borderRadius: "14px 0 0 14px" }}>
                        <ScreenStyled>
                            <img src={props.pokemon?.sprites.other.dream_world.front_default} style={{ width: "186px", height: "136px", padding: "2rem" }} />
                        </ScreenStyled>

                        <FlexBox display="flex" alignment="justifyAround" css={{ width: "85%", margin: "0 auto 2rem" }}>
                            <Polygon color="verdeEscuro" rounded="medium" css={{ width: "40px", height: "40px", boxShadow: "1px 1px 2px 2px #000000" }} />

                            <FlexBox display="grid" css={{ gridTemplateRows: "1fr 2fr" }}>
                                <FlexBox display="flex" alignment="justifyAround" css={{ marginBottom: "1rem" }}>
                                    <Polygon color="vermelho" rounded="small" css={{ width: "40px", height: "5px", boxShadow: "1px 1px 5px 0px #000000" }}>
                                        <div style={{ width: "28px", height: "2px", top: "1px", left: "4px", background: "rgb(255 96 122)", position: "relative" }}></div>
                                    </Polygon>
                                    <Polygon color="blueMarine" rounded="small" css={{ width: "40px", height: "5px", boxShadow: "1px 1px 5px 0px #000000" }}>
                                        <div style={{ width: "28px", height: "2px", top: "1px", left: "4px", background: "rgb(124 201 250)", position: "relative" }}></div>
                                    </Polygon>
                                </FlexBox>

                                <ScreenGreen>
                                    <span>
                                        {props.pokemon?.name.charAt(0).toUpperCase()}
                                        {props.pokemon?.name.slice(1)}
                                    </span>
                                </ScreenGreen>
                            </FlexBox>

                            <Cross>
                                <Polygon css={{ background: "var(--color-green-terciary)", borderRadius: "25%", height: "37px", width: "37px", top: "16px", left: "-6px", position: "relative" }} />
                            </Cross>
                        </FlexBox>
                    </FlexBox>

                    <div style={{ width: "40px", display: "grid", gridTemplateRows: "1fr 3fr 1fr", border: "2px solid var(--color-red-terciary)", background: "linear-gradient(to left, #89061c, #de0c2c, #e9647a, #dc0a2d)" }}>
                        <div style={{ width: "100%", borderBottom: "2px solid var(--color-red-terciary)", marginBottom: "0.5rem" }}></div>
                        <div style={{ width: "100%", borderTop: "2px solid var(--color-red-terciary)", borderBottom: "2px solid var(--color-red-terciary)" }}></div>
                        <div style={{ width: "100%", borderTop: "2px solid var(--color-red-terciary)", marginTop: "0.5rem" }}></div>
                    </div>
                </FlexBox>
            </FlexBox>

            <FlexBox display="flex" alignment="center" css={{ flexDirection: "column", borderLeft: "4px solid var(--color-red-terciary)", background: "var(--color-red-secondary)", borderRadius: "0 1rem 1rem 0", boxShadow: "#d10023cc 6px 6px 2px, #343a40 5px 5px 20px 5px" }}>
                <FlexBox display="grid" alignment="center" css={{ border: "2px solid var(--color-red-terciary)", margin: "0.5rem", borderRadius: "0 14px 14px 0" }}>
                    <FlexBox css={{ margin: "1rem 2rem", width: "334px" }} >
                        <Polygon color="cinza" css={{ padding: "1rem", height: "50px", fontSize: "10px", display: "grid", gridTemplateColumns: "auto auto auto", alignItems: "center" }}>
                            {props.pokemon?.stats.map(value => {
                                return (
                                    <span style={{ color: "var(--color-white-primary)" }}>
                                        {value.stat.name.toUpperCase()}: {value.base_stat}
                                    </span>
                                )
                            })}
                        </Polygon>
                    </FlexBox>

                    <FlexBox display="grid" css={{ gridTemplateColumns: "auto auto auto auto auto", justifyContent: "center" }} >
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                        <Polygon color="blueMarine" css={{ width: "63px", height: "35px", boxShadow: "1px 1px 2px 1px #28aafe" }} />
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyEvenly" css={{ alignSelf: "self-end", padding: "1.3rem", width: "189px" }}>
                        <Polygon color="cinza" rounded="small" css={{ width: "70px", height: "10px" }} />
                        <Polygon color="cinza" rounded="small" css={{ width: "70px", height: "10px" }} />
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyBetween" css={{ margin: "0 2rem 2rem" }}>
                        <FlexBox display="flex">
                            <Polygon color="branco" css={{ width: "60px", height: "45px", boxShadow: "1px 1px 2px 1px #dedede" }} />
                            <Polygon color="branco" css={{ width: "60px", height: "45px", boxShadow: "1px 1px 2px 1px #dedede" }} />
                        </FlexBox>

                        <Polygon color="amarelo" rounded="medium" css={{ width: "40px", height: "40px", boxShadow: "1px 1px 5px 0px #000000" }}>
                            <div style={{ width: "38px", height: "38px", top: "2px", left: "2px", borderRadius: "50%", background: "rgb(178 137 3)", position: "relative" }}></div>
                            <div style={{ width: "20px", height: "20px", top: "-34px", left: "3px", borderRadius: "50%", background: "rgb(255 195 0)", position: "relative" }}></div>
                            <div style={{ width: "10px", height: "10px", top: "-52px", left: "5px", borderRadius: "50%", background: "rgb(255 225 127)", position: "relative" }}></div>
                        </Polygon>
                    </FlexBox>

                    <FlexBox display="flex" alignment="justifyBetween" css={{ margin: "0 2rem 2rem" }}>
                        <Polygon color="cinza" css={{ width: "110px", height: "20px", padding: "1rem" }}>
                            <span style={{ color: "var(--color-white-primary)" }}>
                                {arr.length == 1 && arr[0].charAt(0).toUpperCase() + arr[0].slice(1)}
                                {arr.length == 2 && arr[0].charAt(0).toUpperCase() + arr[0].slice(1)}
                            </span>
                        </Polygon>
                        <Polygon color="cinza" css={{ width: "110px", height: "20px", padding: "1rem" }}>
                            <span style={{ color: "var(--color-white-primary)" }}>
                                {arr.length == 2 && arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}
                            </span>
                        </Polygon>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Frame >
    )
}

export default Info;