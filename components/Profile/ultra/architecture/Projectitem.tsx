import React from 'react'

interface ProjectitemProps {
  title: string,
  cover: string,
  discretion: string,
  feature: string[],
  classes: string,
}

export const Projectitem: React.FC<ProjectitemProps> = ({ title, cover, discretion, feature, classes }) => {
  return (
    <div className={` $${classes} flex flex-col  w-full border border-white-shade-4 rounded-xl p-2`}>
      <div className='w-full h-60 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${cover})` }}></div>
      <div className='pl-2'>
        <h1 className='text-black mt-6 font-opensans font-semibold text-[16px]'>{title}</h1>
        <p className='text-white-shade-11 font-medium mt-2 text-[15px]'>{discretion}</p>
        <div className='flex items-center gap-2 mt-3  mb-2'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03703 0.937501H8.96297C8.46434 0.937475 8.03467 0.937452 7.69062 0.983708C7.32189 1.03328 6.96844 1.14508 6.68176 1.43176C6.39507 1.71845 6.28328 2.07189 6.2337 2.44062C6.18745 2.78468 6.18747 3.21433 6.1875 3.71297L6.1875 5.53353C6.01156 5.47134 5.82223 5.4375 5.625 5.4375H3.375C2.44302 5.4375 1.6875 6.19302 1.6875 7.125V15.9375H1.5C1.18934 15.9375 0.9375 16.1893 0.9375 16.5C0.9375 16.8107 1.18934 17.0625 1.5 17.0625H16.5C16.8107 17.0625 17.0625 16.8107 17.0625 16.5C17.0625 16.1893 16.8107 15.9375 16.5 15.9375H16.3125V10.875C16.3125 9.94302 15.557 9.1875 14.625 9.1875H12.375C12.1778 9.1875 11.9884 9.22134 11.8125 9.28353L11.8125 3.71298C11.8125 3.21433 11.8126 2.78468 11.7663 2.44062C11.7167 2.07189 11.6049 1.71845 11.3182 1.43176C11.0316 1.14508 10.6781 1.03328 10.3094 0.983708C9.96533 0.937452 9.53566 0.937475 9.03703 0.937501ZM15.1875 15.9375V10.875C15.1875 10.5643 14.9357 10.3125 14.625 10.3125H12.375C12.0643 10.3125 11.8125 10.5643 11.8125 10.875V15.9375H15.1875ZM10.6875 15.9375V3.75C10.6875 3.20377 10.6863 2.85068 10.6513 2.59052C10.6185 2.34655 10.5656 2.27008 10.5227 2.22726C10.4799 2.18444 10.4035 2.13148 10.1595 2.09868C9.89932 2.0637 9.54623 2.0625 9 2.0625C8.45377 2.0625 8.10068 2.0637 7.84052 2.09868C7.59654 2.13148 7.52007 2.18444 7.47725 2.22726C7.43443 2.27008 7.38147 2.34655 7.34867 2.59052C7.31369 2.85068 7.3125 3.20377 7.3125 3.75V15.9375H10.6875ZM6.1875 15.9375V7.125C6.1875 6.81434 5.93566 6.5625 5.625 6.5625H3.375C3.06434 6.5625 2.8125 6.81434 2.8125 7.125V15.9375H6.1875Z" fill="#A6A6A6" />
          </svg>

          {feature.map(item => (

            <span className="flex items-center gap-2 font-medium  text-white-shade-11">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
