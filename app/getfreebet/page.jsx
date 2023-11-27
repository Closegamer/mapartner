import Breadcrumb from "@/components/Common/Breadcrumb";
import GetfreebetOne from "@/components/GetfreebetOne";

const GetfreebetPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Калькулятор для ставок"
                description="Рассчитать ставку с учетом коэффициентов и фрибета"
            />

            <GetfreebetOne />
        </>
    );
};

export default GetfreebetPage;
