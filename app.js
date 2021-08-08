const form = document.querySelector(".form");
const chat = document.querySelector(".chat");

form.addEventListener("submit", (e) => {
  const text = form.message.value;
  if (text.length) {
    const formatedMessage = formatMessage(text);
    addMessage(formatedMessage);
    form.reset();
  }
  e.preventDefault();
});

function formatMessage(text) {
  const message = `
  <div class="chat__message chat__message--user">
            <img src="images/2.jpg" alt="author photo" class="chat__avatar" />
            <div class="chat__text">
              ${text}
            </div>
          </div>
  `;
  return message;
}

function addMessage(message) {
  chat.innerHTML += message;
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}
