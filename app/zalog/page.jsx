import Zalogone from "@/components/Zalogone";
import Zalogtwo from "@/components/Zalogtwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ZalogPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Кредиты под залог"
                description="Недвижимость, автомобиль, др."
            />
            <Zalogone />
            <Zalogtwo />
        </>
    );
};

export default ZalogPage;
