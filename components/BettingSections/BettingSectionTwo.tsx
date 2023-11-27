import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);

const BettingSectionTwo = () => {
    const List = ({ text }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
            {text}
        </p>
    );

    const LigasJackpot = React.forwardRef((props, ref) => {
        return (<Image
            src="/images/betting/ligas_jackpot_576_508.jpg"
            alt="ligas-jackpot-banner"
            fill
            className="mx-auto max-w-full lg:mr-0"
        />)
        LigasJackpot.displayName = "LigasJackpot";
    })

    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Link
                                href="https://a.univerns.com/sAZ0b9"
                                className={"block w-full py-8"}
                            >
                                <LigasJackpot />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp" data-wow-delay=".2s">
                            <div className="mb-9">
                                <SectionTitle
                                    title="Большой куш"
                                    paragraph="Акция проходит с 22 октября по 23 декабря."
                                    mb="44px"
                                />
                                <div
                                    className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                                    data-wow-delay=".15s"
                                >
                                    <div className="mx-[-12px] flex flex-wrap">
                                        <div className="w-full px-3 sm:w-full lg:w-full xl:w-full">
                                            <List text="Более 100 000 000 рублей!" />
                                            <List text="Трансляции розыгрышей" />
                                            <List text="Розыгрыши - каждый день" />
                                            <List text="Обмен фрибетов - 2:1" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Link
                            href="https://a.univerns.com/sAZ0b9"
                            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                        >
                            🔥 Подробнее...
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BettingSectionTwo;
