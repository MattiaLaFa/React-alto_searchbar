import React from 'react'
import useFetch from "../hooks/useFetch"
import { useState } from "react";

const SearchResults = (props) => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    const [paginate, setpaginate] = useState(5);
    const load_more = (event) => {
        setpaginate((prevValue) => prevValue + 5);
    };
    
    if (!data) {
        return (
            <div className="search-result">
                <div className="search-result__head">
                    <p>user id</p>
                    <p>title</p>
                    <p>completed</p>
                </div>
                <hr />
                <div className="search-result__body loading">
                    <p>loading data...</p>
                </div>
            </div>
        );
    }

    const search_parameters = Object.keys(Object.assign({}, ...data));
    
    function search(items) {
        return items.filter((item) => {
            if (item.userId == props.filterUser && item.completed == props.completed ) {
                return search_parameters.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(props.input.toLowerCase()) > -1
                    );
                });
            } else if (props.filterUser == "All" && item.completed === props.completed) {
                return search_parameters.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(props.input.toLowerCase()) > -1
                    );
                });
            }
        });
    }


    return (
        <div className="search-result">
            <div className="search-result__head">
                <p>user id</p>
                <p>title</p>
                <p>completed</p>
            </div>
            <hr/>
            <div className="search-result__body">
                {search(data).slice(0, paginate).map((item) => (
                    <div className="result-card" key={item.id}>
                        <div className="result-card__id">{item.userId}</div>
                        <div>{item.title}</div>
                        <div className="result-card__completed">
                            {item.completed
                                ? <span>🟢</span>
                                : <span>🔴</span>
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className="search-result__footer">
                <p onClick={load_more}>Load More</p>
            </div>
        </div>
    )
}

export default SearchResults
