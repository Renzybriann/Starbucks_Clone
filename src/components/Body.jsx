import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Body (){
    return (
        <div>
            <div className="  w-full h-[650px] overflow-hidden bg-cover bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/IGZ24ZtAU6mlN48QKbT8mMgVx2eW4dOb7N5zXzPm.jpeg)]">
                <div className="ml-72 top-96 pt-56"> 
                    <div className="font-bold text-[4rem] text-[#1E3932]">Make It a Party</div>
                    <div className="mt-10 font-bold border-[1px] text-[#1E3932] border-black rounded-full px-4 py-1 inline-block">Discover the flavors</div>
                </div>
            </div>

             {/* second row*/}
            <div className="flex justify-center mt-7 mb-7"> 
                {/* first card*/}
                <div className="h-[680px] w-[730px] bg-[#1E3932] text-[#D4E9E2]">
                    <div>
                        {/* first content*/}
                        <div className="h-[400px] w-[730px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/OuBhKjJqB3rOEAYpOBAegBoaFrProivjEbP7dVrO.jpeg)] bg-cover">

                        </div>
                           {/* second content*/}
                        <div className="text-center px-16 mt-10">
                            <div className="font-bold text-2xl mb-10">Always Golden</div>
                            <div className="mb-10">Add a playful twist to your usual with our new beverages—a delightful indulgence to brighten your day.</div>
                            <div className="border border-[#D4E9E2]e rounded-full px-4 py-1 inline-block font-bold">Sip, sip, go </div>
                        </div>
                       
                    </div>
                    
                </div>
                {/* second card*/}
                <div className="ml-7 h-[680px] w-[730px] bg-[#1E3932] text-[#D4E9E2]">
                    <div>
                        {/* first content*/}
                        <div className="h-[400px] w-[730px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/7R6cc3Rg4Ua11FhGk6PBwLKfknL4NgXXHvgTzLlz.jpeg)] bg-cover">

                        </div>
                           {/* second content*/}
                        <div className="text-center px-16 mt-10">
                            <div className="font-bold text-2xl mb-10">It’s A Feast</div>
                            <div className="mb-10">Bite into the bliss with every flavor this season.</div>
                            <div className="border border-[#D4E9E2] rounded-full px-4 py-1 inline-block font-bold">Explore </div>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
                 {/* third row*/}

            <div className="flex justify-center mt-7 mb-7"> 
                        {/* first card*/}
                        <div className="h-[680px] w-[730px] bg-[#D4E9E2] text-[#1E3932]">
                            <div>
                                {/* first content*/}
                                <div className="h-[400px] w-[730px] bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/4uiA3Ohv7euG0GWuwTtkWDTK9IqP2jXx2s58z52K.jpeg)] bg-cover">

                                </div>
                                {/* second content*/}
                                <div className="text-center px-16 mt-10">
                                    <div className="font-bold text-2xl mb-10">Summer Bears</div>
                                    <div className="mb-10">Fill your favorite drink and go wherever the day takes you.</div>
                                    <div className="border border-[#1E3932] font-bold rounded-full px-4 py-1 inline-block">See more </div>
                                </div>
                            
                            </div>
                            
                        </div>
                        {/* second card*/}
                        <div className="ml-7 h-[680px] w-[730px] bg-[#D4E9E2] text-[#1E3932]">
                            <div>
                                {/* first content*/}
                                <img src= "https://starbucks.ph/seed_data/Starbucks_Delivers_-_Homepage.jpg" className="h-[400px] w-full  object-cover">

                                </img>
                                {/* second content*/}
                                <div className="text-center px-16 mt-10">
                                    <div className="font-bold text-2xl mb-10">No time to head out?</div>
                                    <div className="mb-10">Have your favorites delivered straight to your doorstep.</div>
                                    <div className="border border-[#1E3932] rounded-full px-4 py-1 inline-block font-bold">Learn more </div>
                                </div>
                            
                            </div>
                            
                        </div>
            </div>
            {/* 4th row*/}
            <div className="flex justify-center mt-7 mb-7 bg-"> 
                        {/* first card*/}
                        <div className="h-[340px] w-[745px] bg-[#FAF6EE] text-black flex items-center ">
                            <div>
                                <div className="text-center px-16 mt-10">
                                    <div className="font-bold text-2xl mb-10">Starbucks Stories</div>
                                    <div className="mb-10">Continuing to inspire and nurture the human spirit–one person, one cup and one neighborhood at a time.</div>
                                    <div className="border border-black rounded-full px-4 py-1 inline-block font-bold">Explore </div>
                                </div>
                            
                            </div>
                            
                        </div>
                        {/* second card*/}
                        <div className=" h-[340px] w-[745px] bg-[#D4E9E2] text-black bg-[url(https://starbuckscard.ph/sbcard-admin/storage/app/public/banners/w0mLfB3L89fKjvCzmuJ6VmiQerQeAAswTImeVk3z.jpeg)]"> 
                        </div>
            </div>
            {/* lower*/}
            <div className="h-[300px]  w-screen mt-7 bg-white border-t-[0.5px] border-gray-200 text-black">
               
                <div className="flex space-x-44 ml-52 pt-16">
                    <div>
                        <div className="font-bold text-xl pb-6">About us</div>
                        <div className="space-y-2 ">
                            <div>About usg</div>
                            <div>About us</div>
                            <div>About us</div>
                            <div>About us</div>
                        </div>
                       
                    </div>
                    <div>
                        <div className="font-bold text-xl pb-6">Order Online</div>
                        <div className="space-y-3">
                            <div>Order Online</div>
                            <div>Order Online</div>
                            <div>Order Online</div>
                            <div>Order Online</div>
                        </div>
                       
                    </div>
                    <div>
                        <div className="font-bold text-xl pb-6">Rewards</div>
                            <div className="space-y-2">
                                <div>Rewards</div>
                                <div>Rewards</div>
                                <div>Rewards</div>
                                <div>Rewards</div>
                            </div>
                    </div>
                    <div>   
                        <div className="font-bold text-xl pb-6">Social Impact</div>
                      
                    </div>
                    <div>
                        <div className="font-bold text-xl pb-6">Promotions</div>
                       
                    </div>
                    <div>
                    <div className="-rotate-90 font-bold text-2xl ml-14 mt-20 tracking-custom-wide">
                         STARBUCKS®
                    </div>

                    </div>
                 
              
                 
                   
                </div>

            </div>
            <div>
            <hr className="mx-52 mt-20"></hr>
            </div>
            
            <div>
            <div className="mt-7 pl-52">
                <div className="flex space-x-4 ">
                    <FaFacebook className="w-9 h-9" />
                    <AiFillTwitterCircle className="w-9 h-9" />
                    <AiFillInstagram className="w-9 h-9"/>
                    <FaYoutube className="w-9 h-9" />
                </div>
            </div>
            </div>
            <div className="mt-7 pr-52 pl-52 flex">
                <div className="flex space-x-4 flex-grow">
                    <div> Web Accessibility</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                    <div>Site Map</div>
                    <div>Cookie Preferences</div>
                </div>
                <div>
                <div className="text-sm">
                © 2022 Starbucks Coffee Company. All rights reserved.
                </div>
                </div>
                
            </div>
       




         
        </div>
       
       
    
    );
}

export default Body