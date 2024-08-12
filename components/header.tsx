import React from 'react'
import { FloatingNav } from './ui/floating-navbar'
import navItems from '@/data/navItems'

export default function Header() {
  return (
    <div>
        <FloatingNav navItems={navItems} />
    </div>
  )
}
