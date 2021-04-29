import React from 'react'
import useFirestoreCategories from '../../firebase/useFirestoreCategories'
import ProductFilterProvider, { useProductFilterContext } from '../hooks/useProductFilter'
import ProductBox from '../../product/productbox'
import useFireImage from '../../firebase/useFireImage'
import './categoryresults.css'

const CategoryFilterResults = ({products, isGrid}) => {
    {/** For testing */}
    const { urlFilterParameter } = useProductFilterContext();
    //var produktNavn = products.map(({ Navn }) => Navn).toString()
    

    //const [image] = useFireImage(produktNavn, null)
    //console.log(produktNavn)

    return (
        <div className="CategoryResults">
            {/* sort bar */}
            
            {products.map((product, i,) => {

                return (
                    <ProductBox 
                        isGrid={isGrid} 
                        key={i} 
                        product={product} 
                        index={i} 
                        arrayLength={products.length}
                    />
                    
                )
            })}
        </div>
    )
}

export default CategoryFilterResults
