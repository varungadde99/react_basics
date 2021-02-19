
const PrintList = (props) => {
    
    //printList name of object in App.js 
    const {printList} = props;
    //console.log(printList);
    
    //desturcture the elements in printList
    const pl = printList.map(({id,category,price,stocked,description,name}) =>
                <div key={id}>
                    <span>ID: {id}</span>
                    <span>Category: {category}</span>
                    <span>Price: {price}</span>
                    <span>Stocked: {stocked}</span>
                    <span>Name: {name}</span>
                    <span>Description: {description}</span>
                </div>
        )
    
    return pl;
}

export default PrintList;