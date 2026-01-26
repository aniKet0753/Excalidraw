"use client";

interface NavbarProps {
  onSignupClick: () => void;
}
export function Navbar({ onSignupClick }: NavbarProps){
  return (
    <div style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.25)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", position: "sticky", top: "10px", margin: "10px", }}>
      <img src="https://www.pngmart.com/files/4/Philadelphia-Eagles-PNG-Pic.png" style={{ height: "62px", width: "62px", marginLeft: "10px" }}/>
      <h2 style={{ margin: 0 }}>About This Website</h2>
      <div style={{ backgroundColor:"green", padding:"13px" , borderRadius:"10px", fontFamily:"Roboto",}}><h2 onClick={onSignupClick} style={{cursor:"pointer"}}>SignUP</h2></div>
    </div>
  );
}