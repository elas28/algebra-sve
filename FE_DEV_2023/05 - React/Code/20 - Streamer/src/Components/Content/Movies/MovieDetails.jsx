import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { yearFormatting, yearMonthDayFormatting } from '../../../Helpers/utils';

// https://iq.js.org/questions/javascript/what-does-the-double-not-operator-do

export default function MovieDetails() {
    const params = useParams();

    // State management
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);

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
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/movie/${params.movieID}?include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids`, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [params.movieID])

    document.title = `${data?.title} (${new Date(data?.release_date).toLocaleDateString('en-US', yearFormatting)}) | Stream+`

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
                <div className='content'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} className='poster' />

                    <h1>{data.title} ({new Date(data?.release_date).toLocaleDateString('en-US', yearFormatting)})</h1>

                    <p className='details'>{data.tagline}</p>

                    <a href={`/rate/movie/${data.id}`} className='button'>Rate Movie</a>

                    {!!data.vote_average &&
                        <>
                            <h5>Audience Score</h5>
                            <p>{data.vote_average?.toFixed(1)}/10 (based on {data.vote_count} votes)</p>
                        </>
                    }

                    {!!data.release_date &&
                        <>
                            <h5>Release Date</h5>
                            <p>{new Date(data.release_date).toLocaleDateString('en-US', yearMonthDayFormatting)}</p>
                        </>
                    }

                    {!!data.credits.cast &&
                        <>
                            <h5>Cast</h5>
                            <ul className='dashed'>
                                {data.credits.cast.map(cast =>
                                    <li key={cast.id}>
                                        <a href={`/view/person/${cast.id}`}>{cast.original_name}</a> as {cast.character}
                                    </li>
                                )}
                            </ul>
                        </>
                    }

                    {!!data.genres &&
                        <>
                            <h5>Genres</h5>
                            <ul className='dashed'>
                                {data.genres.map(genre =>
                                    <li key={genre.id}>{genre.name}</li>
                                )}
                            </ul>
                        </>
                    }

                    {!!data.revenue &&
                        <>
                            <h5>Revenue</h5>
                            <p>${data.revenue.toLocaleString('en-US')}</p>
                        </>
                    }

                    {!!data.budget &&
                        <>
                            <h5>Budget</h5>
                            <p>${data.budget.toLocaleString('en-US')}</p>
                        </>
                    }

                    {!!data.recommendations.results &&
                        <>
                            <h5>Similar Movies</h5>
                            <div className='scroll-tray'>
                                {data.recommendations.results.map(result =>
                                    <div key={result.id}>
                                        <a href={`/view/movie/${result.id}`}>
                                            {!result.poster_path ? <img src='https://placehold.co/133x200' alt={result.title} />
                                                :
                                                <img src={`https://image.tmdb.org/t/p/w342${result.poster_path}`} alt={result.title} />
                                            }
                                        </a>
                                    </div>
                                )}
                            </div>
                        </>
                    }

                </div>
            }
        </>
    )
}