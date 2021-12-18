import { useState } from 'react';

function CarSearch(props) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const makeName = e.target.elements.make.value;
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${makeName}?format=json`)
            .then(response => response.json())
            .then(data => {
                props.setCars(data.Results);
                props.setCurrentMake(makeName);
                props.setNotification("");
                // console.log(data);
            })
            .catch(error => {
                console.log(error);
                props.setNotification(error.message);
            }
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-search bg--light shadow rounded mb-4 p-3">
                        <form className="car-search__form" onSubmit={handleSearch} >
                            <label htmlFor="car-search__input-make">Search for cars by make: </label>
                            <input type="text" placeholder="Honda" name="make" id="car-search__input-make" className="car-search__input" onChange={e => setSearchInput(e.target.value)} />
                            <input type="submit" value="Search" className="car-search__submit btn btn--primary" disabled={!searchInput}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarSearch;