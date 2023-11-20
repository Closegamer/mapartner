import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Under from "@/components/Under";
import Breadcrumb from "@/components/Common/Breadcrumb";

const BettingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Беттинг, ставки на спорт"
                description="Получить бонусы за регистрацию."
            />
            <Under />
            {/*<AboutSectionTwo />*/}
        </>
    );
};

export default BettingPage;
