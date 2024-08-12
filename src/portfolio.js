/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bruce's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end Data products to create impact.",
  og: {
    title: "Bruce RAVEY Portfolio",
    type: "website",
    url: "https://Barucee.github.io",
  },
};

//Home Page
const greeting = {
  title: "Bruce RAVEY",
  logo_name: "BruceRAVEY",
  profile_image_path: "Moi_greeting.png",
  nickname: "",
  subTitle: `Autonomous, dynamic, and enthusiast individual who always thrives to work on end to end Data products to create impact.`,
  resumeLink: "to be posted soon",
  portfolio_repository: "https://Barucee.github.io",
  githubProfile: "https://github.com/Barucee",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Barucee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bruce-ravey/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Outlook",
    link: "mailto:bruce.ravey@live.fr",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing production ready models for various AI and statistical use cases",
        "⚡ Experience of with Time Series and recommendation systems",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          imageSrc: "Python-logo.png",
        },
        {
          skillName: "Git",
          imageSrc: "git_logo.png",
        },
        {
          skillName: "Scikitlearn",
          imageSrc: "scikit_learn_logo.png",
        },
        {
          skillName: "darts",
          imageSrc: "darts-logo.png",
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          imageSrc: "pytorch_logo.png",
        },
        {
          skillName: "Hugging Face",
          imageSrc: "hugging_face_logo.png",
        },
        {
          skillName: "OpenAI",
          imageSrc: "OpenAI_Logo.png",
        },
        {
          skillName: "Streamlit",
          imageSrc: "Streamlit-logo.png",
        },
        {
          skillName: "AWS",
          imageSrc: "AWS_logo.png",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "DataAnalystImg",
      skills: [
        "⚡ Building visualization tools for data analysis and data-driven decision making",
        "⚡ SQL database management for data storage and retrieval",
        "⚡ High level of business comprehension and data analysis for strategic decision making",
      ],
      softwareSkills: [
        {
          skillName: "PostGreSQL",
          imageSrc: "LogoPostgreSql.png",
        },
        {
          skillName: "Google Big Querry",
          imageSrc: "google_big_querry.png",
        },
        {
          skillName: "Looker",
          imageSrc: "Looker.png",
        },
        {
          skillName: "Tableau",
          imageSrc: "Tableau_sofware.png",
        },
        {
          skillName: "Power BI",
          imageSrc: "power_bi.png",
        },
        {
          skillName: "Python",
          imageSrc: "Python-logo.png",
        },
        {
          skillName: "Streamlit",
          imageSrc: "Streamlit-logo.png",
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "DataEngineerImg",
      skills: [
        "⚡ Designing and implementing scalable data pipelines for efficient data processing and transformation",
        "⚡ Building robust ETL (Extract, Transform, Load) processes to ensure data quality and reliability",
        "⚡ Collaboration with cross-functional teams to understand data requirements and optimize data architecture for business needs",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AirFlow",
          imageSrc: "AirflowLogo.png",
        },
        {
          skillName: "Google Big Querry",
          imageSrc: "google_big_querry.png",
        },
        {
          skillName: "Snowflake",
          imageSrc: "Snowflake_Logo.svg.png",
        },
        {
          skillName: "Spark",
          imageSrc: "Apache_Spark_logo.svg.png",
        },
        {
          skillName: "Python",
          imageSrc: "Python-logo.png",
        },
        {
          skillName: "Git",
          imageSrc: "git_logo.png",
        },
      ],
    },
  ],
};

// Education Page
//const competitiveSites = {
//  competitiveSites: [
//    {
//      siteName: "Kaggle",
//      iconifyClassname: "simple-icons:kaggle",
//      style: {
//        color: "#20BEFF",
//      },
//      profileLink: "https://www.kaggle.com/bruceravey",
//    },
//  ],
//};

