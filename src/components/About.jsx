import React, { useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { EarthCanvas } from "./canvas";
import avatar from "../assets/avatar.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>   
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Giới thiệu</p>
            <h2 className={styles.sectionHeadText}>Tổng quan.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] leading-[30px]"
          >
            Xin chào, tôi là Nguyễn Phạm Hải Nam, một Nhà phát triển .NET Full-Stack
            giàu kinh nghiệm với chuyên môn về C#, tôi chuyên phát triển các hệ thống 
            quản lý doanh nghiệp và chính phủ bằng .NET Core, C#, React.js và SQL Server
            .NET Core, JavaScript và các framework như React, ASP.NET MVC, và Windows Forms. 
            Ngoài ra, tôi còn một số dự án phát triển trên WordPress.
            <br></br>
            Trong thời gian rảnh rỗi, tôi thích học các ngôn ngữ lập trình mới, 
            khám phá các ứng dụng AI và cải thiện kỹ năng giải quyết vấn đề của mình.
            Tôi luôn sẵn sàng học hỏi nhanh chóng và hợp tác chặt chẽ với khách hàng  
            để phát triển các giải pháp tối ưu, bảo mật và dễ mở rộng.  
            Hãy cùng làm việc để biến ý tưởng của bạn thành những sản phẩm chất lượng cao!
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={avatar}
            alt="Profile"
            className="w-[400px] h-[500px] object-cover rounded-xl"
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "vetoi");
