function encurtarURL() {
  // Verificar se o campo de texto está preenchidos
  let url = document.getElementById("input-url").value;
  if (!url) {
    alert("Preencha o campo de texto com uma URL");
    return;
  }

  let headers = {
    "Content-Type": "application/json",
    "apikey": "4daf0f9e84584190b9214f2049309621"
  }

  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" }
  }

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let inputUrl = document.getElementById("input-url");
      inputUrl.value = json.shortUrl;
    });
}

function copiar() {
  let inputUrl = document.getElementById("input-url");
  inputUrl.select();
  inputUrl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputUrl.value);

  alert("URL copiada para a área de transferência.");

}