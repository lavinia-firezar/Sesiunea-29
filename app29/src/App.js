import "./App.css";
// Importam hook-ul useState din react.
import { useState } from "react";

function App() {
  // Hook-urile sunt mereu create la inceputul componentei.
  // useState primeste ca parametru starea initiala si returneaza un array cu doua valori.
  // Folosim array destructuring: primul element este starea curenta, iar al doilea este o functie care poate schimba starea curenta.
  // Culoarea de fundal a aplicatiei (initial rosu):
  // const [variabila, functieSetareVariabila] = useState();
  const [bgColor, setBgColor] = useState("red");
  // Afisarea meniului (initial ascuns):
  const [isMenuVisible, setMenuVisible] = useState(false);
  // Produsul afisat pe ecarn (initial aspirator zanussi cu pretul 1500):
  const [temperature, setTemperature] = useState(0);
  const [product, setProduct] = useState({
    name: "Aspirator Zanussi",
    price: 1500,
  });

  // let someInternalFlag = "test";

  function handleButtonClick() {
    // console.log(" - am apasat buton ");

    // console.log(" - bgColor: ", bgColor);
    alert("Salut. Ai apasat butonul!");

    setBgColor("green");

    // console.log(" -> .     bgColor: ", bgColor);
  }

  // Functie care se executa cand userul alege o noua culoare.
  function handleOnColorChange(event) {
    // Extragem valoarea introdusa de user.
    const newColor = event.target.value;
    // Cand apelam setColor, componenta noastra se serandeaza (reafiseaza).
    // La reafisare, useState ca returna noua culoare, pe care o vom reafisa pe ecran.
    setBgColor(newColor);
  }

  // Functie care se executa cand userul da click pe butonul meniu.
  function handleToggleMenu() {
    // v1
    // if (isMenuVisible === true) {
    //   setMenuVisible(false);
    // } else {
    //   setMenuVisible(true);
    // }

    // v2
    // const newToggleValue = isMenuVisible ? false : true;
    // setMenuVisible(newToggleValue);

    // v3
    // const newToggleValue = !isMenuVisible;
    // setMenuVisible(newToggleValue);

    // Apelam functia care actualizeaza state-ul dropdown-ului, cu noua valoare.
    // v3 - scurt
    setMenuVisible(!isMenuVisible);

    // v4
    // 100% corecta este varianta de mai jos. Daca noul state depinde de vechiul state, dam ca valoare o functie.
    // setMenuVisible((pervValue) => {
    //   return !pervValue;
    // });
  }

  // Functie care se executa cand userul da click pe butonul de schimbat pretul.
  function handlePriceChange() {
    // Generam un nou pret, cu o valoare random.
    const newPrice = Math.round(Math.random() * 500 + 1000);

    // State-ul pentru produs este un obiect, deci este nevoie să construim un obiect nou.
    // Noul produs contine tot ce continea vechiul produs, doar ca pretul este cel nou.
    // v1
    // product.price = newPrice;
    //
    // const newProduct = {
    //   name: product.name,
    //   price: product.price,
    // };

    // v2
    // product.price = newPrice;
    //
    // const newProduct = { ...product };

    // v3
    const newProduct = {
      ...product,
      price: newPrice,
    };

    setProduct(newProduct);
  }

  function handleChangeTemperature(event) {
    const temperature = event.target.value;
    setTemperature(temperature);
  }

  function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }

  return (
    <div className="App">
      {/* Evenimentul este pus direct pe tag-ul de HTML. */}
      <button
        onClick={() => {
          console.log("Salut");
        }}
        onDoubleClick={handleButtonClick}
      >
        Click Me
      </button>
      <div
        style={{
          // style este un obiect. Avem dubla pereche de acolade, deoarece prima pereche este folosita pentru a scrie JS in HTML.
          // Proprietatile lui style sunt cele de CSS, dar in format camelCase.
          // bgColor este state-ul nostru, si este modificat atunci cand userul selecteaza o alta culoare.
          backgroundColor: bgColor,
          margin: "20px",
          paddingTop: "40px",
        }}
        onClick={() => {
          alert("Ai apasat pe div!");
        }}
      >
        Apasa Aici
      </div>
      {/* Eventul este pus direct pe tag-ul de HTML.
      De remarcat ca onChange este echivalentul eventului "input" de la addEventListener. */}
      <input type="color" onChange={handleOnColorChange} />

      <div>
        <button onClick={handleToggleMenu}>My Mini Menu</button>
        <ul style={{ visibility: isMenuVisible ? "visible" : "hidden" }}>
          <li>Optiunea 1</li>
          <li>Optiunea 2</li>
        </ul>
      </div>
      <label>Temperatura in Celsius</label>
      <input
        type="text"
        value={temperature}
        onChange={handleChangeTemperature}
      />
      <div>Temperatura in Fahrenheit:{celsiusToFahrenheit(temperature)}</div>
      <div>
        {/* Afisam produsul pe ecran. */}
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        {/* Evenimentul este pus direct pe tag-ul de HTML. */}
        <button onClick={handlePriceChange}>Schimba pretul!</button>
      </div>
    </div>
  );
}

export default App;
