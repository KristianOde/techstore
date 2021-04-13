import React, { useState } from 'react'
import { capitalize } from '../../../utils/utils'
import Divider from '../../common/divider'
import { useProductFilterContext } from '../hooks/useProductFilter'
import CategoryTitle from './categorytitle'
import FilterCheckbox from './checkbox'

const SidebarFilters = () => {
    const {filters} = useProductFilterContext()
    let title = ""

    const filterSegment = (string, check) => {
        if (title != string) {
            title = string
            return (
                <CategoryTitle text={capitalize(string)} />
            )
        }
    }

    const filterDivider = (index) => {
        if (index <= filters.length) {
            if (filters[index+1] != undefined && filters[index].category === filters[index+1].category) {
                return <Divider />
            }
            else return <br/>
        }
    }

    const filterOptions = () => {
        const newTitle = true
        return (
            <div>
                {filters.map((filter, i) => {
                    return (
                        <div key={i}>
                            {filterSegment(filter.category, newTitle)}
                            <FilterCheckbox category={filter.category} option={filter}/>
                            {filterDivider(i)}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {filterOptions()}
        </div>
    )
}

export default SidebarFilters