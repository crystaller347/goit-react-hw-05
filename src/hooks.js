import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const useFetch = (fetchFunction, params = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchFunction(params);
                setData(response);
                setError(false);
            } catch (error) {
                setError(error);
                setData(null);
                navigate("*", { replace: true });
            } finally {
                setLoading(false);
            }
        };

        if (fetchFunction) fetchData();
    }, [fetchFunction, params])

    return { data, error, loading };
};

export default useFetch;