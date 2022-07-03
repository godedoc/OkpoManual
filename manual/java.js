const take = document.getElementsByClassName("cleanBox");
function resetClean() {
  let i = 0;
  while (i < take.length) {
    take[i].checked = false; //i 번째 선택 해제
    i = i + 1;
  }
}

const take2 = document.getElementsByClassName("goBox");
function resetHome() {
  let i = 0;
  while (i < take2.length) {
    take2[i].checked = false; //i 번째 선택 해제
    i = i + 1;
  }
}
