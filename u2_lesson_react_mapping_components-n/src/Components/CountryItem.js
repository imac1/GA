

export default function CountryItem (props) {

    return (
        <li className="country-item" key={props.name}>
            <h3>{props.name}</h3>
            <h5>{props.capitol}</h5>


        </li>
    ) 

}