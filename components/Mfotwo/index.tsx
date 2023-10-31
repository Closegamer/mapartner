"use client";
import { useState } from "react";
import OfferList from "../utils/OfferList";
import PricingBox from "../utils/PricingBox";

const Mfotwo = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section id="mfotwo" className="relative z-10 py-4">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <PricingBox
                        packageName="Joymoney"
                        price={" 100 000"}
                        duration={""}
                        subtitle="Решение финансовых проблем."
                        link={"https://refk.in/001bc"}
                    >
                        <OfferList text="Срок займа: от 10 до 168 дней" status="active" />
                        <OfferList text="Возраст от 21 до 65 лет" status="active" />
                        <OfferList text="Наличие паспорта РФ и СНИЛС" status="active" />
                        <OfferList text="Получение всего за 15 минут" status="active" />
                        <OfferList text="Плохая кредитная история" status="active" />
                    </PricingBox>
                    <PricingBox
                        packageName="Быстроденьги"
                        price={" 30 000"}
                        duration={""}
                        subtitle="Срок займа: от 1 до 30 дней"
                        link={"https://refk.in/001bd"}
                    >
                        <OfferList text="Получение за 5-15 минут" status="active" />
                        <OfferList text="Возраст от 18 до 75 лет" status="active" />
                        <OfferList text="Гражданство РФ" status="active" />
                        <OfferList text="Источник дохода" status="active" />
                        <OfferList text="Банковская карта" status="active" />
                    </PricingBox>
                    <PricingBox
                        packageName="Webbankir"
                        price={" 30 000"}
                        duration={""}
                        subtitle="Пониженная процентная ставка."
                        link={"https://refk.in/001bb"}
                    >
                        <OfferList text="От 3 000 до 30 000 рублей" status="active" />
                        <OfferList text="Возраст от 20 лет" status="active" />
                        <OfferList text="Срок до 30 дней" status="active" />
                        <OfferList text="Быстрое рассмотрение" status="active" />
                        <OfferList text="Высокий процент одобрения" status="active" />
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

export default Mfotwo;
