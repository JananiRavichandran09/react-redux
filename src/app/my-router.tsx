import Home from "@/lib/components/home/home"
import Product from "@/lib/components/product/product"
import { Sidebar } from "@/lib/components/sidebar/sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const MyRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default MyRouter
