function CarList(props) {
    function filterBy(filterVal) {
        return function ( item ) {
            return item.Model_Name.toLowerCase().includes(filterVal.toLowerCase())
        }
    }
    function sortBy(field) {
        //console.log(props.sortBy);
        return function(a, b) {
            if(props.sortBy === "A-Z") {
                return (a[field] > b[field]) - (a[field] < b[field])
            } else if(props.sortBy === "Z-A") {
                return (a[field] < b[field]) - (a[field] > b[field])
            }
        };
    }
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-list bg--light shadow rounded p-3">
                    <h3 className="car-list__title">
                        {props.currentMake && 
                            <span>Car model results for "{props.currentMake}"</span>
                        }
                        {props.carFilter &&
                            <span>, filtered by "{props.carFilter}"</span>
                        }
                        {props.sortBy &&
                            <span>, sorted "{props.sortBy}"</span>
                        }
                    </h3>
                        <div className="car-list__content">
                            {props.cars.filter(filterBy(props.carFilter)).sort(sortBy('Model_Name')).map(car => (
                                <div className="car-list__item" key={car.Model_ID}>
                                    <p className="car-list__model-name">{car.Model_Name}</p>
                                </div>
                            ))}
                            {props.cars.filter(filterBy(props.carFilter)).length === 0 && props.currentMake !== "" &&    
                                <h6 className="car-list__no-results text-center mt-1">No results found</h6>
                            }
                            {props.notification !== "" && props.currentMake === "" && 
                                <h6 className="car-list__notification text-center mt-1">{props.notification}</h6>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarList;