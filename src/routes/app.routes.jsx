import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details'
import { DetailsVisitor } from '../pages/DetailsVisitor'

import { Home } from '../pages/Home'
import { New } from '../pages/New'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/detailsvisitor/:id" element={<DetailsVisitor />} />
      <Route path="/new" element={<New />} />
      
    </Routes>
  )
}