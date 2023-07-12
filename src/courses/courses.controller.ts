import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("courses")
@Controller("courses")
export class CoursesController {
  courses = [
    {
      id: 1,
      title: "Физико-математические дисцплины",
      picture: "/images/math.svg",
      buttons: ["Математика", "Физика", "Информатика"],
      disciplines: [
        {
          img: "/images/discip_math_1.jpg",
          title: "Векторы в пространстве",
          description: "Курс поможет разобраться с темой векторов в пространстве.",
          price: "5000",
        },
        {
          img: "/images/discip_math_2.jpg",
          title: "Уравнения высших степеней",
          description: "Этот курс научит вас решать уравнения повышенной трудности, которые часто встречаются на вузовских олимпиадах.",
          price: "5000",
        },
        {
          img: "/images/discip_math_3.jpg",
          title: "Дискретная математика",
          description: "В этом курсе вы изучите несколько сюжетов дискретной математики и узнаете основные определения и свойства объектов теории чисел.",
          price: "5000",
        },
        {
          img: "/images/discip_math_1.jpg",
          title: "Линейная алгебра",
          description: "Целью данного курса является повторение и развитие базовых математических понятий, таких как число, функция, уравнение, векторы и матрицы.",
          price: "5000",
        },
        {
          img: "/images/discip_math_2.jpg",
          title: "Математическая логика",
          description: "Знание мощных и простых способов преобразования математических предложений, предоставляемых математической логикой, понадобятся каждому.",
          price: "5000",
        },
        {
          img: "/images/discip_math_3.jpg",
          title: "Математический анализ",
          description: "Изучить университетский курс математического анализа, разобраться в решении основных задач и подготовиться к экзаменам по высшей математике.",
          price: "5000",
        },
      ],
    },
    {
      id: 2,
      title: "Филологические дисциплины",
      picture: "/images/languages.svg",
      buttons: ["Русский язык", "Литература", "Английский язык"],
    },
    {
      id: 3,
      title: "Социально-гуманитарные дисциплины",
      picture: "/images/history.svg",
      buttons: ["История", "Обществознание"],
    },
    {
      id: 4,
      title: "Химико-биологические дисциплины",
      picture: "/images/chemistry.svg",
      buttons: ["Химия", "Биология"],
    },
  ];

  @Get("/getAllCourse")
  getCourse() {
    return this.courses;
  }

  @Get("/disciplines/:id")
  getDiscipline(@Param("id") id) {
    const findById = this.courses.filter(course => course.id == id);
    return findById[0].disciplines;
  }
}
