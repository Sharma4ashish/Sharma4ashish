import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



const RestaurantCard = () => {
  return (
    <Card className="w-[18rem] rounded-t-md  " variant="">
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
      
        <img
          src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" w-full h-[10rem] rounded-t-md object-cover"
        />
        <Chip
          className=" absolute top-2 left-2"
          size="small"
          color={true ? "success" : "error"}
          label={true ? "opened" : "closed"}
        />
      </div>
      <div className="restaurantDetails bg-neutral-800 p-4 lg:flex  w-full justify-between ">
        <div className= " space-y-1">
          <p className=" font-semibold text-lg text-gray-300">Indian Slow Food</p>
          <p className=" text-sm text-gray-400 ">The Grand New Delhi's restaurant provides a unique experience</p>
        </div>
        <div>
          <IconButton>
            {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
