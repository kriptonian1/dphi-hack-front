import { Route, Routes } from "react-router-dom"
import { Details, Edit, Home, PageNotFound } from "./pages"

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
      <Route path="/edit" element={<Edit />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
