import styled from "@emotion/styled";


interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label: string;
    id:string;
    value:string;
    checked:boolean;
    onChange:() => void;
   }


export const EstimateBudget = ({id,value,label,checked,onChange}:LabelProps)=>{
    return(
        <Container>
            <Input 
            type='radio' 
            name='budget' 
            id={id} 
            value={value} 
            checked={checked}//선택 상태 제어
            onChange={onChange}
            />
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

&:checked{
    border:7px solid rgba(0, 160, 94, 1);
    background-color:white;
}
`
const Label = styled.label`
font-size: 16px;
color:rgba(142, 142, 142, 1);
cursor: pointer;
font-family:'PretendardMedium';

input:checked ~& {
    color:rgba(0, 160, 94, 1);
}
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
