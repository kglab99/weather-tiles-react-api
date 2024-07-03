function InfoIcon() {
    const imgInfoStyle = {
      height: "1.5em",
      width: "1.5em",
      marginLeft: "auto",
      filter: "invert(1)",
    };
  
    return <img src={"/info.png"} style={imgInfoStyle}></img>;
  }
  
  export { InfoIcon };
  