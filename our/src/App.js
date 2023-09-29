import Master from "./Component/Master";
import { Header } from "./Component/Header";

const App=( {children})=> {
  return (
      <>
      <Master></Master>
       <Header></Header>
      <div>
{children}
      </div>
      </>
  );
}

export default App;
