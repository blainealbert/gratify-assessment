function CarSearch(props) {
    const handleSearch = (e) => {
        e.preventDefault();
        const makeName = e.target.elements.make.value;
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${makeName}?format=json`)
            .then(response => response.json())
            .then(data => {
                props.setCars(data.Results);
                console.log(data.Results);
            })
            .catch(error => {
                console.log(error);
            }
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-search bg--light shadow rounded mb-5 p-3">
                        <div className="car-search__title">
                            <h2>Search Cars by Make</h2>
                        </div>
                        <form className="car-search__form" onSubmit={handleSearch} >
                            <div className="car-search__form-group">
                                <label htmlFor="car-search__input-make">Make: </label>
                                <input type="text" name="make" id="car-search__input-make" className="car-search__input" />
                                <input type="submit" value="Search" className="car-search__submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarSearch;