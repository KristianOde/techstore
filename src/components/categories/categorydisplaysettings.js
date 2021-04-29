import React from 'react'
import { BsGrid3X3Gap } from 'react-icons/bs'
import { HiViewList } from 'react-icons/hi'

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
                    <HiViewList />
                </button>
            </div>
        </div>
    )
}

export default CategoryDisplaySettings
