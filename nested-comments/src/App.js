const CommentList =[
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},
{
  name :  "mayank",
  text : "hello there i am mayank my name is khan and i am not terrorist"
},

]

const Comment = ({data})=>{
   const {name , text} = data;
   return(
   <div className="nest"> 
   <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg " alt="logo" height={100} width={100}/>
   <p> Name:{name}</p>
   <p> comment:{text}</p>
   </div>
   );
}

const CommentDown = ({Comments})=>{
  
  return(
    Comments.map((item , index)=>(
    <div>
    
     <Comment key ={index} data={item} />
     
     <div className="nested">
    <CommentDown Comments={CommentList}/>
   
     </div>
     </div>
      ))
    
  )
}

const App = ()=>{
  return (
  <>
  <div>
  <h1>Comments : </h1>
  </div>
 <CommentDown Comments={CommentList} />
 </>
  );
}

export default App;