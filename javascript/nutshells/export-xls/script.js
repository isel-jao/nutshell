const people = [
  { name: "John", age: 20 },
  { name: "Mary", age: 30 },
  { name: "Peter", age: 40 },
  { name: "Susan", age: 50 },
  { name: "George", age: 60 },
];

const exportBtn = document.getElementById("export-btn");

const dataContainer = document.getElementById("data-container");

people.forEach((person) => {
  const div = document.createElement("div");
  div.innerHTML = `${person.name} - ${person.age} years old`;
  dataContainer.append(div);
});

const exportTXls1 = (data) => {
  let str = Object.keys(data[0]).join(",") + "\r\n";

  str += data.map((person) => Object.values(person).join(",")).join("\r\n");

  const blob = new Blob([str], { type: "text/xls" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "people.xls";
  a.click();
};

const exportXls2 = (data) => {
  let str = "";
  str += Object.keys(data[0]).join("\t") + "\r\n";
  str += data.map((field) => Object.values(field).join("\t")).join("\r\n");

  let uri = "data:text/xls;charset=utf-8," + escape(str);

  let link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = "data.xls";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

exportBtn.addEventListener("click", () => {
  if (people.length === 0) return;
  exportXls2(people);
});
