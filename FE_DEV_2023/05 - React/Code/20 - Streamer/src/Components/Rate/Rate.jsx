import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useParams } from 'react-router';

export default function Rate(props) {

    // State Management
    const [rated, setRated] = useState(false);
    const [error, setError] = useState(false);
    const [session, setSession] = useState(null);

    // React Router - URL Parameters
    const { contentID } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        }
        const fetchSession = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/authentication/guest_session/new`, options);
                const result = await response.json();
                setSession(result.guest_session_id);
            } catch (error) {
                setError(error)
            }
        }
        fetchSession();
    }, [])

    const handleRating = (rate) => {
        const ratingValue = { value: `${rate * 2}` }

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ratingValue)
        }

        const sendData = async () => {
            try {

                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/${props.type}/${contentID}/rating?guest_session_id=${session}`, options)

                const result = await response.json();

                if (result.success) {
                    setRated(true);
                }
            } catch (error) {
                setError(error)
            }
        }

        sendData();

    }

    return (
        <div className='rate'>
            {error &&
                <div className='error'>
                    <h1>That's an error!</h1>
                    <p>Error description: {error.message}</p>
                </div>
            }
            {!error && <h1>Thank you for rating this {props.name}!</h1>}
            {!rated && !error &&
                <>
                    <p>We're thrilled that you're doing this!</p>
                    <div className='stars'>
                        <Rating size='50px' transition allowFraction onClick={handleRating} />
                    </div>
                </>
            }
        </div>
    )
}