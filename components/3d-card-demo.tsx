"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

interface ThreeDCardDemoProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
  buttonLink: string
}

export default function ThreeDCardDemo({
  title = "Forge your own tools",
  description = "Hover over this card to unleash the power of ApeForge",
  imageSrc = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  buttonText = "Forge now",
  buttonLink = "#",
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.3] border-white/[0.2] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={buttonLink}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-blue-300"
          >
            {buttonText} →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
          >
            Connect
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

