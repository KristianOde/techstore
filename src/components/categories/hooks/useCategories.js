import React, {useState} from 'react'

const useCategories = (min, max) => {
    const [sliderValues, setSliderValues] = useState([min, max])

    function updateValues(values) {
        setSliderValues(values)
    }

    return [sliderValues, updateValues]
}

export default useCategories