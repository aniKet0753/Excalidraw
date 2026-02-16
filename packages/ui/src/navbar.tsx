"use client";
import { Butoom } from "./button";

interface NavbarProps {
  isLoggedIn: boolean;
  onSignupClick: () => void;
  onSigninClick: () => void;
  onLogoutClick: () => void;
}

export function Navbar({ 
  isLoggedIn, 
  onSignupClick, 
  onSigninClick,
  onLogoutClick 
}: NavbarProps) {
  return (
    <div style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",  borderRadius: "12px", background: "rgba(255, 255, 255, 0.75) ", backdropFilter: "blur(12px)",  WebkitBackdropFilter: "blur(12px)",  border: "1px solid rgba(0, 0, 0, 0.06)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)", position: "sticky",  top: "10px",  margin: "10px" 
    }}>
      <img src="https://www.pngmart.com/files/4/Philadelphia-Eagles-PNG-Pic.png" alt="Logo"style={{ height: "62px", width: "62px", marginLeft: "10px" }} />
      <h2 style={{ margin: 0, color:"black" }}>About This Website</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {isLoggedIn ? (
          <div 
            style={{ backgroundColor: "red",  padding: "13px", borderRadius: "10px", fontFamily: "Roboto",cursor: "pointer"
            }} onClick={onLogoutClick}>
            <h2 style={{ margin: 0 }}>Logout</h2>
          </div>
        ) : (
          <>
            <div  style={{  backgroundColor: "transparent",padding: "13px",borderRadius: "10px",fontFamily: "Roboto",cursor: "pointer", border: "2px solid #667eea", color: "#667eea",textAlign: "center",transition: "all 0.3s ease" }}onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#667eea";e.currentTarget.style.color = "white";}}onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#667eea";}} onClick={onSigninClick}>
              <h2 style={{ margin: 0 }}>Sign In</h2>
            </div>
            <div style={{ backgroundColor: "#667eea",padding: "13px",borderRadius: "10px", fontFamily: "Roboto",cursor: "pointer",color: "white",textAlign: "center", transition: "all 0.25s ease"}}
             onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#5568d3";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 5px 15px rgba(102, 126, 234, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#667eea";
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "none";
  }}onClick={onSignupClick}>
            <h2 style={{ margin: 0 }}>Sign Up</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}