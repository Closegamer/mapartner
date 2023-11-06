"use client";
import { useState } from "react";
import OfferList from "../utils/OfferList";
import PricingBoxServCZ from "../utils/PricingBoxServCZ";

const MfoservCZone = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section id="mfoservczone" className="relative z-10 py-4">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <PricingBoxServCZ
                        packageName="Swetz"
                        price={" 170 000+"}
                        duration={""}
                        subtitle="Подбор вариантов"
                        link={"https://refk.in/001go"}
                    >
                        <OfferList text="Возраст: 18 - 90 лет" status="active" />
                        <OfferList text="Любые заемщики" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                        <OfferList text="Казахстан" status="active" />
                    </PricingBoxServCZ>
                    <PricingBoxServCZ
                        packageName="Credy"
                        price={" 200 000"}
                        duration={""}
                        subtitle="Подбор вариантов"
                        link={"https://refk.in/001gp"}
                    >
                        <OfferList text="Возраст: 18 - 65 лет" status="active" />
                        <OfferList text="Срок: 5 - 20 дней" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                        <OfferList text="Казахстан" status="active" />
                    </PricingBoxServCZ>
                    <PricingBoxServCZ
                        packageName="EasyCash"
                        price={" 350 000"}
                        duration={""}
                        subtitle="Подбор вариантов"
                        link={"https://refk.in/001gs"}
                    >
                        <OfferList text="Возраст: 18 +" status="active" />
                        <OfferList text="Любые заемщики" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                        <OfferList text="Казахстан" status="active" />
                    </PricingBoxServCZ>
                </div>
            </div>

            <div className="absolute left-0 bottom-0 z-[-1]">
                <svg
                    width="239"
                    height="601"
                    viewBox="0 0 239 601"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        opacity="0.3"
                        x="-184.451"
                        y="600.973"
                        width="196"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -184.451 600.973)"
                        fill="url(#paint0_linear_93:235)"
                    />
                    <rect
                        opacity="0.3"
                        x="-188.201"
                        y="385.272"
                        width="59.7544"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -188.201 385.272)"
                        fill="url(#paint1_linear_93:235)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_93:235"
                            x1="-90.1184"
                            y1="420.414"
                            x2="-90.1184"
                            y2="1131.65"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_93:235"
                            x1="-159.441"
                            y1="204.714"
                            x2="-159.441"
                            y2="915.952"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default MfoservCZone;
