import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"


function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="" element={<About/>}/>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
