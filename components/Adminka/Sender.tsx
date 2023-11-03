"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import axios from "axios";

const Sender = () => {
    const [loading, setLoading] = useState(false)
    const [testresults, setTestresults] = useState(500)
    const [email, setEmail] = useState('')

    const handleTest = async (email:string) => {
        try {
            setLoading(true)
            const link = 'api/testsender?email='+email
            const data = await axios.get(link)

            if (data && data.status) {
                console.log(data.status)
                setTestresults(data.status)
            }

            setEmail('')
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <section id="testsendercomp" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s"
                        >
                            <h5>Test SMTP</h5>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleTest(email)}}>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="subscribe"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Подписаться
                                            </label>
                                            <input
                                                type="email"
                                                name={"email"}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email для теста"
                                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="-mx-4 flex flex-wrap">
                                            <div className="w-full px-4 md:w-1/2">
                                                <div className="mb-8">
                                                    {!loading && (
                                                        <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                                            Отправить
                                                        </button>
                                                    )}
                                                    {!!loading && (
                                                        <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                                            Отправляется...
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {/*<div className="w-full px-4 md:w-1/2">*/}
                                            {/*    <div className="mb-8">*/}
                                            {/*        */}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>{!!testresults && (<p>{testresults}</p>)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sender;
