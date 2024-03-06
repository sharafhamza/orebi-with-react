import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Routes/RootLayout";
import { Home, Shop } from "./DefaultExport";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
