import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuX, LuMoveRight } from 'react-icons/lu';
import {Button} from '../../../R-U_components/button.jsx';
import ActionButtons from '../Navbar/action-buttons.jsx';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../Login/components/ui/logo.jsx";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState();
    const location = useLocation();
    const route = location.pathname;

    return (
        <div className="w-full fixed top-0 left-0 z-50"> {/* 100% width, fixed positioning */}
            {/* Main Navbar - Matches SVG exactly */}
            <div className="w-full h-[60px] bg-[#CCDFE6] rounded-b-[10px]">
                <div className="w-full h-full max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-20">
                    {/* Left side */}
                    <div className="flex items-center space-x-8">
                        <Link to="/">
                            <Logo className="h-8" />
                        </Link>
                        
                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-6">
                            {/* <Link to="/">
                                <Button
                                    children="Personal"
                                    className="hover:scale-95 font-extrabold duration-300"
                                    backgroundColor={route === '/' ? '#00678F' : 'transparent'}
                                    border="none"
                                />
                            </Link>
                            <Link to="/business">
                                <Button
                                    children="Business"
                                    className="hover:scale-95 font-extrabold duration-300"
                                    backgroundColor={route === '/business' ? '#00678F' : 'transparent'}
                                    border="none"
                                />
                            </Link> */}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex">
                            <ActionButtons />
                        </div>
                        <div className="md:hidden cursor-pointer">
                            <GiHamburgerMenu 
                                color="#000" 
                                fontSize={24} 
                                onClick={() => setToggleMenu(true)} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Full screen) */}
            {toggleMenu && (
                <div className="fixed inset-0 bg-[#CCDFE6] z-50 pt-[60px]">
                    <div className="w-full h-full max-w-[1440px] mx-auto px-4 lg:px-20">
                        <LuX
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            fontSize={24}
                            onClick={() => setToggleMenu(false)}
                        />
                        
                        <div className="flex flex-col h-full">
                            <div className="py-8 space-y-6">
                                <Link 
                                    to="/" 
                                    className={`block text-xl font-semibold ${route === '/' ? 'text-[#00678F]' : 'text-black'}`}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Personal
                                </Link>
                                <Link 
                                    to="/business" 
                                    className={`block text-xl font-semibold ${route === '/business' ? 'text-[#00678F]' : 'text-black'}`}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Business
                                </Link>
                            </div>
                            
                            <div className="mt-auto pb-8 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <Link to="/paybills">
                                        <Button
                                            className="w-full hover:bg-lightBlue"
                                            children="Paybills"
                                        />
                                    </Link>
                                    <Link to="/login">
                                        <Button
                                            backgroundColor="transparent"
                                            textColor="#000"
                                            border="1px solid #000"
                                            className="w-full hover:bg-gray-100"
                                            children="Login"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;