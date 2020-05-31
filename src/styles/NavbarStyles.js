import sizes from "./sizes";

export default {
  Navbar: {
    backgroundColor: "#363636",
    color: "#05dfd7",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#1b262c",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#05dfd7",
      fontWeight: "bold",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
      backgroundColor: "#1b262c",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "#05dfd7",
      outline: "none",
      boxShadow: "none",
      width: "24px",
      height: "24px",
      marginLeft: "-10px",
      marginTop: "-8px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  selectContainer: {
    backgroundColor: "white",
    padding: "0 5px",
    borderRadius: "5px",
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
