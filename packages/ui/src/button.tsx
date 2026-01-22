interface Butoonprops {
  label: string;
    onClick?: () => void;
}

export function Butoom({ label , onClick}: Butoonprops) {
  return (
    <button
    onClick={onClick}
      style={{

        height:"50px",
        width:"200px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        border: "none",
        borderRadius: "6px",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: 500,
        cursor: "pointer",
        marginTop:"30px"
      }}
    >
      {label}
    </button>
  );
}
