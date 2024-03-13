import React,{useState} from 'react'

function List() {
    const [item ,setItem] =useState([]);
    const [inputvalue,setinputVlue]=useState("");
    const onClickHandler=()=>{
        
        setItem((prev)=>{
          const dataList=[...prev];
        dataList.push(inputvalue,);
        console.log(dataList);
        setinputVlue("");
        return dataList;
        
        

        })

        
        
        
    }
    const removeItem=(idx)=>{
      const updateItem=[...item]
      updateItem.splice(idx,1)
      setItem(updateItem);
    }
    


  return (
    <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
    <div
    style={{backgroundColor:"skyblue",padding:"20px"}}>
    <h2>Grecery Bud</h2>
      <div>
        <input  value={inputvalue}onChange={(e)=>{
            setinputVlue(e.target.value)
         

        }}type='text'></input>
        

        <button onClick={onClickHandler}>Add item</button>
      </div>
      {item.map((ele,index)=><p key={index}>{ele}<button style={{marginLeft:"150px",backgroundColor:"red"}} onClick={removeItem}>Delete</button></p>)}
      
    </div>
    </div>
  )
}

export default List
