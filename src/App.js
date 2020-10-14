import React, { Component } from 'react';
import axios from "axios";
import Banner from "./Component/Banner";
import Spinner from 'react-bootstrap/Spinner'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
      obj:[],
      loading:true
     
    }
}

  componentDidMount(){
    axios.get('https://jsonware.com/json/688410e8f4013fbe56009d8e1621f2a4.json').then(res=>{
      console.log(res.data.MyData);
      this.setState({
        obj:res.data.MyData,loading:false

      })
      console.log(this.state.obj);
    }).catch(err=>{
      console.log("Something went wrong");
    })
     
     //console.log(this.state.listItem[0]);

  }
  render() {
    if(this.state.loading){
      return(
        <p className="h2 text-center mt-5">Loading....  <Spinner animation="border" /></p>
      )
    }
    return (
     <>
       {
         this.state.obj.map((value,index)=>
         {
           return <div className="container">
             <div className="text-center btn btn-lg btn-primary btn-block mt-2 mb-5"><strong>{value.headerTitle}</strong></div>
             <div className="row">
               {value.listItem.map((val,idx)=>{
                 return  <div className="col-sm-4  text-center col-md-2 col col-lg--2 mx-auto">
                   <figure>
                 <img style={{height:"200px",width:"200px"}} src={val.image}></img>
               <figcaption className="text-center mt-1 "><strong>{val.name}</strong></figcaption>
                 </figure>
               </div>

               })}
               <span>{(index+1)%2==0?<Banner /> :""}</span>
        
             </div>
             
             
           </div>

         })
       }
       <div className="container"> 
       <div className="row"><Banner/></div>
       </div>
     
      </>
    )
  }
}

export default App
