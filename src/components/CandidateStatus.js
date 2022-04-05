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
        let sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        if(result.type==="column")
        {
          if(sourceItems.length==0) return;
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
    <div style={{display: "flex",flexDirection: "column",height: "100%",backgroundColor: "rgb(216, 216, 216)"}}>
      <Head />
      <div style={{overflowX: "scroll",overflowY: "scroll",width: "1310px",height: "452px",marginTop:"60px"}}>
        <div style={{display: "flex",margin:"20px",gap:"20px"}}>
          <DragDropContext onDragEnd={result => DragEnd(result, columnView, SetColumnView)} >
            {Object.entries(columnView).map(([columnId, colitem],index) => {
              return (
                <Droppable droppableId={columnId} type="column">
                  {provided=>{
                    return(
                <div style={{display: "flex",flexDirection: "column",minWidth: "250px",minHeight:" 500px",margin:"10px",gap:"20px"}}
                 key={columnId} ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable key={columnId} draggableId={columnId} index={index} >
                  {provided=>{
                    return(
                      <div ref={provided.innerRef} >
                  <div style={{backgroundColor: "white",width: "100%",height:"40px",fontSize:" 1.1rem",fontWeight: "600",display: "flex",alignItems: "center",borderRadius: "5px",overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap"}}
                   {...provided.dragHandleProps} >
                    <div style={{height:"100%",width:"5px",backgroundColor: "rgb(243, 51, 44)"}}></div>
                    <p style={{margin: "10px",color: "rgb(36, 33, 33)"}}>{`${colitem.name}`}</p>
                    <p style={{color:"rgb(97, 94, 94)"}}>- {colitem.count}</p>
                  </div>
                  <div style={{color: "black"}} {...provided.draggableProps}>
                   <DropCard columnId={columnId} colitem={colitem}/>
                  </div>
                  </div>
                  )
                  }}
                </Draggable>
                  {provided.placeholder}
                </div>
                )}}
                </Droppable>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );}
export default Status;
