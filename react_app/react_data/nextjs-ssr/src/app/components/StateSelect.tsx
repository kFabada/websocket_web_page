import React, { type Dispatch, type SetStateAction } from "react";
import "@/app/style/Select.css"

interface Props<T> {
    formData: T
    setFormData: Dispatch<SetStateAction<T>>
    object: keyof T
    item:Array<string>
    optionNullValue:string
}

export default function StateSelect<T>({ setFormData, formData, object, item, optionNullValue }: Props<T>) {
    const select = item.map((value, i) =>
        <option key={i} value={value}>{value}</option>
    )
    return (
        <select className="select" onChange={
            (e) => setFormData(
                { ...formData, [object]: e.target.value })}>
            <option>{optionNullValue}</option>        
            {select}
        </select>

    )
}