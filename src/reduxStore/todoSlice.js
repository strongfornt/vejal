import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todosValue : [],
};


export const todoSlice = createSlice (
    {
        name: 'todo',
        initialState ,
        reducer : {
            Add_Todo:(state,action) =>{
                const existingTodo =state.todosValue.map(
                    (item) =>item.id ===action.payload.id
                );
                if(existingTodo){
                    state.todosValue.push(action.payload);

                }else{
                     state.todosValue = action.payload ;
                }

                
               
            }
        }
    }
)
export const {Add_Todo} = todoSlice.actions;
export default todoSlice.reducer;