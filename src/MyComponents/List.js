import React from "react";
import { ListItem } from "./ListItem";
export const List = (props) => {
  return (
    <div className="container">
        <h3 className="text-center" >To-Do List</h3>
        {props.item.length === 0 ? <div className="container" align="center">
          <h2>All Done!</h2>
          <p>
            <img src="https://media.tenor.com/images/37de127c76110e949f54257742b322a7/tenor.gif" />
            <img src="https://media.tenor.com/images/e6edad9900a37d05c1f8dfff7f5ea7a4/tenor.gif" />
          </p>
        </div>: 
        props.item.map((item)=>{
            return <ListItem item={item} key={item.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}
