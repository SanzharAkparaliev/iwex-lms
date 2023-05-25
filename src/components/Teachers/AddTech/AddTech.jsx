import React, { useState } from 'react'
import styled from './AddTech.module.css'
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineClose} from "react-icons/ai";
export const AddTech = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styled.add}>
        {
            open &&    <div  className={styled.modal}>
            <div className={styled.modal_card}>
                <div className={styled.modal_vel}>
                    <div className={styled.exitt}>
                        <AiOutlineClose onClick={()=> setOpen(false)} className={styled.exit}/>
                        </div>
                </div>
               
              
                
            </div>
        </div>
        }
     
         <button onClick={() => setOpen(true)} className={styled.addTech}>Add a Teacher <BiPlusMedical className={styled.icon_add}/></button>
              
    </div>
  )
}
