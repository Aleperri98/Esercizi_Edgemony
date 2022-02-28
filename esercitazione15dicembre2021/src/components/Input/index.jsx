const Input = ({valueof}) => (
    <div className="inputValue">
        <label htmlFor="{valueof}">Enter the {valueof}</label>
        <input type="number" id="{valueof}"></input>
    </div>
) 

export default Input


