import Breadcrumb from "@/components/Common/Breadcrumb";
import Adminka from "@/components/Adminka";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

const AdminkaPage = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    let admin = false
    if(session){
        const usermail = session.user.email
        if(usermail === process.env.ADMIN) admin = true
    }
    return (
        <>
            <Breadcrumb
                pageName="АДМИНКА"
                description="Вот так."
            />

            <Adminka admin={admin}/>
        </>
    );
};

export default AdminkaPage;
