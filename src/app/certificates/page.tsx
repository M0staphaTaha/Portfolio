"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Certificates = () => {
    const certificates = [
        {
            title: "React & Next From Maximilian",
            issuer: "Udemy",
            year: "2024",
            link: "/",
            variant: "left"
        },
        {
            title: "Networks From Hussien Nasser",
            issuer: "Udemy",
            year: "2024",
            link: "/",
            variant: "right"
        },
        {
            title: "React & Next From Maximilian",
            issuer: "Udemy",
            year: "2024",
            link: "/",
            variant: "left"
        },
        {
            title: "Networks From Hussien Nasser",
            issuer: "Udemy",
            year: "2024",
            link: "/",
            variant: "right"
        },
        // Add more certificates here
    ];

    const certificateVariant = (direction: string) => ({
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    });

    return (
        <motion.div className="text-white grid w-full gap-10 justify-center px-[200px] max-[940px]:px-[40px] mt-[150px] before:absolute before:h-[300px] before:w-[200px] sm:before:w-[100px] before:translate-x-1/2 max-[1345px]:before:translate-x-[2px] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl opa before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-[500px] max-[1345px]:after:translate-x-[2px] after:bg-gradient-conic after:from-sky-200 after:via-[#b292ff] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-40 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            {certificates.map((certificate, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.1
                });
                return (
                    <motion.div
                        ref={ref}
                        key={index}
                        className="px-12 py-5 rounded-3xl border border-[#272727] flex justify-between items-center gap-[350px] w-full max-[1023px]:grid max-[1023px]:justify-center max-[1023px]:gap-4"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={certificateVariant(certificate.variant)}
                    >
                        <div className="grid gap-3">
                            <h1 className="font-semibold text-[25px] max-[1277px]:text-[20px]">{certificate.title}</h1>
                            <p className="text-[#b292ff] text-[20px] max-[1277px]:text-[16px]">{certificate.issuer}</p>
                            <div className="text-[#6e6e6e] flex items-center gap-2 text-[16px]">{certificate.year}<div className="h-1.5 w-1.5 rounded-full bg-[#b95f5f] me-2"></div><p className=" -translate-x-1.5">End</p></div>
                        </div>
                        <div className="flex text-[18px] max-[1277px]:text-[16px]">
                            <a href={certificate.link} className="text-[#5fb9b0]">
                                View Certificate
                            </a>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Certificates;