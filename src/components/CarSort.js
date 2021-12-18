import {useEffect} from 'react';
function CarSort(props) {
    useEffect(()=>{
        
    },[]);

    const handleSort = (e) => {
        e.preventDefault();
        const sortVal = e.target.value;
        // console.log(sortVal);
        props.setSortBy(sortVal);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-sort bg--light shadow rounded mb-4 p-3">
                        <form className="car-sort__form" >
                            <label htmlFor="car-sort__input-model">Sort Cars by Model: </label>
                            <select name="sortBy" id="car-sort__input-model" className="car-sort__input" onChange={(e) => handleSort(e)} disabled={props.cars.length === 0}>
                                <option value="">Select an option</option>
                                <option value="A-Z">Alphabeitcal (A-Z)</option>
                                <option value="Z-A">Alphabetical (Z-A)</option>
                            </select>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarSort;