import {useEffect, useState} from 'react';

function CarList(props) {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCars(data.Results);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


    return (
        <div>
            <h2>Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.Make_Name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CarList;