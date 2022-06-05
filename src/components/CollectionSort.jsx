

export function CollectionSort(props) {
    return (<div className="collection-sort">
        <label>{props.title}</label>
        <select>
            {props.data.map((item,index) => (<option key={index} value='/'>{item}</option>))}
        </select>
    </div>)
}