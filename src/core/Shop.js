import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    /* eslint-disable no-unused-vars */
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5 font-weight-bold rounded">
                    Load more
                </button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };

    return (
        <Layout
            title=""
            description=""
            className=""
        >
        <div className="container-fluid bg-success w-100 shadow">
        <div className="row p-2">
            <Checkbox
                categories={categories}
                handleFilters={filters =>
                handleFilters(filters, "category")
                }
            />
        </div>
        </div>
        <div className="container-fluid mb-2 p-1 shadow">
            <h1 className="h1 text-center my-3 p-2 font-weight-bold">
                <span style={{color:"#326cc2"}}>Home</span><span style={{color:"green"}}> of
                </span><span style={{color:"#32c2bd"}}> Himalayas!</span></h1>
            <p className="text-justify mx-2">Nepal, nation of Asia, lying along the
             southern slopes of the Himalayan Mountain ranges. It is a landlocked 
             nation situated between India toward the east, south, and west and the
              Tibet Autonomous Region of China toward the north. The area of Nepal 
              is 147,181 square kilometers with population of roughly 27 million. This
               makes Nepal 93rd biggest country on the planet. The capital city of Nepal
                is Kathmandu. Nepal is 800 kilometers in length and 200 kilometers wide
                 making a trapezoidal shape which is isolated basically into three districts
                  for example Himalayan locale, Hilly district and Terai area. The Himalayan
                   locale comprises of world's tallest mountains like Mt. Everest which is 
                   the tallest mountain on earth just as 8 of the 10 tallest mountain of the
                    world like Lhotse, Makalu, and Annapurna. It has in excess of 250 tops
                     more than 6000 meters. Nepal is wealthy in natural life.  </p>
        </div>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-2 col-sm-12 border-right shadow">
                    <h5 className="h5 font-weight-bold text-warning text-center my-3 border-bottom">Filter by price range</h5>
                    <RadioBox
                        prices={prices}
                        handleFilters={filters =>
                        handleFilters(filters, "price")
                    }
                    />
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="row mx-auto">
                        {filteredResults.map((product, i) => (
                            <div key={i} className="col-md-4 col-sm-6 col-xs-12 mb-3">
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                    <hr />
                    {loadMoreButton()}
                </div>
            </div>
        </div>

        </Layout>
    );
};

export default Shop;
