"use client";

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
    <div style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",  borderRadius: "12px", background: "rgba(255, 255, 255, 0.25)", backdropFilter: "blur(12px)",  WebkitBackdropFilter: "blur(12px)",  border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", position: "sticky",  top: "10px",  margin: "10px" 
    }}>
      <img 
        src="https://www.pngmart.com/files/4/Philadelphia-Eagles-PNG-Pic.png" 
        alt="Logo"
        style={{ height: "62px", width: "62px", marginLeft: "10px" }}
      />
      <h2 style={{ margin: 0 }}>About This Website</h2>
      
      <div style={{ display: "flex", gap: "10px" }}>
        {isLoggedIn ? (
          <div 
            style={{ 
              backgroundColor: "red",  padding: "13px", borderRadius: "10px", fontFamily: "Roboto",cursor: "pointer"
            }}
            onClick={onLogoutClick}
          >
            <h2 style={{ margin: 0 }}>Logout</h2>
          </div>
        ) : (
          <>
            <div 
              style={{ 
                backgroundColor: "#A0A0A0", padding: "13px", borderRadius: "10px", fontFamily: "Roboto",cursor: "pointer"
              }}
              onClick={onSigninClick}
            >
              <h2 style={{ margin: 0 }}>Sign In</h2>
            </div>
            <div 
              style={{ backgroundColor: "#2E97FF", padding: "13px", borderRadius: "10px", fontFamily: "Roboto",cursor: "pointer"
              }}
              onClick={onSignupClick}
            >
              <h2 style={{ margin: 0 }}>Sign Up</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}