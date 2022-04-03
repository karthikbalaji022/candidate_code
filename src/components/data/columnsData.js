import React from "react";
import {v4 as uuid} from 'uuid'
import open from '../data/OpenColumnData'
import contact from '../data/ContactedColumnData'
import written from '../data/WrittenColumnData'
import technical from '../data/TechnicalColumnData'
import cultural from '../data/CulturalColumnData'


const columnData = {
  
    [uuid()]: {
      name: "Open",
      items: open,
      count:open.length,
    },
    [uuid()]: {
      name: "Contacted",
      items: contact,
      count:contact.length,
    },
    [uuid()]: {
      name: "Written Test",
      items: written,
      count:written.length,
    },
    [uuid()]: {
      name: "Technical Round",
      items: technical,
      count:technical.length,
    },
    [uuid()]: {
      name: "Cultural fit round",
      items: cultural,
      count:cultural.length,
    }
  };

  export default columnData;