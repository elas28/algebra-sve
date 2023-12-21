import { useState, useEffect } from "react";

export default function Trending(props) {
    // State Management
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetching the data from API
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/trending/${props.type}/${props.timeframe}?include_adult=false`, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [props.timeframe, props.type])

    return (
        <>
            {loading &&
                <div className='loading'>
                    <div className='spinner-border' />
                </div>
            }
            {error &&
                <div className='error'>
                    <h1>That's an error!</h1>
                    <p>Error description: {error.message}</p>
                </div>
            }
            {!loading && !error &&
                <div className={`trending ${props.display}`}>
                    <div className='title'>
                        <h1>{props.title}</h1>
                        <p>{props.subtitle}</p>
                    </div>
                    <div className='holder'>
                        <div className='scroll-tray'>
                            {data?.results.map(data =>
                                <div key={data.id}>
                                    <a href={`/view/${props.type}/${data.id}`} className='scroll-tray'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    )

}