const degrees = {
  degrees: [
    {
      title: "Toulouse School of Economics",
      subtitle: "Master in Econometrics & Empirical Economics",
      logo_path: "TSE_Logo.png",
      alt_name: "TSE",
      duration: "2023",
      descriptions: [
        "⚡ TSE is a school of economics and statistics. It is ranked since years among the top 5 Research center in Europe.",
        "⚡ I have studied differents courses in Econometrics, Statistics, Machine Learning, programming and Data Science",
        "⚡ I obtained the degree with high honours",
      ],
      website_link: "https://www.tse-fr.eu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "BI Foundations with SQL, ETL and Data Warehousing",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/3X2SHFTK856B",
      alt_name: "IBM BI Foundations",
      color_code: "#1F70C199",
    },
    {
      title: "IBM Data Warehouse Engineer",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/794QG864XEUJ",
      alt_name: "IBM DWE",
      color_code: "#1F70C199",
    },
    {
      title: "Total Data Quality",
      subtitle: "- Coursera",
      logo_path: "University-of-Michigan-Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VDFC99YPX9VG",
      alt_name: "Data Quality michigan",
      color_code: "#00274C",
    },
    {
      title: "Applied Python Data Engineering",
      subtitle: "- Coursera",
      logo_path: "Duke-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/EM4XDBW95PBW",
      alt_name: "Applied Data Engineering Duke University",
      color_code: "#FFFFFF",
    },
    {
      title: "AWS Fundamentals",
      subtitle: "- Coursera",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/QUH53AAT7S39",
      alt_name: "AWS beginner",
      color_code: "#FFFFFF",
    },
    {
      title: "Concevez des architectures Big Data",
      subtitle: "- OpenClassrooms",
      logo_path: "Logo_Centrale.png",
      certificate_link:
        "https://drive.google.com/file/d/1K7kXL-5__-cAi9IEvGitccYOWmM9XyV1/view?usp=sharing",
      alt_name: "Centrale - Big Data",
      color_code: "#FFFFFF",
    },
    {
      title: "Créez votre Data Lake",
      subtitle: "- OpenClassrooms",
      logo_path: "Logo_Centrale.png",
      certificate_link:
        "https://drive.google.com/file/d/1mLCL1tMOnzyDG-z4u0FkDgxLu5cU1cV7/view?usp=sharing",
      alt_name: "Centrale - Data Lake",
      color_code: "#FFFFFF",
    },
    {
      title: "Evaluez les performances d'un modele de machine learning",
      subtitle: "- OpenClassrooms",
      logo_path: "Logo_Centrale.png",
      certificate_link:
        "https://drive.google.com/file/d/1tM_GgNQf4DRDog24-jRNHGKdf2vieXX-/view?usp=sharing",
      alt_name: "Centrale - ML Performance",
      color_code: "#FFFFFF",
    },
    {
      title: "Maîtrisez les bases de données NoSQL",
      subtitle: "- OpenClassrooms",
      logo_path: "Logo_Centrale.png",
      certificate_link:
        "https://drive.google.com/file/d/1iLxzooh1qrK8f8gFbU8IMIhyB_sc1G0U/view?usp=sharing",
      alt_name: "Centrale - NoSQL",
      color_code: "#FFFFFF",
    },
    {
      title: "Réalisez des calculs distribués sur des données massives",
      subtitle: "- OpenClassrooms",
      logo_path: "Logo_Centrale.png",
      certificate_link:
        "https://drive.google.com/file/d/1s0O41AylvbsAcMvxaKoHjfk47Dr5RTe_/view?usp=sharing",
      alt_name: "Centrale - Big Data Distributed Computing",
      color_code: "#FFFFFF",
    },
    {
      title: "Statistics with Python",
      subtitle: "- Coursera",
      logo_path: "University-of-Michigan-Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/B455FMXNFS3E",
      alt_name: "Statistics michigan",
      color_code: "#00274C",
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/58604d37-05a2-4fcb-a20b-1eea51aa00f2?source=linked_in_profile",
      alt_name: "IBM DE Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "IBM Machine Learning Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/7S67BW39SQYJ",
      alt_name: "IBM Machine Learning Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "NoSQL, Big Data, and Spark Foundations",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/7S67BW39SQYJ",
      alt_name: "NoSQL, Big Data, and Spark Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/439bc8df-3715-4122-ad28-729f0b324db9",
      alt_name: "IBM Data Science Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "Applied Data Science Capstone",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/541b02db-2cd1-4366-9e02-545c44dee452",
      alt_name: "IBM Data Science Capstone",
      color_code: "#1F70C199",
    },
    {
      title: "Data Analyst Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/b6acd49c-50a3-4f40-b775-64aa17f22579",
      alt_name: "IBM Data Analyst",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization with Tableau",
      subtitle: "- Coursera",
      logo_path: "UC-Davis-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/TCLZUDFF8KRG",
      alt_name: "Tableau UC Davis",
      color_code: "#FFBB0099",
    },
    {
      title: "SQL for Data Science",
      subtitle: "- Coursera",
      logo_path: "UC-Davis-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/D78MWCJV7YQC",
      alt_name: "SQL UC Davis",
      color_code: "#FFBB0099",
    },
    {
      title: "Creating Business Value with Data and Looker",
      subtitle: "- Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/QV6G6MR55V89",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6d8a9060-ab99-4e09-ada7-4d3013da2d00/public_url",
      alt_name: "Google",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Job-Market Experiences",
  description:
    "From my humble beginnings in student jobs to my current positions as a Data professional, my journey reflects a diverse range of experiences shaping my approach to problem-solving.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Post-education employment",
      work: true,
      experiences: [
        {
          title: "Analytics Engineer - Fixed Term Contract",
          company: "Canal +",
          company_url: "https://www.canalplus.com/",
          logo_path: "canal_plus.png",
          duration: "October 2023 - March 2024",
          location: "Puteaux, France",
          description: `•	I worked on the pipeline of the data and tracking its quality
          ➔	Designing and deploying data pipelines on AWS
          ➔	Optimizing pipeline performance and reliability for efficient operations                                
          ➔	Providing visualization of data quality with Power BI
          `,
          color: "#0879bf",
        },
        {
          title: "Data Scientist - Apprenticeship",
          company: "Canal +",
          company_url: "https://www.canalplus.com/",
          logo_path: "canal_plus.png",
          duration: "October 2022 - October 2023",
          location: "Puteaux, France",
          description: `•	During my Apprenticeship, I had two main projects: Viewership forecasting of MyCanal programs thanks to time series IA models, and recommendations system
          ➔	Literature review of state-of-the-art with academic and applied papers
          ➔	Programming following programming good practice and versioning with git.
          ➔	Manipulation of 8 and 12 million observations for each project
          ➔	Unit test of the code
          ➔	Deployment of the time series project with streamlit, docker and AWS
          `,
          color: "#0879bf",
        },
        {
          title: "Consultant – Fixed-term Contract",
          company: "TSE Junior Enterprise (Junior Company of my university)",
          company_url: "https://tse-junior.com/",
          logo_path: "tse-JE.png",
          duration: "September 2022 - December 2023",
          location: "Toulouse, France",
          description: `•	It is an association of my university which aims to delivers services to companies.
          ➔	Estimation of cost savings generated by an innovative robot-assisted surgery training platform, following economic literature, with Excel and R`,
          color: "#0879bf",
        },
        {
          title: "Analytics Engineer - Intern",
          company: "Homeloop",
          company_url: "https://www.homeloop.fr/",
          logo_path: "homeloop.png",
          duration: "November 2021 - May 2022",
          location: "Paris, France",
          description: `•	My responsibilities were to provide to the company tools for data-driven decisions. So, I mainly did Data Analysis/BI, but also Data Engineering, and one ML model.
          ➔	SQL Queries & Visualization on Tableau, and then migration on Looker
          ➔	Extraction of data from an API, integration, and storage into Azure
          ➔	Creation of a Scoring with a XG-Boost Model (Python)`,
          color: "#fc1f20",
        },
        {
          title: "Research Assistant – Intern (Blue Book)",
          company: "European Commission",
          company_url:
            "https://joint-research-centre.ec.europa.eu/scientific-activities-z/fiscal-policy-analysis-0_en",
          logo_path: "UE_commission.png",
          duration: "April 2021 - September 2022",
          location: "Brussel, Belgium",
          description: `•	In the Unit of Fiscal Policy Analysis, I was providing modelling support for research projects focused on corporate tax optimization.
          ➔	implementing a data imputation model using R, which relied on machine learning techniques. This was done to support a micro-simulation model.
          ➔	Data cleaning and performing econometric analysis using Stata`,
          color: "#fc1f20",
        },
        {
          title:
            "Teaching Assistant - Fixed-Term Contract                             ",
          company: "University Toulouse I - Capitole",
          company_url: "https://www.superprof.fr/",
          logo_path: "Logo_UTCapitole.png",
          duration: "September 2020 - January 2021",
          location: "Remote",
          description: `• Teacher in macroeconomics + Marking exams
          ✓	Acquired: Speaking surrounded by people, Speaking Preparation`,
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Student jobs employment",
      work: true,
      experiences: [
        {
          title: "Waiter",
          company: "Tratoria Mercatto",
          company_url: "https://trattoria.mercatto.ca/",
          logo_path: "Mercatto logo.png",
          duration: "April 2019 - August 2019",
          location: "Toronto, Canada",
          description: `• Provided attentive and friendly service to diners, including taking orders, delivering food and beverages, and ensuring guest satisfaction.
          • Collaborated with kitchen staff to ensure timely and accurate delivery of orders.
          ✓ Acquired: Customer service skills, Multitasking, Food and beverage knowledge`,
          color: "#fc1f20",
        },
        {
          title: "Waiter Assistant",
          company: "Tratoria Mercatto",
          company_url: "https://trattoria.mercatto.ca/",
          logo_path: "Mercatto logo.png",
          duration: "June 2018 - September 2018",
          location: "Toronto, Canada",
          description: `• Assisted waitstaff in clearing and resetting tables, ensuring a clean and welcoming dining environment for guests.
            ✓  Acquired: working in english, Team collaboration, Attention to detail`,
          color: "#fc1f20",
        },
        {
          title: "Bartender",
          company: "The Fresh Pizza Co.",
          company_url:
            "https://www.tripadvisor.fr/Restaurant_Review-g186338-d1059441-Reviews-The_Fresh_Pizza_Co-London_England.html",
          logo_path: "fresh_pizza_co.png",
          duration: "Jully 2017 - August 2017",
          location: "London, United-Kingdom",
          description: `• Prepared and served a variety of beverages including coffee, milkshakes, and homemade lemonade directly to customers' tables.
          ✓  Acquired: working in english, Customer service skills`,
          color: "#fc1f20",
        },
        {
          title: "Crew Member",
          company: "McDonald's",
          company_url: "https://www.mcdonalds.fr/",
          logo_path: "McDonald's_Golden_Arches.svg.png",
          duration: "April 2017 - June 2017",
          location: "Livry-Gargan, France",
          description: `• Handled customer transactions efficiently and accurately at the cash register.
        ✓  Acquired: Strong communication skills, Ability to work in a fast-paced environment`,
          color: "#fc1f20",
        },
        {
          title: "Camp Counselour",
          company: "AuberVacances - LCPA",
          company_url: "https://www.jeunes.gouv.fr/bafa-bafd",
          logo_path: "bafa-logo.png",
          duration: "June 2016 - Jully 2017",
          location: "France & Espagne",
          description: `• Encadrement d'enfants dans le cadre de colonies de vacances :

      • LCPA passion aventure junior – Colonie à Canyelles (Espagne) 
      ➔ Encadrement de 45 enfants de 11 à 15 ans ( 2 semaines // Juillet 2017 )
      
      • LCPA passion aventure junior – Colonie à Saint-Cyran-du-Jambot 
      ➔ Encadrement de 42 enfants de 6 à 14 ans ( 1 Semaine // Avril 2017 )
      ➔ Encadrement de 3 jeunes expatriés parlant uniquement anglais
      
      • Auber Vacances – Colonie à Saint-Hilaire-de-Riez 
      ➔ Encadrement de 25 enfants de 3 à 6 ans ( 3 Semaines // Aout 2016 )
      
      ✓ Acquired : Teamwork, responsibilities, Management, working with Spanish colleagues/children English speakers`,
          color: "#fc1f20",
        },
      ],
    },
    // Possible to add more sections if needed : volunteering
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My aim is to create Data projects from scratch and deploy them.",
  avatar_image_path: "projects_image.svg",
};

const personalprojects = {
  data: [
    {
      id: "This Website",
      name: "This Website - output",
      createdAt: "2024-04",
      description: "Repo hosting this website",
      url: "https://github.com/Barucee/Barucee.github.io",
      logo: [
        //
      ],
    },
    {
      id: "Code which generates this website",
      name: "This Website - front-end generator",
      createdAt: "2024-04",
      description: "Repo which host the builder of this website",
      url: "Needs to be added soon",
    },
    {
      id: "Traffic visualization of this website",
      name: "Traffic visualization of this website",
      createdAt: "2024-04",
      description: "[BI Tool] Visualization of the traffic of this website",
      url: "Needs to be added soon",
    },
    {
      id: "Chatbot",
      name: "Chatbot of myself",
      createdAt: "2024-04",
      description:
        "Code of a chatbot which is able to answer to questions about me and this website",
      url: "Needs to be added soon",
    },
    {
      id: "Python Learning Portfolio",
      name: "Python Learning Portfolio",
      createdAt: "2022-07",
      description:
        "Old projects in Python wjere I learnt Python and its libraries (no relevant of my current python level)",
      url: "https://github.com/Barucee/Portfolio",
    },
  ],
};

const publicationsHeader = {
  title: "University Projects",
  description:
    "During my master, I have been able to do some projects and display you few of them.",
};

const publications = {
  data: [
    {
      id: "Python",
      name: "Python Project",
      createdAt: "2022-11",
      description:
        "Project of simulation of a coffee bar in python thanks to object oriented programming",
      url: "https://github.com/Barucee/TSE_Python_22_23",
      logo: "gcp_logo.png",
    },
    {
      id: "Nonparametric Econometric Methods",
      name: "Nonparametric Econometric Methods Project",
      createdAt: "2022-11",
      description:
        "We studied cross validation methods for smoothing spline regression bibliography, and applied it to data.",
      url:
        "https://drive.google.com/file/d/1bPl8osoj6obbsBOwJEZ9tFuqkeN-dNYz/view?usp=sharing",
    },
    {
      id: "Machine Learning",
      name: "Machine Learning Project",
      createdAt: "2022-12",
      description:
        "Comparison of different machine learning models applied to early detection of crisis.",
      url:
        "https://drive.google.com/file/d/1EJmH2FJqDaQBXMLsArpC1t38Xa9lf5ps/view?usp=sharing",
    },
    {
      id: "Data Analytics",
      name: "Data Analytics",
      createdAt: "2023-03",
      description:
        "Project where we clusterized mall customers with different unsupervised learning methods.",
      url: "https://baruce.shinyapps.io/tse_data_analytics_22_23/",
    },
    {
      id: "Health Econometrics",
      name: "Health Econometrics Project",
      createdAt: "2023-04",
      description:
        "Literature review : Understanding the Far-Reaching Effects of Health Spillover will be the subject of this litterature review.",
      url:
        "https://drive.google.com/file/d/1G4xQb-FBLyIKDkW5W5ndYiOBbtKLkFud/view?usp=sharing",
    },
    {
      id: "Empirical Industrial Organization",
      name: "Empirical Industrial Organization",
      createdAt: "2023-04",
      description:
        "Application of an IO econometric model to US airline sector.",
      url:
        "https://github.com/Barucee/Empirical-Industrial-Organization/tree/main",
    },
    {
      id: "Empirical Project Paper",
      name: "Empirical project",
      createdAt: "2023-04",
      description:
        "This  paper examines the relationship between informal competition and product innovation new to the market in the context of Egypt, where informal activity is prevalent.",
      url:
        "https://drive.google.com/file/d/1D4vCveUJL9x3lboQS9MGeZj6CUgRiex8/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Moi.png",
    description:
      "I am available to discuss about job opportunities, but also, about my projects.",
  },
  //blogSection: {
  //  title: "Blogs",
  //  subtitle:
  //    ".",
  //  link: ".",
  //  avatar_image_path: ".",
  //},
  //addressSection: {
  //  title: "Address",
  //  subtitle:
  //    ".",
  //  locality: ".",
  //  country: ".",
  //  region: ".",
  //  postalCode: ".",
  //  streetAddress: ".",
  //  avatar_image_path: ".",
  //  location_map_link: ".",
  //},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  personalprojects,
  publicationsHeader,
  publications,
  contactPageData,
};
