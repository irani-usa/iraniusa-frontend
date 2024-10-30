import ExperincesIcon from "@/components/Icons/Profile/Experinces";
import React from "react";

interface ExperincesProps {
  title: string;
  date: string;
  data: {
    project: string,
    company: string,
    location: string,
  }
}

const ExperincesCard: React.FC<ExperincesProps> = (props) => {
  return (

    <div className="flex gap-3 justify-center">
      <div className="border border-white-shade-4 h-min p-2 rounded-lg">
       <ExperincesIcon />
      </div>
      <div className="flex flex-col gap-2">
        <span className=" bg-white-shade-3 rounded-lg px-3 py-1.5">{props.date}</span>
        <h2 className="font-semibold text-lg ">{props.title}</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2 text-sm text-white-shade-9"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96951 0.728516H7.03017C7.55428 0.728499 7.99133 0.728485 8.33828 0.775132C8.7045 0.824368 9.03513 0.932676 9.30082 1.19837C9.56651 1.46406 9.67482 1.79469 9.72406 2.1609C9.75853 2.41734 9.76752 2.72298 9.76986 3.07662C10.1482 3.08877 10.4854 3.11089 10.7851 3.15118C11.469 3.24313 12.0226 3.43686 12.4591 3.87341C12.8957 4.30995 13.0894 4.86351 13.1813 5.54742C13.2707 6.21196 13.2707 7.06108 13.2707 8.13311V8.19892C13.2707 9.27095 13.2707 10.1201 13.1813 10.7846C13.0894 11.4685 12.8957 12.0221 12.4591 12.4586C12.0226 12.8952 11.469 13.0889 10.7851 13.1809C10.1206 13.2702 9.27144 13.2702 8.19941 13.2702H5.80026C4.72824 13.2702 3.87912 13.2702 3.21457 13.1809C2.53066 13.0889 1.97711 12.8952 1.54056 12.4586C1.10402 12.0221 0.910282 11.4685 0.818333 10.7846C0.728987 10.1201 0.728995 9.27095 0.729004 8.19893V8.13311C0.728995 7.06108 0.728987 6.21196 0.818333 5.54742C0.910282 4.86351 1.10402 4.30995 1.54056 3.87341C1.97711 3.43686 2.53066 3.24313 3.21457 3.15118C3.51428 3.11089 3.85152 3.08877 4.22982 3.07662C4.23216 2.72298 4.24114 2.41734 4.27562 2.1609C4.32486 1.79469 4.43316 1.46406 4.69885 1.19837C4.96454 0.932676 5.29518 0.824368 5.66139 0.775132C6.00835 0.728485 6.44539 0.728499 6.96951 0.728516ZM5.10505 3.06289C5.32563 3.06185 5.55722 3.06185 5.80026 3.06185H8.19942C8.44246 3.06185 8.67405 3.06185 8.89462 3.06289C8.89216 2.7302 8.88398 2.47925 8.85686 2.2775C8.82067 2.00831 8.75812 1.8931 8.6821 1.81709C8.60609 1.74107 8.49088 1.67852 8.22169 1.64233C7.93992 1.60445 7.56218 1.60352 6.99984 1.60352C6.4375 1.60352 6.05975 1.60445 5.77798 1.64233C5.5088 1.67852 5.39359 1.74107 5.31757 1.81709C5.24155 1.8931 5.17901 2.00831 5.14282 2.2775C5.11569 2.47925 5.10751 2.7302 5.10505 3.06289ZM3.33117 4.01838C2.74428 4.09728 2.40615 4.24525 2.15928 4.49213C1.91241 4.739 1.76444 5.07713 1.68553 5.66401C1.60493 6.26348 1.604 7.05371 1.604 8.16602C1.604 9.27833 1.60493 10.0686 1.68553 10.668C1.76444 11.2549 1.91241 11.593 2.15928 11.8399C2.40615 12.0868 2.74428 12.2348 3.33117 12.3137C3.93064 12.3943 4.72086 12.3952 5.83317 12.3952H8.1665C9.27882 12.3952 10.069 12.3943 10.6685 12.3137C11.2554 12.2348 11.5935 12.0868 11.8404 11.8399C12.0873 11.593 12.2352 11.2549 12.3141 10.668C12.3947 10.0686 12.3957 9.27833 12.3957 8.16602C12.3957 7.05371 12.3947 6.26348 12.3141 5.66401C12.2352 5.07713 12.0873 4.739 11.8404 4.49213C11.5935 4.24525 11.2554 4.09728 10.6685 4.01838C10.069 3.93778 9.27882 3.93685 8.1665 3.93685H5.83317C4.72086 3.93685 3.93064 3.93778 3.33117 4.01838Z" fill="#A6A6A6" />
            <path d="M9.9165 5.24935C9.9165 5.57152 9.65534 5.83268 9.33317 5.83268C9.01101 5.83268 8.74984 5.57152 8.74984 5.24935C8.74984 4.92718 9.01101 4.66602 9.33317 4.66602C9.65534 4.66602 9.9165 4.92718 9.9165 5.24935Z" fill="#A6A6A6" />
            <path d="M5.24984 5.24935C5.24984 5.57152 4.98867 5.83268 4.6665 5.83268C4.34434 5.83268 4.08317 5.57152 4.08317 5.24935C4.08317 4.92718 4.34434 4.66602 4.6665 4.66602C4.98867 4.66602 5.24984 4.92718 5.24984 5.24935Z" fill="#A6A6A6" />
          </svg>
            {props.data.project}</li>
          <li className="flex items-center gap-2 text-sm text-white-shade-9"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.7195 0.728516H9.94684C10.471 0.728499 10.908 0.728485 11.255 0.775132C11.6212 0.824368 11.9518 0.932676 12.2175 1.19837C12.4832 1.46406 12.5915 1.79469 12.6407 2.1609C12.6874 2.50786 12.6874 2.94491 12.6873 3.46902V12.3952H12.8332C13.0748 12.3952 13.2707 12.5911 13.2707 12.8327C13.2707 13.0743 13.0748 13.2702 12.8332 13.2702H1.1665C0.924879 13.2702 0.729004 13.0743 0.729004 12.8327C0.729004 12.5911 0.924879 12.3952 1.1665 12.3952H1.31234L1.31234 5.21902C1.31232 4.6949 1.31231 4.25786 1.35895 3.9109C1.40819 3.54469 1.5165 3.21406 1.78219 2.94837C2.04788 2.68268 2.37851 2.57437 2.74472 2.52513C3.09168 2.47848 3.52872 2.4785 4.05284 2.47852L5.99533 2.47852C6.02534 1.96858 6.11935 1.52787 6.44885 1.19837C6.71454 0.932676 7.04518 0.824368 7.41139 0.775132C7.75835 0.728485 8.19539 0.728499 8.7195 0.728516ZM6.42049 3.35352C6.41974 3.35352 6.41899 3.35352 6.41824 3.35352C6.41766 3.35352 6.41708 3.35352 6.4165 3.35352H4.08317C3.52083 3.35352 3.14309 3.35445 2.86132 3.39233C2.59213 3.42852 2.47692 3.49107 2.40091 3.56709C2.32489 3.6431 2.26234 3.75831 2.22615 4.0275C2.18827 4.30927 2.18734 4.68701 2.18734 5.24935V12.3952H4.81234V11.0827C4.81234 10.8411 5.00821 10.6452 5.24984 10.6452C5.49146 10.6452 5.68734 10.8411 5.68734 11.0827V12.3952H8.31234V5.24935C8.31234 4.68701 8.31141 4.30927 8.27353 4.0275C8.23733 3.75831 8.17479 3.6431 8.09877 3.56708C8.02275 3.49107 7.90754 3.42852 7.63836 3.39233C7.35725 3.35454 6.98063 3.35352 6.42049 3.35352ZM9.18734 12.3952L9.18734 5.21902C9.18736 4.69491 9.18737 4.25786 9.14072 3.9109C9.09149 3.54469 8.98318 3.21406 8.71749 2.94837C8.4518 2.68268 8.12116 2.57437 7.75495 2.52513C7.50683 2.49177 7.21263 2.48228 6.87346 2.47958C6.90273 2.07146 6.96694 1.91772 7.06757 1.81708C7.14359 1.74107 7.2588 1.67852 7.52798 1.64233C7.80975 1.60445 8.1875 1.60352 8.74984 1.60352H9.9165C10.4788 1.60352 10.8566 1.60445 11.1384 1.64233C11.4075 1.67852 11.5228 1.74107 11.5988 1.81708C11.6748 1.8931 11.7373 2.00831 11.7735 2.2775C11.8114 2.55927 11.8123 2.93701 11.8123 3.49935V12.3952H9.18734ZM3.06234 4.66602C3.06234 4.42439 3.25821 4.22852 3.49984 4.22852H6.99984C7.24146 4.22852 7.43734 4.42439 7.43734 4.66602C7.43734 4.90764 7.24146 5.10352 6.99984 5.10352H3.49984C3.25821 5.10352 3.06234 4.90764 3.06234 4.66602ZM3.06234 6.41602C3.06234 6.17439 3.25821 5.97852 3.49984 5.97852H6.99984C7.24146 5.97852 7.43734 6.17439 7.43734 6.41602C7.43734 6.65764 7.24146 6.85352 6.99984 6.85352H3.49984C3.25821 6.85352 3.06234 6.65764 3.06234 6.41602ZM3.06234 8.16602C3.06234 7.92439 3.25821 7.72852 3.49984 7.72852H6.99984C7.24146 7.72852 7.43734 7.92439 7.43734 8.16602C7.43734 8.40764 7.24146 8.60352 6.99984 8.60352H3.49984C3.25821 8.60352 3.06234 8.40764 3.06234 8.16602Z" fill="#A6A6A6"/>
</svg>
{props.data.company}</li>
          <li className="flex items-center gap-2 text-sm text-white-shade-9"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.896 5.91627C1.896 3.05851 4.17392 0.728516 7.00016 0.728516C9.82641 0.728516 12.1043 3.05851 12.1043 5.91627C12.1043 7.29591 11.7111 8.7773 11.0161 10.0571C10.3219 11.3353 9.30761 12.4461 8.03879 13.0391C7.37966 13.3472 6.62067 13.3472 5.96153 13.0391C4.69271 12.4461 3.67844 11.3353 2.98424 10.0571C2.28918 8.7773 1.896 7.29591 1.896 5.91627ZM7.00016 1.60352C4.67175 1.60352 2.771 3.52705 2.771 5.91627C2.771 7.13956 3.12253 8.47834 3.75316 9.63951C4.38464 10.8022 5.27701 11.7533 6.33204 12.2464C6.75636 12.4448 7.24397 12.4448 7.66829 12.2464C8.72332 11.7533 9.61569 10.8022 10.2472 9.63951C10.8778 8.47834 11.2293 7.13956 11.2293 5.91627C11.2293 3.52705 9.32858 1.60352 7.00016 1.60352ZM4.81266 5.83268C4.81266 5.59106 5.00854 5.39518 5.25016 5.39518H8.75016C8.99179 5.39518 9.18766 5.59106 9.18766 5.83268C9.18766 6.07431 8.99179 6.27018 8.75016 6.27018H5.25016C5.00854 6.27018 4.81266 6.07431 4.81266 5.83268Z" fill="#A6A6A6"/>
</svg>
{props.data.location}</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperincesCard;
