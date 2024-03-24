import React from 'react'
import { useState } from 'react'

function GroceryCard({id,name,restaurant}) {


  return (
    <div className=' flex flex-col bg-slate-500 text-white p-2 border-solid-2'>
        <h1>ID: {id}</h1>
        <p> Ürün Adı: {name}</p>
        <p> Tedarikçi: {restaurant}</p>
    </div>
  )
}

export default GroceryCard