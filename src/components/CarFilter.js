function CarFilter(props) {

    const handleFilter = (e) => {
        e.preventDefault();
        const filterVal = e.target.elements.model.value;
        props.setCarFilter(filterVal);
        // console.log(filterVal);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-filter bg--light shadow rounded mb-4 p-3">
                        <form className="car-filter__form" onSubmit={handleFilter}>
                            <label htmlFor="car-filter__input-model">Filter Cars Models by Name: </label>
                            <input type="text" placeholder="Accord" name="model" id="car-filter__input-model" className="car-filter__input" disabled={props.cars.length === 0}/>
                            <input type="submit" value="Filter" className="car-filter__submit btn btn--primary" disabled={props.cars.length === 0}/>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarFilter;