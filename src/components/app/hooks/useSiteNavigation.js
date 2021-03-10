import React, { createContext, useState, useContext } from 'react'

const [currentPageMap, setCurrentPageMap] = useState([])

const newCurrentPage = (page) => {
    setCurrentPage(page)
}

const currentPage = () => currentPageMap[currentPageMap.length-1]

export {currentPage, newCurrentPage}