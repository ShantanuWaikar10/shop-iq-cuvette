"use client"
import HomePage from '@/components/Home'
import ProductDetails from '@/components/ProductDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
