
import Carousel from "./Carousel";
import Table from "./Table";
import axios from "axios";
import { useEffect, useState } from "react";
//var obj ={ name:"Table4", img:img4};


function Home(){
let [cake,setCake]=useState([])
let cakeapi="https://apibyashu.herokuapp.com/api/allcakes"        
useEffect(()=>{
    axios({
        method:"get", url:cakeapi
    
        }).then((response)=>{
            console.log("response from cake")
            setCake(response.data.data)
            //console.log(cake)
        },(error)=>{
            console.log("error from cake",error)
        })
    }, [])
    
    

    return(
        <div>
            <Carousel> </Carousel>
            <div className="row">
            
               {cake?.length>0 && cake.map((each,index)=>{
                   return <Table cakedata={each} key={index}/>
            
                } )}
               

               
            </div>
            
        </div>
        
    )
}

export default Home