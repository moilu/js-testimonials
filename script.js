const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage   = document.querySelector('.user-image');
const userName    = document.querySelector('.username');
const role        = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
          'He trabajado literalmente con cientos de desarrolladores de HTML / CSS. Este tipo es un desarrollador asombroso. Él hace hincapié en un código bueno y limpio y presta atención a los detalles. Él va más allá y transforma ARTE en PÍXELES, sin ningún problema, en todo momento.',
      },
      {
        name: 'June Cha',
        position: 'Ingeniera de Software',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
          'Este tipo es un desarrollador de frontend increíble que entregó la tarea exactamente como la necesitamos, hágase un favor y contratelo, no se sentirá decepcionado por el trabajo entregado. Él hará un esfuerzo adicional para asegurarse de que esté satisfecho con su proyecto. ¡Seguramente volveré a trabajar con él!',
      },
      {
        name: 'Iida Niskanen',
        position: 'Capturista',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
          'Este tipo es un gran trabajador. La comunicación también fue muy buena con él y fue muy receptivo todo el tiempo, algo que no es fácil de encontrar en muchos autónomos. Definitivamente repetiremos con él.',
      },
      {
        name: 'Renee Sims',
        position: 'Recepcionista',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
          'Este tipo hace todo lo posible para hacer el trabajo y hacerlo bien. Esta es la segunda vez que lo contrato y lo volveré a contratar en el futuro.',
      },
      {
        name: 'Jonathan Nunfiez',
        position: 'Diseñador Gráfico',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
          'Tenía mis dudas debido a la fecha límite tan ajustada. No solo entregó un trabajo sobresaliente sino que logró entregar 1 día antes de la fecha límite. Estoy deseando volver a trabajar con él y lo recomiendo totalmente. ¡Gracias de nuevo!',
      },
      {
        name: 'Sasha Ho',
        position: 'Contadora',
        photo:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text:
          'Este tipo es un diseñador y desarrollador front-end de primer nivel. Se comunica bien, trabaja rápido y produce un trabajo de calidad. ¡Hemos tenido suerte de trabajar con él!',
      },
      {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
          'Este chico es un profesional de TI joven y talentoso, proactivo y responsable, con una sólida ética de trabajo. Aprende rápido y está ansioso por aprender nuevas tecnologías. Está enfocado y tiene buena dinámica para lograr fechas de vencimiento y resultados sobresalientes.',
      },
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userName.innerHTML    = name;
    role.innerHTML        = position;
    userImage.src         = photo; 

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
};

setInterval(updateTestimonial, 10000);
