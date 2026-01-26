interface cardprops {
  title: string;
}

export function Card({ title }: cardprops) {
  return (
    <div style={{marginTop:"3px"}} title={title}>
      <h2 style={{ fontSize:"40px", color:"black",fontFamily:"Roboto", display:"flex", justifyContent:"center"}}>{title}</h2>
    </div>
  );
}
