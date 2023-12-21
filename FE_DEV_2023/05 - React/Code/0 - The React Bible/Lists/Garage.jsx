function Car({brand, model, year, colors}) {
    return <li style={{marginBottom: '30px'}}>
        I am a {brand} {model} from {year}.
        Available colors are:
        <ul>
            {colors.map(color => <li key={crypto.randomUUID()}>{color}</li>)}
        </ul>
    </li>
 
}

export default function Garage() {

    const cars = [
        {
            id: 1,
            brand: {
                name: 'BMW',
                model: 'M5',
                year: 2022
            },
            soldout: true,
            colors: ['Blue', 'Green', 'Red']
        },
        {
            id: 2,
            brand: {
                name: 'Hyundai',
                model: 'i30 N',
                year: 2023
            },
            soldout: false,
            colors: ['Yellow', 'Pink', 'Baby Blue']
        },
        {
            id: 3,
            brand: {
                name: 'Porsche',
                model: '911 Turbo',
                year: 1993
            },
            soldout: false,
            colors: ['Orange', 'Gold', 'Black']
        },

    ]

    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {
                cars.map(car => 
                <Car key={car.id} brand={car.brand.name} model={car.brand.model} year={car.brand.year} colors={car.colors}/>
                ) 
            }
        </ul>
        </>
    )
}