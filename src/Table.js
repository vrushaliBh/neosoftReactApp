function Table(props){
    return(
        <div class="card" style={{width: "17rem"}}>
            <img src={props.cakedata.image} style={{"height": "200px"}} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title">{props.cakedata.name}</h5>
                <p className="card-text">{props.cakedata.price}</p>
            </div>
        </div>
)
    
}



    
    export default Table