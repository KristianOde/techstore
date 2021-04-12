import React from 'react'
import { useProductFilterContext } from '../hooks/useProductFilter'
import CategoryTitle from './categorytitle'
import Slider from './slider'

const PriceSlider = ({min, max}) => {

    // const updateValues = (element) => {
    //     let val = element.value
    //     let name = element.name
    //     console.log(element)
    //     if (name === "min" && val >= min && val <= max) {
    //         setValues([val, values[1]])
    //         if (val > values[1]) {
    //             setValues([val, val])
    //         }
    //     } 
    //     else if (name === "max" && val >= min && val <= max ) {
    //         setValues([values[0], val])
    //         if (values[0] > val) {
    //             setValues([val, val])
    //         }
    //     }
    // }

    const {priceRange: values, updateValues} = useProductFilterContext()

    const ShowRange = (num1, num2, dynamic = true) => {
        return (
            <div style={{
                margin: "0px 0px", display: "flex", 
                flexDirection: "row", color: !dynamic ? "grey" : "black",
                textDecoration: !dynamic ? "none" : "underline"
            }}>
                <div style={{marginLeft: "0", textAlign:"start"}}>{num1},-</div>
                <div style={{marginLeft: "auto", textAlign:"end"}}>{num2},-</div>
            </div>
        )
    }
    

    return (
        <div className="PriceSlider">
            {/* Deaktivert inntil videre, da jeg bruker for mye tid på funksjonene */}
            {/* <form onSubmit={() => updateValues()}>
                Input price: 
                <input type="text" name="min" id="" value={values[0]}
                    onChange={e => updateValues(e.target)}
                />
                <input type="text" name="max" id="" value={values[1]}
                    onChange={e => updateValues(e.target)}
                />
                <button>OK</button>
            </form> */}
            <CategoryTitle text={"Juster ønsket pris"} />
            {ShowRange(values[0], values[1])}
            <Slider 
                values={values} setValues={updateValues}
                min={min} max={max}
            />
            <div></div>
            {ShowRange(min, max, false)}
        </div>
    )
}

export default PriceSlider
