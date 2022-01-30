import {act} from "react-dom/test-utils"
import {render} from "react-dom"
import App from "./App"
let container =null;

it("renders without crashing",()=>{
const div =document.createElement("div");
  render(<App />,div)

})
