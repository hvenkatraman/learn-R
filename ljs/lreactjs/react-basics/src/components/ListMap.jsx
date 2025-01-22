import React from"react";

const ListMap = ()=>{

    const items=["React","Vue","Next","Anguler"];

    return(

        <div>
            <ul>
                {
                    items.map((item)=><li>{item}</li>)
                
                }
            </ul>
        </div>

    );
}
export default ListMap;
