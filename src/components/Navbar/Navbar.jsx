import React from 'react'

import { Avatar, Badge, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import { ShoppingCart } from '@mui/icons-material';


export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20px flex
     justify-between'> 
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>

            <li className='logo font-semibold text-gray-200 text-2xl'>
                FoodDelhi
            </li>

        </div>

        <div className='flex item-center lg:space-x-10 space-x-2'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div className=''>
                <Avatar sx={{bgcolor:"white",color:pink.A400}}>C</Avatar>

            </div>
            <div className=''>
                <IconButton>
                    <Badge badgeContent={2} sx={{bgcolor:pink.A400}}>
                        <ShoppingCart sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>

        </div>
    </div>
     
  )
}
