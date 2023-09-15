import { fetchWithTimeout } from './connection';

export default {
    getPokemon: async (limit = 20, offset = 0) => {
        try {
            const req = await fetchWithTimeout(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    },
};
