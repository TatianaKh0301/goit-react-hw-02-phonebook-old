import React from "react";
import { LabelFilter, LabelWrap, InputFilter } from "./Filter.styled";

const Filter = ({value, onChange}) => (
    <LabelFilter><LabelWrap>Find contacts by name</LabelWrap>
        <InputFilter 
            type="text" 
            value={value} 
            onChange={onChange}
        />
    </LabelFilter>
);

export default Filter;