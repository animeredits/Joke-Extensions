const joke = async () => {
  const result = await fetch("https://icanhazdadjoke.com/slack");
  const jokeData = await result.json();
  const jokeText = jokeData.attachments[0].text;
  const jokeElement = document.getElementById("jokeElement");

  jokeElement.innerHTML = jokeText;
};

joke();