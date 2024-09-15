import Mfoone from "@/components/Mfoone/";
import Mfotwo from "@/components/Mfotwo/";
import Mfothree from "@/components/Mfothree/";
import Mfofour from "@/components/Mfofour/";
import Mfofive from "@/components/Mfofive/";
import MfoCZone from "@/components/MfoCZone/";
import MfoCZtwo from "@/components/MfoCZtwo/";
import MfoCZthree from "@/components/MfoCZthree/";
import Breadcrumb from "@/components/Common/Breadcrumb";

const MFOPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Быстрые кредиты"
                description="Россия и Казахстан"
            />

            <Mfofive/>
            <Mfotwo/>
            <Mfoone/>
            <Mfothree/>
            <Mfofour/>
            <hr/>
            <div className={'text-center'}>
                <p className="mb-2 mt-10 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">Больше возможностей предоставляет наш бесплатный телеграм-бот:</p>
                <p className={'mb-10 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl'}>
                    <a className={'text-blue-500 animate-pulse'} href={'https://t.me/MoneyAcBot_bot'}>@MoneyAcBot_bot</a>
                </p>
            </div>
            <hr/>
            <MfoCZone/>
            <MfoCZtwo/>
            <MfoCZthree/>
        </>
    );
};

export default MFOPage;
