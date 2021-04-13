import React from 'react'
import { Range, getTrackBackground } from 'react-range'

//** https://www.npmjs.com/package/react-range */
const Slider = ({values, setValues, min, max}) => {
    return (
        <div>
            <Range
                step={1}
                min={min}
                max={max}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="InnerRangeTrack"
                        style={{
                            background: getTrackBackground({
                                min,
                                max,
                                values,
                                colors: ["rgb(192, 192, 192)", "#44F8DE", "rgb(192, 192, 192)"]
                            })
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="RangeThumbs"
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />
        </div>
    )
}

export default Slider
