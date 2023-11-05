"use client";
import { useState } from "react";
import OfferList from "../utils/OfferList";
import PricingBox from "../utils/PricingBox";

const Mfothree = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section id="mfothree" className="relative z-10 py-4">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <PricingBox
                        packageName="Отличные наличные"
                        price={" 30 000"}
                        duration={""}
                        subtitle="Действует акция 0% на 7 дней."
                        link={"https://refk.in/001c9"}
                    >
                        <OfferList text="От 1 000 рублей" status="active" />
                        <OfferList text="Возраст от 18 лет" status="active" />
                        <OfferList text="Постоянная регистрация РФ" status="active" />
                        <OfferList text="Дееспособность" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                    </PricingBox>
                    <PricingBox
                        packageName="Turbozaim"
                        price={" 50 000"}
                        duration={""}
                        subtitle="Максимально быстро и удобно."
                        link={"https://refk.in/001b8"}
                    >
                        <OfferList text="От 3000 рублей" status="active" />
                        <OfferList text="Паспорт РФ" status="active" />
                        <OfferList text="Без посещения офиса" status="active" />
                        <OfferList text="Возраст: 18 - 65 лет" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                    </PricingBox>
                    <PricingBox
                        packageName="Budgett"
                        price={" 300 000"}
                        duration={""}
                        subtitle="Рефинансирование займов."
                        link={"https://refk.in/001bp"}
                    >
                        <OfferList text="Срок: 1 - 36 мес" status="active" />
                        <OfferList text="Долгосрочные: 15К - 300К," status="active" />
                        <OfferList text="Краткосрочные: 9К - 30К" status="active" />
                        <OfferList text="Быстрое оформление" status="active" />
                        <OfferList text="Быстрое одобрение" status="active" />
                    </PricingBox>
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

export default Mfothree;
