
import Leftnavbar from "@/components/leftnavbar";
import Header from "@/components/header";
import Main from "@/components/main";

import { useState } from "react";

export default function Home() {

  const [color,setColor] = useState("white");

  return (
    <>
      <div className="d-sm-flex min-vh-100  w-100" style={{ backgroundColor: "#0C0C0D" }}>
        <Leftnavbar />
        <div className="w-100 ">

          <Header />
          <Main />

        </div>

      </div>
      <div className='d-flex d-sm-none w-100   justify-content-around py-4' style={{ position: "sticky", bottom: "0px", backgroundColor: "#0C0C0D", marginTop: "10px" ,color:"#A5A5A6"}}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99805 5L6.99805 3M6.99805 3L4.99805 1M6.99805 3H4.99805C2.78891 3 0.998047 4.79086 0.998047 7M16.998 17L14.998 19M14.998 19L16.998 21M14.998 19H16.998C19.2072 19 20.998 17.2091 20.998 15M12.4152 12.4172C13.1975 12.7908 14.0733 13 14.998 13C18.3118 13 20.998 10.3137 20.998 7C20.998 3.68629 18.3118 1 14.998 1C11.6843 1 8.99805 3.68629 8.99805 7C8.99805 7.92472 9.20724 8.80057 9.58088 9.58283M12.998 15C12.998 18.3137 10.3118 21 6.99805 21C3.68434 21 0.998047 18.3137 0.998047 15C0.998047 11.6863 3.68434 9 6.99805 9C10.3118 9 12.998 11.6863 12.998 15Z" stroke="#2ED3B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Home
        </div>
        <div className="d-flex flex-column align-items-center">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99993 11C3.99993 7.68629 6.68622 5 9.99993 5M3.99993 11C3.99993 12.6484 4.66466 14.1415 5.74067 15.226C5.84445 15.3305 5.89633 15.3828 5.92696 15.4331C5.95619 15.4811 5.9732 15.5224 5.98625 15.5771C5.99993 15.6343 5.99993 15.6995 5.99993 15.8298V18.2C5.99993 18.48 5.99993 18.62 6.05443 18.727C6.10236 18.8211 6.17885 18.8976 6.27293 18.9455C6.37989 19 6.5199 19 6.79993 19H8.69993C8.97996 19 9.11997 19 9.22693 18.9455C9.32101 18.8976 9.3975 18.8211 9.44543 18.727C9.49993 18.62 9.49993 18.48 9.49993 18.2V17.8C9.49993 17.52 9.49993 17.38 9.55443 17.273C9.60236 17.1789 9.67885 17.1024 9.77293 17.0545C9.87989 17 10.0199 17 10.2999 17H11.6999C11.98 17 12.12 17 12.2269 17.0545C12.321 17.1024 12.3975 17.1789 12.4454 17.273C12.4999 17.38 12.4999 17.52 12.4999 17.8V18.2C12.4999 18.48 12.4999 18.62 12.5544 18.727C12.6024 18.8211 12.6789 18.8976 12.7729 18.9455C12.8799 19 13.0199 19 13.2999 19H15.2C15.48 19 15.62 19 15.727 18.9455C15.8211 18.8976 15.8976 18.8211 15.9455 18.727C16 18.62 16 18.48 16 18.2V17.2243C16 17.0223 16 16.9212 16.0288 16.8401C16.0563 16.7624 16.0911 16.708 16.15 16.6502C16.2114 16.59 16.3155 16.5417 16.5237 16.445C17.5059 15.989 18.344 15.2751 18.9511 14.3902C19.0579 14.2346 19.1112 14.1568 19.1683 14.1108C19.2228 14.0668 19.2717 14.0411 19.3387 14.021C19.4089 14 19.4922 14 19.6587 14H20.2C20.48 14 20.62 14 20.727 13.9455C20.8211 13.8976 20.8976 13.8211 20.9455 13.727C21 13.62 21 13.48 21 13.2V9.78575C21 9.51916 21 9.38586 20.9505 9.28303C20.9013 9.181 20.819 9.09867 20.717 9.04953C20.6141 9 20.4808 9 20.2143 9C20.0213 9 19.9248 9 19.8471 8.9738C19.7633 8.94556 19.7045 8.90798 19.6437 8.84377C19.5874 8.78422 19.5413 8.68464 19.4493 8.48547C19.1538 7.84622 18.7492 7.26777 18.2593 6.77404C18.1555 6.66945 18.1036 6.61716 18.073 6.56687C18.0437 6.51889 18.0267 6.47759 18.0137 6.42294C18 6.36567 18 6.30051 18 6.17018V5.06058C18 4.70053 18 4.52051 17.925 4.39951C17.8593 4.29351 17.7564 4.21588 17.6365 4.18184C17.4995 4.14299 17.3264 4.19245 16.9802 4.29136L14.6077 4.96922C14.5673 4.98074 14.5472 4.9865 14.5267 4.99054C14.5085 4.99414 14.4901 4.99671 14.4716 4.99826C14.4508 5 14.4297 5 14.3874 5H9.99993M3.99993 11H3C1.89543 11 1 10.1046 1 9C1 8.25972 1.4022 7.61337 2 7.26756M9.99993 5H13.9646C13.9879 4.8367 14 4.66976 14 4.5C14 2.567 12.433 1 10.5 1C8.567 1 7 2.567 7 4.5C7 4.9172 7.073 5.31736 7.20692 5.68839C8.04114 5.24881 8.99144 5 9.99993 5Z" stroke="#A5A5A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Balance
        </div>
        <div className="d-flex flex-column align-items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.3163 18.4384C4.92462 17.0052 6.34492 16 8 16H14C15.6551 16 17.0754 17.0052 17.6837 18.4384M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5ZM21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#A5A5A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Profile
        </div>
      </div>



    </>
  );
}
