/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import {
  // CompanyIcon,
  // Dashboard,
  // GrantIcon,
  ManageSVG,
  // Microphone,
  // MoneyBag,
  // TalentLogo,
} from "../../assets/icons/icons";

function SidebarIcon(props) {
  const SidebarMenuOptions = [
    {
      option: "Manage",
      icon: <ManageSVG fill={props.fill} />,
    },
    // {
    //   option: "Applications",
    //   icon: <TalentLogo fill={props.fill} />,
    // },
    // {
    //   option: "Investors",
    //   icon: <MoneyBag fill={props.fill} />,
    // },
    // {
    //   option: "Startups",
    //   icon: <CompanyIcon fill={props.fill} />,
    // },
    // {
    //   option: "Events",
    //   icon: <Microphone fill={props.fill} />,
    // },
    // {
    //   option: "Grants",
    //   icon: <GrantIcon fill={props.fill} />,
    // },
  ];

  const filteredOptions = SidebarMenuOptions.filter((ele) => {
    return ele.option === props.option;
  });
  return filteredOptions.length > 0 ? filteredOptions[0].icon : null;
}

export default SidebarIcon;
