import React,{useState} from 'react'

import { 
  Divider,
  FormControl,
  Grid,
  RadioGroup, 
  Typography,
  FormControlLabel,
  Radio,
 } from '@mui/material'


import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const DemoCategory = [
  "pasta",
  "pizza",
  "sushi",
  "burger",
  "momo"
]

const demoFoodTypes = [
  {label:"All",value:"all"},
  {label:"Non-Vegetarian",value:"non_vegetarian"},
  {label:"Vegetarian",value:"vegetarian"}

]










function RestaurantDetails() {
  const [foodtype, setfoodtype] = useState("all")


  return (
    <div className=' px-5 lg:px-20 ' >
      <section className=''>
        <h3>home/indian/indian-restaurant</h3>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img className=' w-full h-[40vh] object-cover ' src='https://static.wanderon.in/wp-content/uploads/2024/01/ryu-rooftop-1-min-1600x900-1.webp' />
          </Grid>
          <Grid item xs={12} lg={6}>
            <img className=' w-full h-[40vh] object-cover ' src='https://static.wanderon.in/wp-content/uploads/2024/01/ryu-rooftop-1-min-1600x900-1.webp' />
          </Grid>
          <Grid item xs={12} lg={6}>
            <img className=' w-full h-[40vh] object-cover ' src='https://static.wanderon.in/wp-content/uploads/2024/01/ryu-rooftop-1-min-1600x900-1.webp' />
          </Grid>
        </Grid>
        <div className=' pt-3 pb-3'>
          <div className=''>
            <h1 className=' font-semibold text-4xl '>Indian Restroom</h1>
            <p1 className='text-gray-600 py-1 font-normal' >Lrispy fried chicken is a standard dish in the Cantonese cuisine of southern China and Hong Kong. Lip Sync allows you to synchronize your Text to Speech scripts or uploaded audio to animate a photo or video of your choice. The license has been updated to Apache 2.0, and we've removed the non-commercial restriction</p1>
            <div className='flex flex-col py-2 gap-2'>
              <p1 className=' text-gray-600   '>
                <LocationOnIcon />
                <span> Hongs Kichen CP </span>
              </p1>
              <p1 className=' text-gray-600 '>
                <CalendarMonthIcon/>
                <span> Mon 9.00 AM - Sat 11.00 PM</span>              
              </p1>
            </div>
          </div>
          <Divider/>

          <section className='pt-[2rem] lg:flex relative' >
            <div className=' space-y-10 lg:w-[20%] filter'>
              <div className=' box space-y-5 lg:sticky top-28'>
                <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                  Food Type
                </Typography>
                <FormControl className=' py-10 space-y-5' component={"fieldset"}>
                  <RadioGroup defaultValue="all" name='food_type' value={demoFoodTypes || "all"} >
                    {demoFoodTypes.map((item)=>(
                      <FormControlLabel 
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    ))}
                    
                    
                  </RadioGroup>


                </FormControl>


              </div>
            </div>
            <div classname=' space-y-10 lg:w-[80%] filter'>

            </div>


          </section>
        </div>
      </section>


    </div>
  )
}

export default RestaurantDetails