import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"


function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
