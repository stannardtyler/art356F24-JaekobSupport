let data;
let url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa24f4eD7LblaQUvTQR5c7ropY52MnpXbkDVKGiPy9yHGH43qtkO5VMYk9nORR3A/pub?gid=1539485665&single=true&output=csv";

function preload() {
  data = loadTable(url, "csv", "header");
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent("project");
}

function draw() {
  background(220);

  if (data) {
    let numRows = data.getRowCount();
    let numCols = data.getColumnCount();

    let names = data.getColumn("Characters");
    let teens = data.getColumn("18-29");
    let adults = data.getColumn("30-39");

    let lessThanOne = data.findRow("Less than 1 hour", "Characters");
    let oneToFive = data.findRow("1 to 5 hours", "Characters");
    // let sixToTen = data.findRow("6 to 10 hours", "Characters");
    // let elevenToFifthteen = data.findRow("11 to 15 hours", "Characters");
    // let sixtennToTwenty = data.findRow("16 to 20 hours", "Characters");

    for (let i = 0; i < numCols; i++) {
      let x = 100;
      let columnName = data.columns[i + 1];

      let valueOne = lessThanOne.get(columnName);
      text(valueOne, x + i * 50, 500);
      let valueTwo = oneToFive.get(columnName);
      text(valueTwo, x + i * 50, 550);
    }

    for (let i = 0; i < numRows; i++) {
      let x = 50;
      let y = 100 + i * 50;
      let w = teens[i];
      let h = 10;
      fill(0);

      rect(x, y, w, h);

      textAlign(LEFT);
      fill(0);
      textSize(14);
      text(names[i], x, y - 5);

      textAlign(LEFT);
      text("18-29", x, 50);
    }
  }
}
