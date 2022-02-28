import { memo } from "react";

const FormInput = memo(({
    tag,
    value,
    onChange
}) => {
    return <input value={value} onChange={onChange} placeholder={tag} /> 
    })

    export { FormInput };