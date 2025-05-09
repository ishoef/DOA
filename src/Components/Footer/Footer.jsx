import React from "react";

const Footer = () => {

    const click = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-32">
        <div className="flex justify-between w-[80%] mx-auto">
            <aside>
                <img onClick={() => click()} className="w-80" src="https://i.ibb.co/0pbD70D4/Vertical-Logo.png" alt="" />
                <p className="text-[16px] text-xl font-semibold mt-4">Ad-Dirasah Online Academy - DOA</p>
                <p className="w-100 mt-4">Ad-Dirasah Online Academy is an Islamic educational platform offering structured Arabic and Islamic studies programs for non-Arabic speakers.</p>
            </aside>
            <nav className="flex flex-col text-[16px] gap-2">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col text-[16px] gap-2">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col text-[16px] gap-2">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
    </footer>
  );
};

export default Footer;
