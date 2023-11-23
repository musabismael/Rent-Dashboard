import React, { useState } from "react";
import { Link } from "react-router-dom";

const IMAGE_API_KEY = "7ccb326431b54c7687bfd19361dd1f94";
const userAvatarUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/f020e304-7ce4-4646-8299-e64c64f7fd91?apiKey=${IMAGE_API_KEY}&width=`;
const homeIconUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/a1a58b0b-1aa4-430a-8bae-131540d16fcf?apiKey=${IMAGE_API_KEY}`;
const insightsIconUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/5efd0b73-0024-43db-8b58-264453e40f5c?apiKey=${IMAGE_API_KEY}`;
const recommendsIconUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/bc5e9dc1-a8ed-4d4e-be08-6514cfe64460?apiKey=${IMAGE_API_KEY}`;
const messagesIconUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/0437e8cd-3015-4a55-8723-9421d8899a89?apiKey=${IMAGE_API_KEY}`;
const url_for_profile_icon = `https://cdn.builder.io/api/v1/image/assets/TEMP/51fbe5e8-44ba-43ab-8052-ffc307aec087?apiKey=${IMAGE_API_KEY}`;
const url_for_faq_icon = `https://cdn.builder.io/api/v1/image/assets/TEMP/ec5a612a-ff75-49c4-9dc7-e17046cc56ff?apiKey=${IMAGE_API_KEY}`;
const url_for_contact_icon = `https://cdn.builder.io/api/v1/image/assets/TEMP/8255e539-4aea-454f-b256-d4e1bfd89287?apiKey=${IMAGE_API_KEY}`;
const url_for_logout_icon = `https://cdn.builder.io/api/v1/image/assets/TEMP/0d92c91c-5f41-450e-a7a7-7e2c3a20169a?apiKey=${IMAGE_API_KEY}`;

const MenuItem = ({ iconUrl, text, isActive, onClick }) => (
  <div
    className={`flex items-stretch justify-between gap-4 mt-6 max-md:mr-1 ${
      isActive ? "active" : ""
    }`}
    onClick={onClick}
  >
    <img
      loading="lazy"
      src={iconUrl}
      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-slate-500 text-xl leading-6 grow whitespace-nowrap mt-1.5 self-start">
      {text}
    </div>
  </div>
);

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    { iconUrl: homeIconUrl, text: "Home" },
    { iconUrl: insightsIconUrl, text: "Insights" },
    { iconUrl: recommendsIconUrl, text: "Recommends" },
    { iconUrl: messagesIconUrl, text: "Messages (2)" },
  ];

  const settingsItems = [
    { iconUrl: url_for_profile_icon, text: "Profile" },
    { iconUrl: url_for_faq_icon, text: "FAQ’s" },
    { iconUrl: url_for_contact_icon, text: "Contact us" },
    { iconUrl: url_for_logout_icon, text: "Logout" },
  ];

  return (
    <div>
      {/* User Information Section */}
      <div className="shadow-sm bg-white flex w-full flex-col items-stretch pl-6 pr-11 py-12 rounded-3xl max-md:px-5">
        <div className="items-stretch flex justify-between gap-3">
          <img
            loading="lazy"
            src={userAvatarUrl}
            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-stone-900 text-base leading-5 whitespace-nowrap">
              <span className="">Hello</span>
              <span className=""> 👋</span>
            </div>
            <div className="text-stone-900 text-xl leading-6 whitespace-nowrap mt-1">
              Jenifer Feroz
            </div>
            {/* Add more user information here */}
          </div>
        </div>

        {/* Menu Section */}
        <div className="text-indigo-800 text-xl leading-6 whitespace-nowrap mt-14 max-md:mr-1 max-md:mt-10">
          Menu
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            iconUrl={item.iconUrl}
            text={item.text}
            isActive={index === activeMenuItem}
            onClick={() => setActiveMenuItem(index)}
          />
        ))}

        {/* Settings Section */}
        <div className="text-indigo-800 text-xl leading-6 whitespace-nowrap mt-10 max-md:mr-1">
          Settings
        </div>

        {/* Settings Items */}
        {settingsItems.map((item, index) => (
          <MenuItem
            key={index}
            iconUrl={item.iconUrl}
            text={item.text}
            isActive={index === activeMenuItem}
            onClick={() => setActiveMenuItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
