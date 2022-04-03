import React, { useState,useContext,useEffect } from "react";
import "./candidate.css";
import Head from "./statusComponents/Head";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ColumnData from "./data/columnsData";
import Card from "./statusComponents/Card";
import { AppContext } from "../App";


const DragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
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
            {Object.entries(columnView).map(([columnId, colitem], index) => {
              return (
                <div className="columnContainer" key={columnId}>
                  <div className="columnTitleCard">
                    <div className="columnCardSide"></div>
                    <p className="columnName">{`${colitem.name}`}</p>
                    <p className="columnCount">- {colitem.count}</p>
                  </div>
                  <div className="dropCard">
                    <Droppable droppableId={columnId} key={columnId}>
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
                              if(item.show===false)
                              {
                                return;
                              }
                                return(
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                 
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                        className="dropCardContainer"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "",
                                        
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                        <Card
                                            name={item.name}
                                            company={item.company}
                                        />
                                    </div>
                                  );
                                }}
                              </Draggable>
                                );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Status;
