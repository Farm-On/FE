import styled from "@emotion/styled";
//import { useState } from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label: string;
    id:string;
    value:string;
   }


export const EstimateBudget = ({id,value,label}:LabelProps)=>{
    // const [selected,setSelected] = useState<boolean>(false);
    // const handleClick = ()=>{
    //      setSelected(true)
    // };
    return(
        <Container>
            <Input type='radio' name='budget' id={id} value={value}/>
            <Label htmlFor = {id}>{label}</Label>
        </Container>
    )
}




const Input = styled.input`
appearance:none;
width: 22px;
height: 22px;
border: 1px solid rgba(142, 142, 142, 1);
border-radius:100%;
cursor: pointer;
`
const Label = styled.label`
font-size: 16px;
color: #333;
cursor: pointer;
`


const Container = styled.div`
display:flex;
gap:12px;
align-items:center;
min-width:167px;
width:fit-content;
height:24px;
white-space:nowrap;
`
