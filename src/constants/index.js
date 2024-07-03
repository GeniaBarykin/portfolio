
import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,    
    docker,
  } from "../assets/";

export const navLinksRu = [
    {
        id: "hero",
        title: "Главная"
    },
    {
        id: "skills",
        title: "Навыки"
    },
    {
      id: "experience",
      title: "Опыт"
    },
    {
        id: "contact",
        title: "Контакт"
    }
]

export const navLinksEn = [
  {
      id: "hero",
      title: "Hero"
  },
  {
      id: "skills",
      title: "Skills"
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
      id: "contact",
      title: "Contact"
  }
]

export const skills = [
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
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "docker",
        icon: docker,
      },
]

export const experiencesRu = [
    {
      title: "Стажер IT отдела",
      company_name: "АО Фармстандарт",
      iconBg: "#383E56",
      date: "Сентябрь 2020 - Февраль 2021",
      points: [
        "Автоматизация задач при помощи скриптов на Python.",
        "Настройка и работа с виртуальными серверами Linux."
      ],
    },
    {
      title: "Fullstack разработчик",
      company_name: "Irdeto",
      iconBg: "#E6DEDD",
      date: "Февраль 2021 - Июль 2021",
      points: [
        "Работа по устранению багов системы и добавлению нового функционала используя React и nodeJS.",
        "Тестирование с использованием CI/CD, создание Jest тестов."
      ],
    },
    {
      title: "Backend разработчик",
      company_name: "Pluxbox",
      iconBg: "#383E56",
      date: "Февраль 2022 - Июль 2022",
      points: [
        "Cоздание веб блоков для онлайн конструктора.",
        "Cоздание мониторинговой системы для облачного сервиса на базе ELK Stack.",
        "Работа с Docker контейнерами."
      ],
    },
    {
      title: "Разработчик микросервисов",
      company_name: "AS Watson Group",
      iconBg: "#E6DEDD",
      date: "Февраль 2023 - Июль 2023",
      points: [
        "Разработка микросервисов для обработки и передачи данных в режиме реального времени на базе Kafka.", 
        "Миграция c Apache Kafka на Confluent Kafka с подключением к MongoDB.",
      ],
    },
  ];

  export const experiencesEn = [
    {
      title: "IT intern",
      company_name: "JSC Pharmstandart",
      iconBg: "#383E56",
      date: "September 2020 - February 2021",
      points: [
        "Automatisation using scripts in Python.",
        "Set up and work with virtual servers Linux."
      ],
    },
    {
      title: "Fullstack developer",
      company_name: "Irdeto",
      iconBg: "#E6DEDD",
      date: "February 2021 - July 2021",
      points: [
        "Work on fixing bugs in the system and adding new features using React and nodeJS.",
        "Test development using CI/CD, Jest tests creation."
      ],
    },
    {
      title: "Backend developer",
      company_name: "Pluxbox",
      iconBg: "#383E56",
      date: "February 2022 - July 2022",
      points: [
        "Web blocks creation for online constructor.",
        "Cloud service monitoring system creation for the online service on the basis of ELK Stack.",
        "Work with Docker containers."
      ],
    },
    {
      title: "Microservice developer",
      company_name: "AS Watson Group",
      iconBg: "#E6DEDD",
      date: "February 2023 - July 2023",
      points: [
        "Development of microservices for real-time data processing on the basis of Kafka.", 
        "Migration from Apache Kafka to Confluent Kafka with connection to MongoDB.",
      ],
    },
  ];