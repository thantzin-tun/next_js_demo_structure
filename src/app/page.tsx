import React, { useEffect } from "react";
import Image from "next/image";
import {Roboto} from "next/font/google";
import HomePage from "./home/page";

const roboto = Roboto({subsets:['latin'], weight: "500"})

export default function Home() {
    return (
        <div className={roboto.className}>
            <HomePage />
        </div>
    );
}
