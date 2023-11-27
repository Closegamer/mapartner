"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BettingSectionOne from "@/components/BettingSections/BettingSectionOne";
import BettingSectionTwo from "@/components/BettingSections/BettingSectionTwo";

const GetfreebetOne = () => {
    const [income, setIncome] = useState(0)
    const [odd, setOdd] = useState(0)
    const [kefOne, setKefOne] = useState('1.00')
    const [kefTwo, setKefTwo] = useState('1.00')
    const [freebet, setFreebet] = useState('0')
    const [profit, setProfit] = useState(0)

    const calculator = (freebet, kefOne, kefTwo) => {
        if(!freebet) freebet = '0'
        if(freebet && freebet.indexOf(",") >= 0) freebet = freebet.replace(',','.')

        if(!kefOne) kefOne = '1.0'
        if(kefOne && kefOne.indexOf(",") >= 0) kefOne = kefOne.replace(',','.')

        if(!kefTwo) kefTwo = '1.0'
        if(kefTwo && kefTwo.indexOf(",") >= 0) kefTwo = kefTwo.replace(',','.')

        if(kefOne !== '1.0' && kefTwo !== '1.0'){
            let income_value = parseInt(freebet)*parseFloat(kefOne) - parseInt(freebet)
            income_value = income_value.toFixed(0);

            setIncome(income_value)

            let odd_value = parseInt(income_value)/parseFloat(kefTwo)
            odd_value = odd_value.toFixed(0);

            setOdd(odd_value)

            let profit = parseInt(income_value) - odd_value
            profit = profit.toFixed(0);

            setProfit(profit)
        }
    }

    const handleForm = async (freebet, kefOne, kefTwo) => {
        if(!freebet) freebet = '0'
        if(!kefOne) kefOne = '1.00'
        if(!kefTwo) kefTwo = '1.00'
        calculator(freebet, kefOne, kefTwo)
    }

    const LigasRegistration = React.forwardRef((props, ref) => {
        return (<Image
            src="/images/betting/ligas_registration_576_508.jpg"
            alt="ligas-registration-banner"
            fill
            className="mx-auto max-w-full lg:mr-0"
        />)
        LigasRegistration.displayName = "LigasRegistration";
    })

    return (
        <section id="getfreebetone" className="relative z-10 py-4">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleForm(freebet,kefOne, kefTwo)
                        }}>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="freebet"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Фрибет<br />(заполнить)
                                        </label>
                                        <input
                                            type="text"
                                            name={"freebet"}
                                            value={freebet}
                                            onChange={(e) => {
                                                setFreebet(e.target.value)
                                            }}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="kefOne"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Сумма ставки<br />(автоматически)
                                        </label>
                                        <input
                                            type="text"
                                            name={"odd"}
                                            value={odd}
                                            disabled={true}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="kefOne"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Коэффициент 1<br />(заполнить)
                                        </label>
                                        <input
                                            type="text"
                                            name={"kefOne"}
                                            value={kefOne}
                                            onChange={(e) => {
                                                setKefOne(e.target.value)
                                            }}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="kefOne"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Коэффициент 2<br />(заполнить)
                                        </label>
                                        <input
                                            type="text"
                                            name={"kefTwo"}
                                            value={kefTwo}
                                            onChange={(e) => {
                                                setKefTwo(e.target.value)
                                            }}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="income"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Выигрыш<br />(автоматически)
                                        </label>
                                        <input
                                            type="text"
                                            name={"income"}
                                            value={income}
                                            disabled={true}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="profit"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Чистая прибыль<br />(автоматически)
                                        </label>
                                        <input
                                            type="text"
                                            name={"profit"}
                                            value={profit}
                                            disabled={true}
                                            placeholder=""
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-8">
                                        <button type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                            Рассчитать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BettingSectionOne />
            <BettingSectionTwo />
            {/*<div className="absolute left-0 bottom-0 z-[-1]">*/}
            {/*    <svg*/}
            {/*        width="239"*/}
            {/*        height="601"*/}
            {/*        viewBox="0 0 239 601"*/}
            {/*        fill="none"*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*        <rect*/}
            {/*            opacity="0.3"*/}
            {/*            x="-184.451"*/}
            {/*            y="600.973"*/}
            {/*            width="196"*/}
            {/*            height="541.607"*/}
            {/*            rx="2"*/}
            {/*            transform="rotate(-128.7 -184.451 600.973)"*/}
            {/*            fill="url(#paint0_linear_93:235)"*/}
            {/*        />*/}
            {/*        <rect*/}
            {/*            opacity="0.3"*/}
            {/*            x="-188.201"*/}
            {/*            y="385.272"*/}
            {/*            width="59.7544"*/}
            {/*            height="541.607"*/}
            {/*            rx="2"*/}
            {/*            transform="rotate(-128.7 -188.201 385.272)"*/}
            {/*            fill="url(#paint1_linear_93:235)"*/}
            {/*        />*/}
            {/*        <defs>*/}
            {/*            <linearGradient*/}
            {/*                id="paint0_linear_93:235"*/}
            {/*                x1="-90.1184"*/}
            {/*                y1="420.414"*/}
            {/*                x2="-90.1184"*/}
            {/*                y2="1131.65"*/}
            {/*                gradientUnits="userSpaceOnUse"*/}
            {/*            >*/}
            {/*                <stop stopColor="#4A6CF7" />*/}
            {/*                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />*/}
            {/*            </linearGradient>*/}
            {/*            <linearGradient*/}
            {/*                id="paint1_linear_93:235"*/}
            {/*                x1="-159.441"*/}
            {/*                y1="204.714"*/}
            {/*                x2="-159.441"*/}
            {/*                y2="915.952"*/}
            {/*                gradientUnits="userSpaceOnUse"*/}
            {/*            >*/}
            {/*                <stop stopColor="#4A6CF7" />*/}
            {/*                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />*/}
            {/*            </linearGradient>*/}
            {/*        </defs>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </section>
    );
};

export default GetfreebetOne
;
