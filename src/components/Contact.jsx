import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Portfolio",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Liên hệ</p>
        <h3 className={styles.sectionHeadText}>Kết nối.</h3>
        <p >Còn chần chờ gì nữa hãy kết nối với tôi qua các phương thức:</p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <a href="https://www.facebook.com/namnguyendno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-3xl">
            <FaFacebook className="text-blue-500" />
            <span className="text-lg">Facebook</span>
          </a>
          
          <a href="https://zalo.me/0387316935" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-3xl">
            <SiZalo className="text-blue-400" />
            <span className="text-lg">Zalo</span>
          </a>
          
          <a href="https://www.facebook.com/messages/e2ee/t/7303981189614825" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-3xl">
            <FaFacebookMessenger className="text-blue-400" />
            <span className="text-lg">Messenger</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "lienhe");
