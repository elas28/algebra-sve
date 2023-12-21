import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('searchTerm');

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
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/search/multi?query=${query}&include_adult=false`, options)
                const result = await response.json()
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [])

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
                    <p>Error desription: {error.message}</p>
                </div>
            }

            {!loading && !error &&
                <div className='trending list'>
                    <div className='title'>
                        <h1>Explore titles related to: {query}</h1>
                        <p>There are {data.total_results} result(s) over {data.total_pages} page(s).</p>
                    </div>
                    <div className='scroll-tray'>
                        {data.results.map(data =>
                            <div key={data.id}>
                                <a href={`/view/${data.media_type}/${data.id}`} className='scroll-tray'>
                                    {!data.poster_path && !data.profile_path ?
                                        <img src='https://placehold.co/133x230' alt={data.title} />
                                        :
                                        <img src={`https://image.tmdb.org/t/p/w342${data.poster_path ?? data.profile_path}`} alt={data.title} />}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    )
}