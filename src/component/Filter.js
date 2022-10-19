import React from "react";
import Select from 'react-select'
import {filterOptions} from "../data/filterOptions";
import clsx from "clsx";
import SearchBox from "./SearchBox";

const Filter = ({tags, filterSelected, setFilterSelected, tagSelected, setTagSelected, setSearch}) => {

    const handleFilterChange = (e) => {
        setFilterSelected(e.value);
    }
    const handelTagChange = (e) => {
        // console.log(e)
        setTagSelected(e.label);
    }

    const todoTextFilter = (e) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    return (
        <div className={'filter_container'}>
            <Select
                className={'filter_selector'}
                placeholder={'Filters'}
                onChange={handleFilterChange}
                options={filterOptions}
            />


            <Select
                placeholder={'Tags'}
                className={clsx('filter_selector', !(filterSelected === 'ByTag') && 'd-none')}
                onChange={handelTagChange}
                options={tags}
            />

            <SearchBox filter={todoTextFilter} />
        </div>
    )
}

export default Filter;