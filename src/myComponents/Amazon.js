import React, { useState } from 'react'
import Cards from './Cards'
import ProductData from './ProductData'
import "../Style/amazon.css"

export default function Amazon({handleClick}) {
   
  return (
    <>
        <section>
            {
                ProductData.map((item) => (
                    <Cards item = {item} key = {item.id} handleClick = {handleClick} />
                ))
            }
        </section>
    </>
  )
}
