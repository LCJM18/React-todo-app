const colorsTask = ['#0DD9D9', '#731D55', '#F2A30F', '#F26E22'];
export default function getRandomColor() {
  return {
    backgroundColor: colorsTask[Math.floor(Math.random() * colorsTask.length)],
  };
}
