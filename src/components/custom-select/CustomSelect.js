import React from "react";

const CustomSelect = ({options, onChange, styleClass, selected, selectedValue}) => {

    return (
        <select className={styleClass} onChange={onChange}>
            <option value={selectedValue} selected >{selected}</option>
            {
                
                options.map((option, index) => 
                    <option  key={index} value={+option.id}>{option.name}</option>
                )
            }
        </select>
    )
}
export default CustomSelect