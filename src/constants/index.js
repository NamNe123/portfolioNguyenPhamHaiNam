import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desktop Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Công ty cổ phần ASOFT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "03/2025 - nay",
    points: [
      "Phát triển và duy trì các website và phần mềm máy tính bằng .NET Core, đảm bảo hiệu suất cao và trải nghiệm người dùng mượt mà.",
      "Hợp tác chặt chẽ với các nhóm chức năng chéo, bao gồm nhà thiết kế, quản lý sản phẩm và các nhà phát triển khác, để xây dựng và tối ưu hóa sản phẩm theo yêu cầu khách hàng.",
      "Triển khai các thiết kế giao diện hiện đại, đảm bảo khả năng phản hồi (responsive) và tương thích đa trình duyệt cho các ứng dụng web.",
      "Bảo trì và tối ưu hóa hệ thống phần mềm nội bộ, hỗ trợ doanh nghiệp trong quản lý và vận hành hiệu quả.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "05/2024 - 03/2025",
    points: [
      "Xác định yêu cầu & lên kế hoạch.",
      "Thiết kế giao diện người dùng (UI/UX).",
      "Xây dựng kiến trúc & phát triển ứng dụng.",
      "Kiểm thử & Gỡ lỗi (Testing & Debugging).",
      "Đóng gói & Triển khai (Deployment).",
      "Bảo trì & Cập nhật.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Công ty cổ phần tin học Tri Thức",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "05/2023 - 05/2024",
    points: [
      "Phát triển và duy trì các hệ thống quản lý doanh nghiệp và chính phủ bằng .NET Core, React.js, SQL Server",
      "Hợp tác chặt chẽ với các nhóm phân tích nghiệp vụ, thiết kế và phát triển để đảm bảo sản phẩm đáp ứng yêu cầu thực tế.",
      "Triển khai giao diện người dùng tối ưu, đáp ứng đa nền tảng, đảm bảo trải nghiệm mượt mà trên các trình duyệt và thiết bị khác nhau.",
      "Tích hợp và tối ưu cơ sở dữ liệu, sử dụng Entity Framework, LINQ và Stored Procedures để tăng tốc truy vấn và đảm bảo tính toàn vẹn dữ liệu.",
      "Triển khai và bảo trì hệ thống, tối ưu quy trình phát triển phần mềm.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Phần mềm quản lý ban dân tộc tỉnh Đắk Nông ",
    description:
      "Nền tảng web quản lý và hỗ trợ chính sách cho đồng bào dân tộc thiểu số, giúp phân bổ nguồn lực, tra cứu thông tin kinh tế - xã hội, văn hóa - du lịch, chính sách - thủ tục một cách chính xác và minh bạch, đồng thời theo dõi dân số theo khu vực.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phần mềm quản lý ngành Công Thương Cà Mau",
    description:
      "Nền tảng ứng dụng web giúp quản lý, lưu trữ và tra cứu dữ liệu ngành Công Thương Cà Mau, cung cấp giải pháp hiệu quả, bảo mật và minh bạch cho công tác quản lý doanh nghiệp, cấp phép, kiểm tra và thống kê, hỗ trợ ra quyết định nhanh chóng và chính xác.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phần mềm quản lý việc làm Hậu Giang",
    description:
      "Nền tảng ứng dụng web kết nối doanh nghiệp và người lao động tại Hậu Giang, giúp quản lý tuyển dụng, tìm việc làm, tra cứu thông tin thị trường lao động, tối ưu hóa quy trình tuyển dụng và nâng cao hiệu quả kết nối việc làm, giúp giản thời gian tìm việc làm.",
    tags: [
       {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phần mềm Sign-in system ",
    description:
      "Sign-in System là phần mềm desktop giúp quản lý điểm danh và theo dõi ra vào của nhân sự, tối ưu quy trình điểm danh, chấm công, nâng cao hiệu suất quản lý, đảm bảo tính minh bạch và tự động hóa trong việc theo dõi thời gian làm việc.",
    tags: [
      {
        name: "Windows Forms C#",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phần mềm quản lý đánh thẻ điểm danh PM4 ",
    description:
      "PM4 là phần mềm desktop hỗ trợ quản lý điểm danh bằng thẻ, giúp theo dõi giờ làm việc, ra vào của nhân sự theo từng phòng ban, tối ưu hóa quy trình chấm công, nâng cao hiệu suất quản lý và độ chính xác trong kiểm soát thời gian làm việc.",
    tags: [
      {
        name: "Windows Forms C#",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Key Premium Shop - Tài khoản chính hãng ",
    description:
      "Key Premium Shop là nền tảng web chuyên cung cấp tài khoản và key bản quyền chính hãng, đảm bảo chất lượng, bảo mật, uy tín với giao diện trực quan, dễ sử dụng, hỗ trợ khách hàng truy cập dịch vụ cao cấp nhanh chóng và tiện lợi.",
    tags: [
      {
        name: "WordPress",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
