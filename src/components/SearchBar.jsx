import React from 'react';
import LensIcon from '../img/loupe (2).png';
import { useState } from "react";
import SearchResult from './SearchResults.jsx'

const SearchBar = () => {
    
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState(["All"]);
    const [completed, setCompleted] = useState(false);

    const handleChange = () => {
        setCompleted(!completed);
    };

    const handleReset = () => {
        setQuery("");
        setFilter(["All"]);
    };
    

    return (
        <>
            <aside className="sidebar">
                <h3 className="title"> Filters </h3>
                <form action="">
                    <div className="search-bar">
                        <div className="search-input_img">
                            <img src={LensIcon} alt="" />
                        </div>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className="switch">
                        <p>completed</p>
                        <label class="toggle">
                            <span class="toggle-label">NO</span>
                            <input class="toggle-checkbox" type="checkbox" onChange={handleChange} />
                            <div class="toggle-switch"></div>
                        </label>
                    </div>

                    <div className="select">
                        <p>select user id</p>
                        <select className="select-input" name="inputId" id="inputId" aria-label="Filter Countries By user id"
                         onChange={(e) => setFilter(e.target.value)}>
                            <option value="All" selected> All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className="reset-filter">
                        <div onClick={handleReset} >Reset filters</div>
                    </div>
                </form>
            </aside>

            <SearchResult input={query} filterUser={filter} completed={completed}/>
        </>
    )
}

export default SearchBar