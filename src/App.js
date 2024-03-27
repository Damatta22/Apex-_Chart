import Chart from "./components/charts/Chart";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Login />
      <Chart />
    </>
  );
}

export default App;
