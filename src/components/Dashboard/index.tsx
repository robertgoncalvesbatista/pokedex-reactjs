import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";
import Info from "../Info";

import {
    Container,
    Wrapper,
    NavBar,
    Button,
    Frame,
    List,
} from "./styles";

import { IPokemon, IPokemons } from "../../types";

const Dashboard = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const [pokedata, setPokedata] = useState<IPokemon[]>([]);
    const [pokedex, setPokedex] = useState<IPokemon>();

    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    const pokeFunc = async () => {
        setLoading(true);

        const response = await axios.get(url);

        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);

        getPokemon(response.data.results);
    }

    const getPokemon = (response: []) => {
        response.map(async (pokemon: IPokemons) => {
            const result = await axios.get(pokemon.url);

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
        <Container>
            <List>
                <NavBar>
                    {prevUrl && (
                        <Button
                            onClick={() => {
                                setPokedata([]);
                                setUrl(prevUrl);
                            }}
                        >
                            Anterior
                        </Button>
                    )}

                    {nextUrl && (
                        <Button
                            onClick={() => {
                                setPokedata([]);
                                setUrl(nextUrl);
                            }}
                        >
                            Próximo
                        </Button>
                    )}
                </NavBar>

                <Wrapper>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        pokedata.map((value: IPokemon, index) => {
                            return (
                                <div onClick={() => {
                                    setPokedex(value)
                                }}>
                                    <Card key={index} pokemon={value} />
                                </div>
                            )
                        })
                    )}
                </Wrapper>
            </List>

            <Frame>
                <Info pokemon={pokedex} />
            </Frame>
        </Container>
    );
}

export default Dashboard;
