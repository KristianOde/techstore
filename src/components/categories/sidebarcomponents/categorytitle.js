import React from 'react'

const CategoryTitle = ({text}) => {
    const style = {
        fontWeight: "bold",
        textAlign: "left"
    }
    return (
        <div style={style}>
            {text}
        </div>
    )
}

export default CategoryTitle
