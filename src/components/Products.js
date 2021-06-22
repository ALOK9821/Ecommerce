import { requirePropFactory } from '@material-ui/core'
import React from 'react'
import Itemcard from './Itemcard'
import Sam2 from './sam2nobg.png'
import iphone from './phonenobg.png'
import oneplus from './oneplusnobg.png'
import Carousel from './Carousel'
const Products = () => {
  const objectosend ={
    Name :'Iphone',
    Image : iphone,
    Price : '1000',
  }
  const objectosend2 ={
    Name :'Samsung',
    Image : Sam2,
    Price : '900',
  }
  const objectosend3 ={
    Name  :'oneplus',
    Image : oneplus,
    Price : '700',
  }
    return (
      <>
        <div className="d-flex p-3  flex-wrap justify-content-between align-items-center">
          <Itemcard 
          imgg = {objectosend.Image}
          Name ={objectosend.Name}
          Price = {objectosend.Price}
           />
          <Itemcard 
          imgg ={objectosend2.Image}
          Name ={objectosend2.Name}
          Price = {objectosend2.Price}
           />
          <Itemcard 
          imgg ={objectosend3.Image}
          Name ={objectosend3.Name}
          Price = {objectosend3.Price}
           />
          <Itemcard 
          imgg ={objectosend.Image}
          Name ={objectosend.Name}
          Price = {objectosend.Price}
           />
          <Itemcard 
          imgg ={objectosend2.Image}
          Name ={objectosend2.Name}
          Price = {objectosend2.Price}
          />
          <Itemcard 
          imgg ={objectosend3.Image}
          Name ={objectosend3.Name}
          Price = {objectosend3.Price}
          />
          <Itemcard
          imgg ={objectosend.Image}
          Name ={objectosend.Name}
          Price = {objectosend.Price}
           />
          <Itemcard 
          imgg ={objectosend2.Image}
          Name ={objectosend2.Name}
          Price = {objectosend2.Price}
           />
          <Itemcard 
          imgg ={objectosend3.Image}
          Name ={objectosend3.Name}
          Price = {objectosend3.Price}
           />
        </div>
        </>
    )
}

export default Products
