import React from 'react'
import Divider from '../../common/divider'
import { useProductFilterContext } from '../hooks/useProductFilter'
import IntelCategories from '../testcategories.json'
import CategoryTitle from './categorytitle'
import FilterCheckbox from './checkbox'

const Cpu = () => {
    const filterCategories = IntelCategories

    const {filters, setFilters} = useProductFilterContext()

    return (
        <div>
            {filterCategories.categories.map((e, i) => {
                if (e.options.length < 1) return <div>Loading</div>
                return (
                    <div key={i}>
                        <CategoryTitle text={e.category} />
                        {e.options.map((element, j) => (
                            <div key={j}>
                                <FilterCheckbox category={e.category} option={element} />
                                {(j < e.options.length-1) ? <Divider /> : null}
                            </div>
                        ))}
                        <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default Cpu