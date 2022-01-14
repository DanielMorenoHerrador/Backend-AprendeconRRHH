'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('services', [{
        name : "Orientacion laboral",
        description : "Es un proceso con el fin de ayudar y acompañar a las personas en su desarrollo profesiónal, fomentando determinadas competencias según cada perfil para favorecer  el acceso al empleo deseado."+
        "Te acompañaré en cualquier duda que tengas al respecto, como:"+
        "- No sé en qué quiero formarme, ¿que es lo más solicitado hoy en día en el mercado laboral?"+
        "- No sé qué competencias tengo y me gustaría adaptarme al mercado actual "+
        "- Llevo mucho tiempo en paro y quiero poder acceder a un empleo"+
        "- Me gustaría cambiar de trabajo pero no sé cómo hacerlo",
        price : 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        name : "Correccion de CV",
        price : 10,
        description : "Si tienes dudas con tu CV, quieres cambiarlo, mejorarlo y/o adaptarlo al puesto de trabajo que vas a optar, puedo ayudarte en crear un CV más atractivo para las empresas."+
        "Aún teniendo un CV atractivo, puede que las empresas te descarten porque no pasas los filtros ATS (software para el descarte automático). Hay que tener en cuenta ciertos detalles, asi como tener diferentes CV para según el medio por el que lo envíes."+
        "Con este servicio, te incluye tanto la correcion de tu CV actual, como diferentes herramientas y tips que te daré para que puedas aprender a adaptar tu CV siempre que lo necesites.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Correccion de CV + Preparacion entrevista",
        description : "Existen diferentes tipos de entrevistas que en un proceso de selección pueden hacer, desde entrevistas tradicionales (revisión de CV) hasta dinámicas de grupo, test psicotécnicos o pruebas técnicas. Si no sabes como funciona cada una y quieres aprender a saber desenvolverte en cada tipo de entrevista, para así mejorar tus habilidades y competencias, puedo ayudarte a prepararte 'típicas preguntas', así como darte consejos para cada situación.  Este servicio incluye tanto la preparación de entrevistas como la corrección del CV para desarrollar un perfil profesional más atractivo.",
        price : 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Asesoria juridica laboral para empleados",
        description : "¿Tienes dudas laborales? - No sabes que convenio colectivo se te aplica - Tu empresa te ha despedido y quieres reclamar - No sabes como tramitar las diferentes prestaciones de forma online. - Otras consultas (nóminas, contratos, finiquitos, derechos y obligaciones, etc.) Te ayudaré en lo que haga falta.",
        price : 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Asesoria juridica laboral para empresa",
        description : "Necesitas ayuda para la administración de personal. - Necesitas representación para una conciliación laboral. - Asesoría en el ámbito de Prevención de Riesgos Laborales. - Otras consultas laborales. En aprendeconrrhh estamos a su entera disposición para resolver cualquier duda.",
        price : 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('services', null, {});
    
  }
};
