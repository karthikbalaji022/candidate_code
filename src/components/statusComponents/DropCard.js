import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DragCard from './DragCard'

function DropCard({columnId,colitem}){
    return(
        <Droppable droppableId={columnId} >
        {(provided, snapshot) => {
          return (
            <div
              className="droppableContainer"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                  background: snapshot.isDraggingOver
              ? "lightblue"
              :"",
                padding: 4,
                width: "100%",
                minHeight: "500px",
              }}
            >
              {colitem.items.map((item, index) => {
                if(item.show===false) return;
                  return(
                      <DragCard
                        item={item}
                        index={index}
                      />
                  );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    )
}
export default DropCard;