"use client"
 // ya jahan bhi tune rakha ho
import Link from "next/link"
import { ImagesSlider } from "./ImageSlider"


export default function ImageSliderBox({ images, title, link }) {
  return (
    <Link
      href={link}
      className="group block container relative overflow-hidden shadow-lg hover:scale-105 transition-transform h-[300px]">
      <ImagesSlider images={images} className="object-cover para object-center" />
      <div className="absolute inset-0  bg-opacity-25 z-50 flex items-center justify-center">
        <h3 className="text-xl  text-[#f28b00] para">{title}</h3>
      </div>
    </Link>
  )
}
