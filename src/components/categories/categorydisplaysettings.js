import React from 'react'
import { BsList, BsGrid3X3Gap } from 'react-icons/bs'

const CategoryDisplaySettings = ({ isGrid, setIsGrid }) => {
    
    function toggleDisplay() {
        if (isGrid) setIsGrid(false)
        else setIsGrid(true)
    }

    return (
        <div className="CategoryDisplaySettings">
            <div className="CategoryDisplaySettingsButtons">
                Velg visning: 
                <button
                    onClick={() => toggleDisplay()}
                    disabled={isGrid}
                >
                    <BsGrid3X3Gap />
                </button>
                <div className="HorizontalSeparator" />
                <button
                    onClick={() => toggleDisplay()}
                    disabled={!isGrid}
                >
                    <BsList />
                </button>
            </div>
        </div>
    )
}

export default CategoryDisplaySettings
