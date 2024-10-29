import React from 'react'
import { Card ,Chip } from '@mui/material'
const RestaurantCard = () => {
  return (
    <Card variant="outlined" >
        <div className={`${true?'cursor-pointer': "cursor-not-allowed"} relative`}>
            Ahishs
        </div>
        <Chip></Chip>
        

    </Card> 
  )
}

export default RestaurantCard