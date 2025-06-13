import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { useEffect, useState } from "react";
import { generatePalette } from "../utils/generatePalette";
import { HyperText } from "./components/magicui/hyper-text";
import { Github } from "lucide-react";
import { CodeXml } from "lucide-react";
import { Palette } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { ArrowDownRight } from "lucide-react";

export default function LandingPage() {
    const [primaryColor, setPrimaryColor] = useState("#000000");
    const [secondaryColor, setSecondaryColor] = useState("#ffffff");

    const handleGenerate = () => {
        const [primaryColor, text] = generatePalette();
        setPrimaryColor(primaryColor);
        setSecondaryColor(text);
    };

    useEffect(() => {
        handleGenerate();
    }, []);

    const handleInvert = () => {
        const currentprimaryColor = primaryColor;
        const currentsecondaryColor = secondaryColor;
        setPrimaryColor(currentsecondaryColor);
        setSecondaryColor(currentprimaryColor);
    };


    const aboutUsData = [
        {
            text: "AT RANDOMCOLOR, I BELIEVE IN THE TRANSFORMATIVE POWER OF COLOR. MY VIBRANT PALETTE OFFERS COLORS THAT SHIFT THE PARADIGM OF CREATIVITY, INSPIRING FRESH IDEAS AND INNOVATIVE DESIGNS.",
        },
        {
            text: "WHETHER YOU'RE A DESIGNER, ARTIST, OR SIMPLY A COLOR ENTHUSIAST, MY PLATFORM PROVIDES THE PERFECT HUES TO SPARK YOUR IMAGINATION AND BRING YOUR VISIONS TO LIFE. DIVE INTO A WORLD WHERE EVERY SHADE CAN REDEFINE YOUR CREATIVE JOURNEY!",
        },
        {
            content: "PRO TIP : CLICK THE RANDOMCOLORR BUTTON TO INVERT THE COLORS INSTANTLY. DISCOVER A WHOLE NEW PALETTE WITH JUST A SIMPLE CLICK!",
        },
        {
            content: "0123456789\nABCDEFGHIJKLMNOPQRSTUVWXYZ",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen w-full" style={{ backgroundColor: primaryColor, color: secondaryColor }}>
            {/* Header */}
            <header className="w-full relative">
                <div className="flex items-center justify-between px-6 py-4">
                    <span className="text-xl font-medium px-2 py-2 border" onClick={handleInvert} style={{ color: secondaryColor, borderColor: secondaryColor, cursor: "pointer", display: "flex", flexDirection: "row" }}>
                        <Palette color:secondaryColor strokeWidth={3} /> Randomcolorr
                    </span>
                    <button
                        onClick={handleGenerate}
                        className="border px-3 py-2 font-bold"
                        style={{ backgroundColor: secondaryColor, color: primaryColor, cursor: "pointer", borderColor: secondaryColor,display:"flex",flexDirection:"row" }}
                    > GENERATE <SwatchBook/>
                    </button>
                </div>
                <Separator style={{ backgroundColor: secondaryColor, height: 2 }} />
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="mx-4 mt-10 md:mx-auto md:max-w-6xl">
                    <Card style={{ backgroundColor: primaryColor, color: secondaryColor, borderColor: secondaryColor }} className="w-full h-auto p-5 rounded-none">
                        <CardContent className="flex flex-col justify-center w-full h-full p-0 gap-6">
                            <div className="w-full px-2">
                                <HyperText className="text-3xl md:text-7xl font-bold leading-tight text-balance">
                                    Colors that redefined the possibilities
                                </HyperText>
                            </div>
                            <div className="w-full px-2 flex flex-col gap-2 mt-4">
                                <HyperText className="text-lg md:text-2xl font-medium">
                                    Colors that shifted the paradigm.
                                </HyperText>
                                <HyperText className="text-lg md:text-2xl font-medium">
                                    Colors that changed the whole game.
                                </HyperText>
                                <HyperText className="text-lg md:text-2xl font-medium">
                                    Colors that are game-changer.
                                </HyperText>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Color Showcase Section */}
                <section className="mt-10 border-y" style={{ borderColor: secondaryColor }}>
                    <div className="flex flex-col md:flex-row w-full gap-4 p-4">
                        <div className="w-full h-[200px] md:h-[300px] border flex-1" style={{ backgroundColor: primaryColor, borderColor: secondaryColor }}>
                            <div className="w-full h-full flex items-center justify-center text-3xl md:text-6xl font-bold text-center" style={{ color: secondaryColor }}>
                                {secondaryColor.toUpperCase()}
                            </div>
                        </div>
                        <div className="w-full h-[200px] md:h-[300px] border flex-1" style={{ backgroundColor: secondaryColor, borderColor: primaryColor }}>
                            <div className="w-full h-full flex items-center justify-center text-3xl md:text-6xl font-bold text-center" style={{ color: primaryColor }}>
                                {primaryColor.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="mt-10 px-4 md:px-10">
                    <div className="inline-flex items-center justify-center p-2.5 border" style={{ borderColor: secondaryColor }}>
                        <ArrowDownRight size={64}/><h2 className="text-3xl md:text-5xl font-medium uppercase">About Us</h2>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        {aboutUsData.map((item, index) => (
                            <Card key={index} className="rounded-none border" style={{ backgroundColor: primaryColor, color: secondaryColor, borderColor: secondaryColor }}>
                                <CardContent className="p-6">
                                    <div className="text-lg md:text-2xl font-semibold">
                                        {item.content
                                            ? item.content.split("\n").map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < item.content.split("\n").length - 1 && <br />}
                                                </React.Fragment>
                                            ))
                                            : item.text}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full mt-10">
                <Separator style={{ backgroundColor: secondaryColor, height: 2 }} />
                <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
                    <span className="text-xl font-medium px-2 py-2 border" onClick={handleInvert} style={{ color: secondaryColor, borderColor: secondaryColor, cursor: "pointer", display: "flex", flexDirection: "row" }}>
                        <Palette color:secondaryColor strokeWidth={3} /> Randomcolorr
                    </span>
                    <div className="flex gap-3">
                        <a href="https://swarajdev.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border px-3 py-2 font-bold"
                                style={{ backgroundColor: secondaryColor, color: primaryColor, cursor: "pointer", borderColor: secondaryColor, display: "flex", flexDirection: "row" }}
                            ><CodeXml color:primaryColor /> SWARAJ.DEV
                            </button>
                        </a>
                        <a href="https://github.com/Alaalawara" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border px-3 py-2 font-bold"
                                style={{ backgroundColor: secondaryColor, color: primaryColor, cursor: "pointer", borderColor: secondaryColor, display: "flex", flexDirection: "row" }}
                            ><div className="app">
                                    <Github color:primaryColor />
                                </div>
                                GITHUB
                            </button>
                        </a>
                        <a href="https://x.com/loops_infinity" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border px-3 py-2 font-bold"
                                style={{ backgroundColor: secondaryColor, color: primaryColor, cursor: "pointer", borderColor: secondaryColor, display: "flex", flexDirection: "row" }}
                            >X
                            </button>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
