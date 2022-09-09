import "./App.scss";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
// import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={"Hola! Bienvenido a mi primera app con react!"}/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
