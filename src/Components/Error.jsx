import errImg from "/404.png";

export default function Error() {
  setTimeout(() => {
    window.location.reload();
  }, 1000);

  return (
    <>
      <img src={errImg} alt="" width="300px" />
    </>
  );
}
