import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola! Bienvenido a mi primera app con react!"}/>
    </>
  );
}

export default App;
