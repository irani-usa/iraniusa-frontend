"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const page = () => {

     const menuItems = [
        { value: "Home", slug: "/" },
        { value: "Events", slug: "/events" },
        { value: "admin login", slug: "/admin-login" },
        { value: "checkout", slug: "/checkout"  },
        {value: "checkout active", slug: "/checkout/active"},
        {value: "checkout canceled", slug: "/checkout/canceled"},
        { value: "Financial market", slug: "/financial-market" },   
        { value: "Plans", slug: "/plans" },
        { value: "About", slug: "/about" },
        { value: "contact", slug: "/contact" },
        { value: "detail", slug: "/detail" },
        { value: "faq", slug: "/faq" },
        { value: "financial-full", slug: "/financial-full" },
        { value: "forget-password", slug: "/forget-password" },
        { value: "login", slug: "/login" },
        { value: "register", slug: "/register" },
        { value: "SearchDetails", slug: "/SearchDetails" },
        { value: "terms", slug: "/terms" },
        { value: "Tours", slug: "/Tours" },
        { value: "ToursSearch", slug: "/login" },
        { value: "profile A&E", slug: "/profile/A&E" },
        { value: "profile platinum starter", slug: "/profile/platinum/starter" },
        { value: "profile platinum pro", slug: "/profile/platinum/pro" },
        { value: "profile professional starter", slug: "/profile/professional/starter" },
        { value: "profile professional starter", slug: "/profile/professional/starter" },
        { value: "profile ultra brands", slug: "/profile/ultra/brands" },
        { value: "profile ultra eventSearch", slug: "/profile/ultra/eventSearch" },
        { value: "profile ultra exhibition", slug: "/profile/ultra/exhibition" },
        { value: "profile ultra brmarketands", slug: "/profile/ultra/market" },
        { value: "profile ultra realestate", slug: "/profile/ultra/realestate" },
        { value: "profile ultra resturant", slug: "/profile/ultra/resturant" },
      
        
       

      ];
  const currentRoute = usePathname();

    
  return (
    <div className='container py-5 flex flex-wrap gap-12'>
         {menuItems.map((link) => {
              return (
                <li
                  key={link.slug}
                  className="text-2xl flex items-center hover:cursor-pointer transitaion-all"
                  
                >
                  <Link href={link.slug}>{link.value}</Link>
                </li>
              );
            })}
    </div>
  )
}

export default page