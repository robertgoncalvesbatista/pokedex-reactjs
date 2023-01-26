import { useEffect, useState } from "react";

import { request } from "../../services/api";

import Card from "../Card";
import Info from "../Info";

import { FlexBox } from "../../styles";
import { Wrapper, NavBar, Button } from "./styles";

import { IPokemon, IPokemons } from "../../types";
import { useFetch } from "../../hooks/useFetch";

const Dashboard = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const [pokedata, setPokedata] = useState<IPokemon[]>([]);
    const [pokedex, setPokedex] = useState<IPokemon>();

    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    const pokeFunc = async () => {
        setLoading(true);

        const response = await request({ url: url });

        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);

        getPokemon(response.data.results);
    }

    const getPokemon = (response: []) => {
        response.map(async (pokemon: IPokemons) => {
            const result = await request({ url: pokemon.url });

            setPokedata((state) => {
                state = [...state, result.data],
                    state.sort((a, b) => (a.id > b.id ? 1 : -1));

                return state;
            });
        });

        setLoading(false);
    }

    useEffect(() => {
        pokeFunc();
    }, [url]);

    return (
        <FlexBox display="flex" alignment="center" css={{ flexDirection: "column" }}>
            <NavBar>
                {prevUrl ? (
                    <Button onClick={() => { setPokedata([]); setUrl(prevUrl); }}>
                        Anterior
                    </Button>
                ) : <div> </div>}

                <img style={{ width: "120px" }} src="img/pokemon-logo.png" alt="Pokemon Logo" />

                {nextUrl ? (
                    <Button onClick={() => { setPokedata([]); setUrl(nextUrl); }}>
                        Próximo
                    </Button>
                ) : <div> </div>}
            </NavBar>

            <Info pokemon={pokedex} />

            <Wrapper>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    pokedata.map((value: IPokemon, index) => {
                        return (
                            <div key={index} onClick={() => setPokedex(value)}>
                                <Card pokemon={value} />
                            </div>
                        )
                    })
                )}
            </Wrapper>
        </FlexBox>
    );
}

export default Dashboard;
