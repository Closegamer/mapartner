import Breadcrumb from "@/components/Common/Breadcrumb";
import BettingSectionOne from "@/components/BettingSections/BettingSectionOne";
import BettingSectionTwo from "@/components/BettingSections/BettingSectionTwo";

const BettingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Беттинг, ставки на спорт"
                description="Получить бонусы за регистрацию."
            />
            <BettingSectionOne />
            <BettingSectionTwo />
        </>
    );
};

export default BettingPage;
