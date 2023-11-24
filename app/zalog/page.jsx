import Zalogone from "@/components/Zalogone";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ZalogPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Кредиты под залог"
                description="Недвижимость, автомобиль, др."
            />
            <Zalogone />
        </>
    );
};

export default ZalogPage;
