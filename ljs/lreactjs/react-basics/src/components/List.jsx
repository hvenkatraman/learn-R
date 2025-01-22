import React from"react";

const List = ()=>{

    const items=["React","Vue","Next","Anguler"];

    return(

        <div>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
                <li>{items[3]}</li>
            </ul>
        </div>

    );
}
export default List;
