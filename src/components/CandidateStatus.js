import React, { useState,useContext,useEffect } from "react";
import "./candidate.css";
import Head from "./statusComponents/Head";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ColumnData from "./data/columnsData";
import { AppContext } from "../App";
import DropCard from "./statusComponents/DropCard";


const DragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        console.log(result)
        let sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        if(result.type==="column")
        {
        destItems.push(...sourceItems)
        sourceItems=[]
        }else{
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        }
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
            count:sourceItems.length
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
            count:destItems.length
          }
        });
       
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        });
        
    }
  };

function Status() {
  const [columnView,SetColumnView]=useState(ColumnData);
  const {state,dispatch}=useContext(AppContext);
  useEffect(
    ()=>{     
      Object.entries(columnView).map((data)=>{
        const itemsColumn=[...data[1].items];
        const updated=itemsColumn.map((item)=>{
           if(item.name.toLowerCase().includes(state.inputText.toLowerCase()))
           {
             return{
               ...item,
               show:true
             }
            }else{
              return{
                ...item,
                show:false
              }
            }
        })
        SetColumnView((c)=>{return {
          ...c,
          [data[0]]:{
            ...data[1],
            items:updated,
            count:updated.length
          }
        }})
      })
    }
    ,[state]);

  return (
    <div className="candidateContainer">
      <Head />
      <div className="temp">
        <div className="tempContainer">
          <DragDropContext
            onDragEnd={result => DragEnd(result, columnView, SetColumnView)}
          >
            {Object.entries(columnView).map(([columnId, colitem],index) => {
              return (
                <Droppable droppableId={columnId} type="column">
                  {provided=>{
                    return(
                      
                <div className="columnContainer" key={columnId} ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable key={columnId} draggableId={columnId} index={index} >
                  {provided=>{
                    return(
                      <div ref={provided.innerRef} {...provided.dragHandleProps}>
                  <div className="columnTitleCard" >
                    <div className="columnCardSide"></div>
                    <p className="columnName">{`${colitem.name}`}</p>
                    <p className="columnCount">- {colitem.count}</p>
                  </div>
                  <div className="dropCard" {...provided.draggableProps}>
                   <DropCard
                     columnId={columnId}
                     colitem={colitem}
                   />
                  </div>
                  </div>
                  )
                  }}
                </Draggable>
                  {provided.placeholder}
                </div>
                
                )
                  }}
                </Droppable>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Status;
