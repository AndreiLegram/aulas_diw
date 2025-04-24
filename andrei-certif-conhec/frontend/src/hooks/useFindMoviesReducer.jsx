import { useEffect, useReducer } from 'react';
import axios from "axios";
const initialState = {
    loading: true,
    data: [],
    error: null
}
const reduce = (state, action) => {
    switch (action.type) {
        case 'OnFetching':
            return {
                loading: true,
                data: [],
                error: null
            }
        case 'OnSuccess':
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case 'OnFailure':
            return {
                loading: false,
                data: [],
                error: 'Lamento, ocorreu um erro!'
            }
        default:
            return state;
    }
}
export function useFindMoviesReducer(search) {
    const [state, dispatch] = useReducer(reduce, initialState)
    useEffect(() => {
        async function listMovies() {
            try {
                const apiUrl = 'http://localhost:3000/api/movies';
                const result = await axios.get(apiUrl);
                if (result.data) {
                    dispatch({ type: 'OnSuccess', payload: result.data });
                } else {
                    dispatch({ type: 'OnFailure' });
                }
            }
            catch (err) {
                dispatch({ type: 'OnFailure' });
            }
        };
        dispatch({ type: 'OnFetching' });
        listMovies();
    }, [search]);
    return { state };
} 
