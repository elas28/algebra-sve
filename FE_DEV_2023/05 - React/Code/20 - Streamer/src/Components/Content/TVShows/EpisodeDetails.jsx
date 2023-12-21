import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { yearFormatting } from '../../../Helpers/utils';

export default function EpisodeDetails() {
    const params = useParams();

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
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/tv/${params.tvID}/season/${params.seasonID}/episode/${params.episodeID}?&include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids&include_image_language=en,null`, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [params.episodeID, params.seasonID, params.tvID])

    document.title = `${data?.name} (${new Date(data?.air_date).toLocaleString('en-US', yearFormatting)}) | Stream+`;

    return (
        <>
            {loading &&
                <div className='loading'>
                    <div className='spinner-border' role='status'>
                    </div>
                </div>
            }

            {error && <div className='error'><h1>That's an error!</h1><p>Error description: {error.message}</p></div>}

            {!loading && !error &&
                <div className='content episode'>
                    <img className='poster' src={`https://image.tmdb.org/t/p/w500${data.still_path}`} alt={data.name} />

                    <h3>{data.name} ({new Date(data.air_date).toLocaleString('en-US', yearFormatting)})</h3>

                    {!!data.overview &&
                        <p className='details'>{data.overview}</p>
                    }

                    {!!data.vote_average &&
                        <>
                            <h5>Audience Score</h5>
                            <p>{data.vote_average?.toFixed(1)}/10</p>
                        </>
                    }

                    <h5>Cast</h5>
                    <ul className='dashed'>
                        {data.credits?.cast.map(cast =>
                            <li key={cast.id}><a href={`/view/person/${cast.id}`}>{cast.original_name}</a> as {cast.character}</li>
                        )}
                    </ul>
                </div>
            }
        </>
    )
}