import { Route, Routes } from "react-router-dom"
import { Details, Edit, Home, NewHack, PageNotFound } from "./pages"

function App() {

  console.log('%cThora to appreciation banta hai na 😔', `
  background: #003145;
  font-weight: bold;
  padding: 5px 20px;
`);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<NewHack />} />
      <Route path="/create-event" element={<Edit />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
