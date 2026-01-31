interface Inputprops {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function Input({placeholder,value,onChange,type} : Inputprops){
  return(
    <input  value={value} onChange={onChange} placeholder={placeholder} type="text"style={{ padding: "20px 12px", fontSize:"16px", borderRadius:"5px", border:"1px solid #ccc", width:"500px",placeItems:"center", marginTop:"60px", marginBottom:"1px",}}></input> )}