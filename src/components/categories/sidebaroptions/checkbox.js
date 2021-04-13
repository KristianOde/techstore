import React, { useState } from 'react'
import { useProductFilterContext } from '../hooks/useProductFilter'

const FilterCheckbox = ({option}) => {
    const {toggle} = useProductFilterContext()

    return (
        <div className="FilterCheckbox" onClick={() => toggle(option.name)}>
            <input type="checkbox" name={option.name} checked={option.active} readOnly={true}/>
            {option.name}
        </div>
    )
}

export default FilterCheckbox