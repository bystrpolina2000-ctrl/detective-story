console.log ("SCRIPT LOADED")
function changeScene(img, title, text, buttonsHTML) {
  document.getElementById("sceneImage").src = img;
  document.getElementById("title").innerText = title;
  document.getElementById("text").innerText = text;
  document.querySelector(".buttons").innerHTML = buttonsHTML;
}

function inspectRoom() {
  changeScene(
    "./room.jpg",
    "Осмотр комнаты",
    "В комнате почти ничего нет. Но старый письменный стол выглядит подозрительно.",
    `
      <button onclick="examineTable()">Осмотреть стол</button>
      <button onclick="leaveRoom()">Выйти из комнаты</button>
    `
  );
}

function examineTable() {
  changeScene(
    "./key.jpg",
    "Найдена улика",
    "В ящике стола лежит старый ключ. На нём выгравирован номер кабинета.",
    `
      <button onclick="goToCorridor()">Выйти в коридор</button>
    `
  );
}

function goToCorridor() {
  changeScene(
    "./corridor.jpg",
    "Коридор",
    "Следы ведут дальше по тёмному коридору.",
    `
      <button onclick="followClue()">Идти по следам</button>
    `
  );
}

function followClue() {
  changeScene(
    "./office.jpg",
    "Офис",
    "Ключ подходит к двери офиса. Внутри тебя ждёт разгадка.",
    `
      <button onclick="goToOffice()">Открыть кабинет</button>
    `
  );
}

function goToOffice() {
  changeScene(
    "./office.jpg",
    "Финальная локация",
    "Ты раскрываешь дело!",
    `
      <button onclick="location.reload()">Играть снова</button>
    `
  );
}

function leaveRoom() {
  changeScene(
    "./room.jpg",
    "Ты ушла",
    "Дело осталось нераскрытым...",
    `
      <button onclick="location.reload()">Начать заново</button>
    `
  );
}