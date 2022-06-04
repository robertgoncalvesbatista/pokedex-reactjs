import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";

import {
    Container,
    Wrapper,
    NavBar,
    Button,
    Frame,
    Display,
    Status,
    List,
} from "./styles";

import { IState, IPokemons } from "../../types";

const Dashboard = () => {
    const [pokeData, setPokeData] = useState<IState>([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    const pokeFunc = async () => {
        setLoading(true);

        const response = await axios.get(url);

        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);

        getPokemon(response.data.results);
    };

    const getPokemon = (response: []) => {
        response.map(async (pokemon: IPokemons) => {
            const result = await axios.get(pokemon.url);

            setPokeData((state) => {
                state = [...state, result.data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));

                return state;
            });
        });

        setLoading(false);
    };

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
                                setPokeData([]);
                                setUrl(prevUrl);
                            }}
                        >
                            Anterior
                        </Button>
                    )}

                    {nextUrl && (
                        <Button
                            onClick={() => {
                                setPokeData([]);
                                setUrl(nextUrl);
                            }}
                        >
                            Próximo
                        </Button>
                    )}
                </NavBar>

                <Wrapper>
                    <Card pokemon={pokeData} loading={loading} />
                </Wrapper>
            </List>

            <Frame>
                <Display>Hello Wolrd</Display>

                <Status>Hello Wolrd</Status>
            </Frame>
        </Container>
    );
};

export default Dashboard;
