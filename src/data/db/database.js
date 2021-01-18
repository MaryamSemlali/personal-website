import Mock from "../mock";

const database = {
  information: {
    name: 'Maryam SEMLALI',
    aboutContent: "I am a fullstack web developer who focuses on applying the following quote “Websites should look good from the inside and out.”",
    age: 21,
    phone: '+33 6 58 95 88 26',
    nationality: 'Moroccan',
    language: 'Tamazight, Arabic, English, French',
    email: 'sem.maryam@gmail.com',
    address: 'Cergy, France',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/semlalimaryam/',
      github: 'https://github.com/MaryamSemlali'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/maryam-semlali.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Khtad tchda bzaf",
      author: {
        name: 'Yaaqoub SEMLALI',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 50
    },
    {
      title: "CSS3",
      value: 50
    },
    {
      title: "Javascript",
      value: 60
    },
    {
      title: "NodeJS",
      value: 80
    },
    {
      title: "jQuery",
      value: 80
    },
    {
      title: "ReactJS",
      value: 60
    },

  ],
  portfolios: [
    {
      id: 1,
      title: "Mo9fe API",
      subtitle: "Job search API with NodeJS",
      imageUrl: "/images/github-logo.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/MaryamSemlali/Mo9fe_api'
    },
    {
      id: 2,
      title: "Mo9fe UI",
      subtitle: "Job search user interface with ReactJS",
      imageUrl: "/images/github-logo.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/MaryamSemlali/Mo9fe_React'
    },
    {
      id: 3,
      title: "Movies management",
      subtitle: "a simple template for movies management with NodeJS and ReactJS",
      imageUrl: "/images/github-logo.jpg",
      url: 'https://github.com/MaryamSemlali/movies-management'
    },
    {
      id: 4,
      title: "Crocodile API",
      subtitle: "User management API under developement ",
      imageUrl: "/images/github-logo.jpg",
      url: 'https://github.com/MaryamSemlali/crocodile-api'
    },
    {
      id: 5,
      title: "Search engine",
      subtitle: "Simple search engine to search for different people with their names in an input. ",
      imageUrl: "/images/github-logo.jpg",
      url: 'https://github.com/MaryamSemlali/search-engine'
    },

  ],
  experience: {
    workingExperience: [
      {
        id: 3,
        year: "Nov 2019 - Jun 2020",
        position: "Internship (Fullstack Developer)",
        company: "Les oréades",
        details: "I created a simple API for a package tracking application/website with NodeJS/MongoDB" +
            ", I also participated in website front-end with ReactJS. "
      },
      {
        id: 4,
        year: "Jul 2019- Aug 2019",
        position: "Internship",
        company: "Financial Synergies",
        details: "I did an internship as a mulitask computer student, tasks such as : Fault diagnosis of used computers, operating system installation like Windows/Linux, Software updates, work with pack " +
            "office / data entry work"
      },
      {
        id: 5,
        year: "Jan 2018 - June 2018",
        position: "Second Year End of studies project (Mo9fe)",
        company: "School EFET",
        details: "it is a simple job search template that can be used by people with no technology background so I started from the scratch creating a manufacturing " +
            "specification then I did a concept study with UML diagrams and the coding step came after " +
            "Technical wrap-up:" +
            "1. Responsive Web application using ReactJS / Redux / react-bootstrap" +
            "2. Back-end server written down in NodeJS whitch handles API requests"
      },

    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2022",
        graduation: "Master Degree in Computer Science",
        university: "Estiam",
        details: ""
      },
      {
        id: 2,
        year: "2019 - 2020",
        graduation: "Bachelor Degree in Computer Science",
        university: "Estiam",
        details: ""
      },
      {
        id: 3,
        year: "2017 - 2019",
        graduation: "Information Technology",
        university: "EFET (École Française d'Enseignement Technique)",
        details: ""
      },
      {
        id: 3,
        year: "2016 - 2017",
        graduation: "High School Diploma",
        university: "Tarfaya High School",
        details: ""
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+33 58 95 88 26'],
    emailAddress: ['sem.maryam@gmail.com'],
    address: "Cergy, France"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});