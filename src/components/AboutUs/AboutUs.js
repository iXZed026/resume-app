import React, { useState } from 'react';
import "./AboutUs.css";
import { AboutBox } from './AboutBox';
import { MoreInfo } from './MoreInfo';

export const AboutUs = () => {

  const [aboutUs, setAboutUs] = useState([
    {
      id: 1, firstName: "دانیال", lastName: "لطفی", yearOfBirth: 1383, area: "Frontend", aboutMe: `
    من یک توسعه‌دهنده با تجربه و علاقه به کار تیمی هستم که مسلط به تکنولوژی‌های
     مختلف و فریمورک‌های معتبر در زمینه توسعه وب می‌باشم. هدف من افزایش
      دانش و مهارت در زمینه توسعه نرم‌افزار و کسب تجربیات جدید است.
    
    'توانمندی‌ها'
    توسعه وب:
     مسلط به HTML،CSS،وJavaScript با دانش پیشرفته در این زمینه.
    React.js: تجربه و مهارت در استفاده از فریمورک React.js برای توسعه برنامه‌های 
    تحت وب پویا.
    مدیریت کد منبع: آشنایی با گیت و GitHub برای مدیریت کد منبع و همکاری در پروژه‌های
    گروهی.
    آشنایی با Bootstrap: تجربه محدود در استفاده از فریمورک Bootstrap برای طراحی 
    وبسایت‌های واکنش‌گرا.
    تجربه کاری
    کارآموزی - شرکت کارگذاری نو اندیشان
    تکمیل دوره کارآموزی 2 ماهه در زمینه توسعه وب.
    مشارکت در پروژه‌های گروهی و ارتقاء مهارت‌های کار تیمی.
    
    تحصیلات
    دانشجوی کارشناسی مهندسی کامپیوتر در دانشگاه واحد قدس
    توانمندی‌های اضافی
    علاقه به کسب تجربیات جدید و یادگیری فناوری‌های نوین.
    توانایی برقراری ارتباط و همکاری فعّال در محیط‌های کار تیمی.
    تعهد به به‌روزرسانی دائمی مهارت‌ها و آگاهی از تغییرات صنعت.`, img: "../images/danyal.png", expertise: 'دانشجو', address: "کرج,فردیس,شهرک 110,گلستان 14غربی,هنر یکم غربی ", gender: 'مرد'
    },
    { id: 2, firstName: "امین", lastName: "قاسمی", yearOfBirth: 1382, area: "Backend", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/1101238.jpg", expertise: 'دانشجو', address: "فردیس,شهرک 110,گلستان 14غربی,هنر یکم غربی", gender: 'مرد' },
    { id: 3, firstName: "سارا", lastName: "مرادخانی", yearOfBirth: 1381, area: "Database", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/1101238.jpg", expertise: 'دانشجو', address: "فردیس,شهرک 110,گلستان 14غربی,هنر یکم غربی", gender: 'زن' },
    { id: 4, firstName: "اشکان", lastName: "طاهرنیا", yearOfBirth: 1383, area: "Wordpress", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/ashkan.png", expertise: 'دانشجو', address: "فردیس,شهرک 110,گلستان 14غربی,هنر یکم غربی", gender: 'مرد' },
  ]);

  const [newAboutUs, setNewAboutUs] = useState(null);

  const [moreInfo, setMoreInfo] = useState(false);

  const infoHandle = (ID) => {
    let findAboutUs = aboutUs.find((about => about.id === ID));
    setNewAboutUs(findAboutUs)
  }

  return (
    <>
      {
        !moreInfo ? (
          <div className="about-us">
            <div className="about-us-container">
              <div className="about-us-flex">
                {
                  aboutUs.map((about, key) => <AboutBox moreInfo={moreInfo} key={about.id} {...about} onInfo={infoHandle} setMoreInfo={setMoreInfo} />)
                }
              </div>
            </div>
          </div>
        ) : (
          <MoreInfo {...newAboutUs} setMoreInfo />
        )
      }
    </>
  )
}
