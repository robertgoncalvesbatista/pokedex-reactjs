import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import api from "../../services/api";

import {
    Container,
    Wrapper,
    NavBar,
    Link,
    Frame,
    Display,
    Status,
    List,
} from "./styles";

export function Dashboard() {
    const [pokemons, setPokemon] = useState({
        count: "",
        next: "",
        previous: "",
        results: [
            {
                id: "",
                name: "",
                url: "",
            },
        ],
    });

    useEffect(() => {
        api.get("/pokemon")
            .then((response) => {
                const data = response.data;

                data.results.map((value: { url: string }, index: string) => {
                    const stringRegex = "/(0?[0-9]|1[0-9]|2[0-9])/";
                    const { ...result } = new RegExp(stringRegex).exec(
                        value.url
                    );

                    data.results[index].id = result[1];
                });

                setPokemon(data);
            })
            .catch((err) => {
                console.log("Erro ao requisitar dados da API: ", err);
            });
    });

    return (
        <Container>
            <List>
                <NavBar>
                    {pokemons.previous !== null && (
                        <Link href={pokemons.previous}>Anterior</Link>
                    )}

                    <span>Quantidade de Pokémon: {pokemons.count}</span>

                    {pokemons.next !== null && (
                        <Link href={pokemons.next}>Próximo</Link>
                    )}
                </NavBar>

                <Wrapper>
                    {pokemons.results.map((pokemon) => {
                        return (
                            <Card id={pokemon.id} name={pokemon.name}></Card>
                        );
                    })}
                </Wrapper>
            </List>

            <Frame>
                <Display>Hello Wolrd</Display>

                <Status>Hello Wolrd</Status>
            </Frame>
        </Container>
    );
}
