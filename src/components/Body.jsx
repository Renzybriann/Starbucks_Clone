import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Body() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-[650px] bg-cover bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/IGZ24ZtAU6mlN48QKbT8mMgVx2eW4dOb7N5zXzPm.jpeg)]">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center px-4 md:px-16">
                    <div className="text-[2rem] md:text-[4rem] font-bold text-[#1E3932]">Make It a Party</div>
                    <div className="mt-5 text-base md:text-lg font-bold border-[1px] text-[#1E3932] border-black rounded-full px-4 py-1 inline-block">Discover the flavors</div>
                </div>
            </div>

            {/* Content Rows */}
            <div className="flex flex-col md:flex-row justify-center mt-7 mb-7 gap-4 md:gap-7">
                {/* First Card */}
                <div className="flex-1 h-[680px] bg-[#1E3932] text-[#D4E9E2]">
                    <div className="h-[400px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/OuBhKjJqB3rOEAYpOBAegBoaFrProivjEbP7dVrO.jpeg)] bg-cover"></div>
                    <div className="text-center px-4 md:px-16 mt-10">
                        <div className="text-xl md:text-2xl font-bold mb-5">Always Golden</div>
                        <div className="mb-5 text-sm md:text-base">Add a playful twist to your usual with our new beverages—a delightful indulgence to brighten your day.</div>
                        <div className="border border-[#D4E9E2] rounded-full px-4 py-1 inline-block font-bold">Sip, sip, go</div>
                    </div>
                </div>
                {/* Second Card */}
                <div className="flex-1 h-[680px] bg-[#1E3932] text-[#D4E9E2]">
                    <div className="h-[400px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/7R6cc3Rg4Ua11FhGk6PBwLKfknL4NgXXHvgTzLlz.jpeg)] bg-cover"></div>
                    <div className="text-center px-4 md:px-16 mt-10">
                        <div className="text-xl md:text-2xl font-bold mb-5">It’s A Feast</div>
                        <div className="mb-5 text-sm md:text-base">Bite into the bliss with every flavor this season.</div>
                        <div className="border border-[#D4E9E2] rounded-full px-4 py-1 inline-block font-bold">Explore</div>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col md:flex-row justify-center mt-7 mb-7 gap-4 md:gap-7">
                {/* First Card */}
                <div className="flex-1 h-[680px] bg-[#D4E9E2] text-[#1E3932]">
                    <div className="h-[400px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/4uiA3Ohv7euG0GWuwTtkWDTK9IqP2jXx2s58z52K.jpeg)] bg-cover"></div>
                    <div className="text-center px-4 md:px-16 mt-10">
                        <div className="text-xl md:text-2xl font-bold mb-5">Summer Bears</div>
                        <div className="mb-5 text-sm md:text-base">Fill your favorite drink and go wherever the day takes you.</div>
                        <div className="border border-[#1E3932] font-bold rounded-full px-4 py-1 inline-block">See more</div>
                    </div>
                </div>
                {/* Second Card */}
                <div className="flex-1 h-[680px] bg-[#D4E9E2] text-[#1E3932]">
                    <img src="https://starbucks.ph/seed_data/Starbucks_Delivers_-_Homepage.jpg" className="h-[400px] w-full object-cover" alt="Delivery"/>
                    <div className="text-center px-4 md:px-16 mt-10">
                        <div className="text-xl md:text-2xl font-bold mb-5">No time to head out?</div>
                        <div className="mb-5 text-sm md:text-base">Have your favorites delivered straight to your doorstep.</div>
                        <div className="border border-[#1E3932] rounded-full px-4 py-1 inline-block font-bold">Learn more</div>
                    </div>
                </div>
            </div>

            {/* Fourth Row */}
            <div className="flex flex-col md:flex-row justify-center mt-7 mb-7 gap-4">
                {/* First Card */}
                <div className="flex-1 h-[340px] bg-[#FAF6EE] text-black flex items-center justify-center">
                    <div className="text-center px-4 md:px-16">
                        <div className="text-xl md:text-2xl font-bold mb-5">Starbucks Stories</div>
                        <div className="mb-5 text-sm md:text-base">Continuing to inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.</div>
                        <div className="border border-black rounded-full px-4 py-1 inline-block font-bold">Explore</div>
                    </div>
                </div>
                {/* Second Card */}
                <div className="flex-1 h-[340px] bg-[#D4E9E2] text-black bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/w0mLfB3L89fKjvCzmuJ6VmiQerQeAAswTImeVk3z.jpeg)] bg-cover"></div>
            </div>

            {/* Footer */}
            <div className="h-[300px] w-full mt-7 bg-white border-t-[0.5px] border-gray-200 text-black">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-16 py-8">
                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl">About us</div>
                        <div className="space-y-2 text-sm md:text-base">
                            <div>About</div>
                            <div>About us</div>
                            <div>About us</div>
                            <div>About us</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl">Order Online</div>
                        <div className="space-y-2 text-sm md:text-base">
                            <div>Order Online</div>
                            <div>Order Online</div>
                            <div>Order Online</div>
                            <div>Order Online</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl">Rewards</div>
                        <div className="space-y-2 text-sm md:text-base">
                            <div>Rewards</div>
                            <div>Rewards</div>
                            <div>Rewards</div>
                            <div>Rewards</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl">Social Impact</div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl">Promotions</div>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="-rotate-90 font-bold text-2xl tracking-widest">STARBUCKS®</div>
                    </div>
                </div>
            </div>

            <hr className="mx-4 md:mx-16 mt-20" />

            <div className="mt-7 px-4 md:px-16">
                <div className="flex justify-center space-x-4 mb-4">
                    <FaFacebook className="w-7 h-7" />
                    <AiFillTwitterCircle className="w-7 h-7" />
                    <AiFillInstagram className="w-7 h-7" />
                    <FaYoutube className="w-7 h-7" />
                </div>
                <div className="text-center text-sm text-gray-600">
                    © 2024 Starbucks Coffee Company. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Body;
