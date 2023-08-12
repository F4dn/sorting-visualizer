export default async function swap(e1, e2 ) {
  let speedId = document.getElementById("sorting-speed");
  let speed = speedId.value;
  console.log(speed); 
  e1.style.background = "red";
  e2.style.background = "red";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 25 - speed)
  );
  const style1 = window.getComputedStyle(e1);
  const style2 = window.getComputedStyle(e2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  e1.style.height = transform2;
  e2.style.height = transform1;

  // e1.style.background = "lightseagreen";
  // e2.style.background = "lightseagreen";
}
