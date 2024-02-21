import { reactive } from "vue";

export const store = reactive({
  contacts: [

    {
        contact: '+1 (305) 1234-5678'
    },

    {
        contact: 'example@mail.com'
    },

    {
        contact: 'Main Avenue 987'
    }
  ],

  sections: [
    {
      current: 0,
      name: "Home",
    },
    {
      current: 1,
      name: "Services",
      cards: [
        {
          icon: "svg-1.svg",
          title: "Audit & Assurance",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "svg-2.svg",
          title: "Financial Advisory",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "svg-3.svg",
          title: "Analytics and M&A",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "svg-4.svg",
          title: "Middle Marketing",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "svg-5.svg",
          title: "Legal Consulting",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "svg-6.svg",
          title: "Regulatory Risk",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
      ],
    },
    {
      current: 2,
      name: "About",
      cards: [
        {
          icon: "award",
          title: "Tradition",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "lock",
          title: "Security",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "file-signature",
          title: "Certificate",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          icon: "graduation-cap",
          title: "Expertise",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
      ],
    },
    {
      current: 3,
      name: "Projects",
      cards: [
        {
          title: "Academic professional program in social media",
          image: "project-1.jpg",
        },
        {
          title: "President's speech at annual meeting",
          image: "project-2.jpg",
        },
        {
          title: "International business trip in Shangai",
          image: "project-3.jpg",
        },
        {
          title: "Technology workshop with education theme",
          image: "project-4.jpg",
        },
        {
          title: "Donatione clothes and food to the partner of NGO",
          image: "project-5.jpg",
        },
        {
          title: "Confraternization of procurement team",
          image: "project-6.jpg",
        },
      ],
    },
    {
      current: 4,
      name: "Results",
      cards: [
        {
          title: "128",
          text: "Certifications",
        },
        {
          title: "230",
          text: "Employees",
        },
        {
          title: "517",
          text: "Customers",
        },
        {
          title: "94",
          text: "Coutries Served",
        },
      ],
    },
    {
      cards: [
        {
          image: "logo-1.png",
        },
        {
          image: "logo-2.png",
        },
        {
          image: "logo-3.png",
        },
        {
          image: "logo-4.png",
        },
        {
          image: "logo-5.png",
        },
      ],
    },
  ],

  footer: 
    {cards: [
      {
        name: "About",
        list: [
          {
            item: "The Company",
          },
          {
            item: "Istitutional",
          },
          {
            item: "Social & Events",
          },
          {
            item: "Innovation",
          },
          {
            item: "Environment",
          },
          {
            item: "Technology",
          }
        ],
      },
      {
        name: "Services",
        list: [
          {
            item: "Audit & Assurance",
          },
          {
            item: "Financial Advisory",
          },
          {
            item: "Analytics M&A",
          },
          {
            item: "Middle Marketing",
          },
          {
            item: "Legal Consulting",
          },
          {
            item: "Regulstory Risk",
          }
        ],
      },
      {
        name: "Support",
        list: [
          {
            item: "Responsability",
          },
          {
            item: "Terms of Use",
          },
          {
            item: "About Cookies",
          },
          {
            item: "Privacy Policy",
          },
          {
            item: "Accesibility",
          },
          {
            item: "Information",
          }
        ],
      }
    ]}
  
});
