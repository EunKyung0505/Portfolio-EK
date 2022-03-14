export function randomColor() {
    const rNum = () => (Math.floor(Math.random() * 255));
    return `rgb(${rNum()}, ${rNum()}, ${rNum()})`;
  }