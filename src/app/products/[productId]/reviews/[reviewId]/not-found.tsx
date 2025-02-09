"use client"

import { usePathname } from "next/navigation"

export default function  NotFound() {
const pathName = usePathname()
const productId = pathName.split("/")[2];
const reviewid = pathName.split("/")[4];
    return (
        <>
        <h2>Review {reviewid} not found {productId}</h2>
        </>
    )
}