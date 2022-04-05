import React from 'react';
import {Draggable} from 'react-beautiful-dnd'
import Card from "./Card";
function DragCard({item,index}){
    return(
        <Draggable key={item.id} draggableId={item.id} index={index} >
        {(provided, snapshot) => {
          return (
            <div className="dropCardContainer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
              style={{
                backgroundColor: snapshot.isDragging
                  ? "#263B4A"
                  : "", ...provided.draggableProps.style,
              }}
            >
            <Card name={item.name} company={item.company} />
            </div>
          );
        }}
      </Draggable>
    )}
export default DragCard;