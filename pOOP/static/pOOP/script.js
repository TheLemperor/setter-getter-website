var numInputs = 0
function test() {
  var array = [];
  var output = "";
    for (let i = 0; i < numInputs + 1; i++) {
      var varname = "vname" + i;
      var vartype = "vtype" + i;
      var object = {setter:"", getter:""};

      if (document.getElementById("language").value === "python") {
        object.setter = `def set_` + document.getElementById(varname).value + `(self, x):
  self._` +document.getElementById(varname).value + ` = x`;

        object.getter = `def get_`+document.getElementById(varname).value+`(self):
  return self._`+document.getElementById(varname).value;
        array.push(object);
      }
      if (document.getElementById("language").value === "c++") {
        object.setter = `void set`+document.getElementById(varname).value+`(`+document.getElementById(vartype).value+` x) {
      `+document.getElementById(varname).value+` = x;
}`;
        object.getter = document.getElementById(vartype).value+` get`+document.getElementById(varname).value+`() const {
      return `+document.getElementById(varname).value+`;
}`;
        array.push(object);
      }
      if (document.getElementById("language").value === "java") {
        object.setter = `public void set`+document.getElementById(varname).value+`(`+document.getElementById(vartype).value+` x) {
      `+document.getElementById(varname).value+` = x;
}`;
        object.getter = `public ` + document.getElementById(vartype).value + ` get`+document.getElementById(varname).value+`() {
      return `+document.getElementById(varname).value+`;
}`;
        array.push(object);
      }
    }
    for (var i = 0; i < array.length; i++) {
      output += array[i].setter + "\n\n"  + array[i].getter+"\n\n";
    }
 
  document.getElementById('output').value = output;
}


function addInput() {
  const div = document.getElementById('input');
  const clone = div.cloneNode(true);
  numInputs += 1;
  idText = "input" + numInputs;
  clone.id = idText;
  clone.getElementsByTagName('input')[0].id = "vname" + numInputs;
  clone.getElementsByTagName('input')[1].id = "vtype" + numInputs;
  clone.getElementsByTagName('input')[0].value = "";
  clone.getElementsByTagName('input')[1].value = "";
  document.getElementById('inputs').appendChild(clone);
}

function removeInput() {
  idText = "input" + numInputs;
  let d = document.getElementById("input")
  let d_nested = document.getElementById(idText)
  document.getElementById('inputs').removeChild(d_nested);
  numInputs -= 1;
}

function copy() {
  var copyText = document.getElementById("output");

  copyText.select(); 

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the code!");
}