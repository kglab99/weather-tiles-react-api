function ChartIcon() {
  const imgInfoStyle = {
    height: "1.5em",
    width: "1.5em",
    marginLeft: "auto",
    filter: "invert(1)",
  };

  return <img src={"/chart.png"} style={imgInfoStyle}></img>;
}

export { ChartIcon };
