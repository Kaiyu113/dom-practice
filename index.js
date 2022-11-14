const Container = document.getElementById("Container");
// //create element
// console.log(p);
// //loop作业
// for (i = a.length - 1; i >= 0; i--) {
//   abc.removeChild(a[i]);
// }
// //regex
// //验证密码强度/纯数字 纯小写字母 纯大写字母 低强度红色
// //const specialChatacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const normalCharacter = /^\w+$/;
const lowerCase = /^[A-Z]+$/;
const upperCase = /^[a-z]+$/;
const number = /^\d+$/;
const userNameReg = /^\w{4,8}$/;
// //特殊符号配合大小写加数字 高强度绿色
// searchInput.oninput = function () {
//   checkLevel(searchInput.value);
// };
// //console.log(searchInput.value);
function checkLevel(input, div, tagName) {
  //   console.log(input);
  //   console.log(div);
  //   console.log(tagName);
  const p = document.createElement("p");
  p.id = tagName;
  if (input) {
    switch (tagName) {
      case "password":
        if (!normalCharacter.test(input)) {
          p.innerText = "have special character";
          p.style.color = "green";
          div.appendChild(p);
        } else if (
          lowerCase.test(input) ||
          upperCase.test(input) ||
          number.test(input)
        ) {
          p.innerText = "low security";
          p.style.color = "red";
          div.appendChild(p);
        } else {
          p.innerText = "middium security";
          p.style.color = "yellow";
          div.appendChild(p);
        }
        break;
      case "re-password":
        console.log(password.children[1].value);
        console.log(input);
        if (
          input === password.children[1].value &&
          password.children[1].value
        ) {
          console.log("match");
          p.innerText = "password Match";
          p.style.color = "green";
          div.appendChild(p);
        } else {
          p.innerText = "not Match";
          p.style.color = "red";
          div.appendChild(p);
        }
        break;
      default:
        if (userNameReg.test(input)) {
          p.innerText = "good username";
          p.style.color = "green";
          div.appendChild(p);
        } else {
          p.innerText = "username should between 4-8";
          p.style.color = "red";
          div.appendChild(p);
        }
    }
  } else if (document.getElementById(tagName)) {
    console.log(document.getElementById(tagName));
    div.removeChild(p);
  }
}
InputModel("username", "no", "text");
InputModel("password", "no", "password");
InputModel("re-password", "no", "password");

// for (let i = 0; i < signupInput.length; i++) {
//   signupInput[i].children[1].onblur = function () {
//     console.log(signupInput[i].children[1].value);
//     checkLevel(signupInput[i].children[1].value, signupInput[i]);
//   };
//}

function InputModel(spanName, noticeObject, inputType) {
  const input = document.createElement("input");
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = spanName;
  div.id = spanName;
  input.type = inputType;
  div.appendChild(span);
  div.appendChild(input);
  Container.appendChild(div);
  //add the verification
  const getDiv = document.getElementById(spanName);
  getDiv.children[1].onblur = function () {
    checkLevel(getDiv.children[1].value, getDiv, spanName);
  };
}
