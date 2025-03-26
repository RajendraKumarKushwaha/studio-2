"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog } from "@headlessui/react"
import { FadeIn } from "@/ClientComponent/AnimationFadeIn"

const leftImage = "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/17.jpg"

const galleryImages = [
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/5.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/6.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/7.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/8.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
    "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/9.jpg",
]

export default function SplitStickyGallery() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openViewer = (index) => {
        setCurrentIndex(index)
        setIsOpen(true)
    }

    const closeViewer = () => setIsOpen(false)

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

    return (
        <div className="w-full bg-white ">
            <div className="container px-4 mx-auto py-24">
                <div className="container px-4 mx-auto text-center space-y-6">
                    <FadeIn delay={0}>
                        <div className="space-y-6">
                            <h2 className="text-center text-4xl font-bold mb-10">
                                Our Gallery
                            </h2>
                            <p className="text-slate-600 text-lg max-w-3xl mx-auto pb-6">
                                Discover how we turn your special moments into timeless frames. Each project is a story, and we’re here to tell it beautifully.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="flex flex-col md:flex-row ">
                    {/* Sticky Left Image */}
                    {/* Sticky Left Image */}
                    <div className="md:w-1/2 w-full md:h-screen md:sticky md:top-0">

                        <img
                            src={leftImage}
                            alt="Sticky Left"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Scrollable Right Grid */}
                    {/* Scrollable Right Grid */}
                    <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4  overflow-y-auto ">

                        {galleryImages.map((url, idx) => (
                            <div
                                key={idx}
                                className="cursor-pointer"
                                onClick={() => openViewer(idx)}
                            >
                                <img
                                    src={url}
                                    alt={`Gallery ${idx}`}
                                    className="w-full h-64 object-cover  hover:scale-105 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fullscreen Viewer */}
                <Dialog open={isOpen} onClose={closeViewer} className="fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
                        <img
                            src={galleryImages[currentIndex]}
                            alt="Fullscreen"
                            className="max-w-full max-h-full object-contain"
                        />
                        <button className="absolute top-20 right-5 text-white" onClick={closeViewer}>
                            <X size={32} />
                        </button>
                        <button className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>
                            <ChevronLeft size={40} />
                        </button>
                        <button className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>
                            <ChevronRight size={40} />
                        </button>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}
