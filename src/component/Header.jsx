"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { EnquiryButton } from "@/ClientComponent/EnquiryButton"

export default function Header() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`w-full fixed top-0 left-0 z-1000 transition-all duration-300 
            ${isHome ? "bg-transparent text-white" : "bg-white text-black shadow-md"}`}>

            <div className={`container mx-auto flex items-center justify-between px-4 py-4`}>
                {/* Logo */}
                <h1 className={`text-2xl font-bold ${isHome ? "text-white" : "text-black"}`}>
                    📸 StudioName
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex flex-1 justify-center gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/testimonials">Testimonials</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex">
                    <EnquiryButton isHome={true} className="px-4 py-2 rounded-md transition" />
                </div>

                {/* Mobile Hamburger */}
                <button className={`lg:hidden ${isHome ? "text-white" : "text-black"}`} onClick={() => setIsOpen(true)} aria-label="Open Menu">
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/logo.png" className="w-24" alt="logo" />
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 text-black">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)} />}
        </header>
    )
}
