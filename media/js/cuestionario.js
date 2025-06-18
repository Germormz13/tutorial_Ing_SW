const quizData = [
            {
                question: "¿Cómo define el IEEE el software?",
                options: [
                    "Conjunto de programas que especifican las instrucciones que debe seguir el sistema.",
                    "Documentación y procedimientos necesarios para el desarrollo de hardware.",
                    "Conjunto de programas, procedimientos, reglas, documentación y datos asociados de un sistema de cómputo.",
                    "Conjunto de aplicaciones orientadas al usuario."
                ],
                answer: "Conjunto de programas, procedimientos, reglas, documentación y datos asociados de un sistema de cómputo."
            },
            {
                question: "¿Cuál es una característica principal del software de sistemas?",
                options: [
                    "Diseñado para calcular simulaciones avanzadas.",
                    "Proporciona funcionalidad específica y general para consumidores.",
                    "Optimiza el acceso y la eficiencia de otros programas y usuarios.",
                    "Especifica reglas de negocio en aplicaciones empresariales."
                ],
                answer: "Optimiza el acceso y la eficiencia de otros programas y usuarios."
            },
            {
                question: "¿Cuál es una ventaja del software en la vida cotidiana?",
                options: [
                    "Dificultad para medir el progreso.",
                    "Expansión de tecnologías de comunicación.",
                    "Costos de desarrollo elevados.",
                    "Complejidad en las estimaciones de tiempo."
                ],
                answer: "Expansión de tecnologías de comunicación."
            },
            {
                question: "¿Qué tipo de software se utiliza para cálculos complejos y simulaciones en áreas científicas?",
                options: [
                    "Software de sistemas.",
                    "Aplicaciones web.",
                    "Software científico y de ingeniería.",
                    "Software de línea de productos."
                ],
                answer: "Software científico y de ingeniería."
            },
            {
                question: "¿Cuál es una de las principales desventajas del software?",
                options: [
                    "Imposibilidad de realizar pruebas.",
                    "Reemplazo constante de componentes defectuosos.",
                    "Altos costos de mantenimiento.",
                    "Corta vida útil comparado con el hardware."
                ],
                answer: "Altos costos de mantenimiento."
            },
            {
                question: "¿Qué mide la mantenibilidad como factor de calidad del software?",
                options: [
                    "Facilidad para modificar el software.",
                    "Ausencia de fallos durante el uso.",
                    "Capacidad para adaptarse a plataformas distintas.",
                    "Facilidad para corregir problemas."
                ],
                answer: "Facilidad para modificar el software."
            },
            {
                question: "¿Cómo se define un producto de software genérico?",
                options: [
                    "Software solicitado por un cliente específico.",
                    "Software desarrollado a medida.",
                    "Sistema desarrollado y comercializado en el mercado abierto.",
                    "Sistema personalizado para empresas."
                ],
                answer: "Sistema desarrollado y comercializado en el mercado abierto."
            },
            {
                question: "¿Qué implica la corrección como factor de calidad en el software?",
                options: [
                    "Medir eficiencia de recursos.",
                    "Cumplir con sus especificaciones.",
                    "Esfuerzo para aprender a usarlo.",
                    "Capacidad de interoperabilidad."
                ],
                answer: "Cumplir con sus especificaciones."
            },
            {
                question: "¿Cuál es un ejemplo de software incrustado?",
                options: [
                    "Sistema operativo general.",
                    "Programa de diseño gráfico.",
                    "Software de control en un electrodoméstico.",
                    "Software ERP para empresas."
                ],
                answer: "Software de control en un electrodoméstico."
            },
            {
                question: "¿Qué mide la facilidad de prueba en el software?",
                options: [
                    "Esfuerzo para modificarlo.",
                    "Facilidad para verificar su corrección o fiabilidad.",
                    "Posibilidad de adaptarlo.",
                    "Facilidad para documentar cambios."
                ],
                answer: "Facilidad para verificar su corrección o fiabilidad."
            },
            {
                question: "¿Qué caracteriza al software de aplicación?",
                options: [
                    "Orientado a desarrolladores.",
                    "Optimiza eficiencia de recursos.",
                    "Atiende necesidades específicas de individuos u organizaciones.",
                    "Utilizado en simulaciones científicas."
                ],
                answer: "Atiende necesidades específicas de individuos u organizaciones."
            },
            {
                question: "¿Cuál es un desafío común en el desarrollo de software?",
                options: [
                    "Facilidad para medir su calidad.",
                    "Interacción constante con hardware.",
                    "Disponibilidad de componentes estandarizados.",
                    "Capacidad de probar todas las funciones."
                ],
                answer: "Capacidad de probar todas las funciones."
            },
            {
                question: "¿Cuál es un ejemplo de una aplicación web?",
                options: [
                    "Sistema operativo.",
                    "Programa de edición de imágenes.",
                    "Aplicación bancaria en línea.",
                    "Programa de simulación meteorológica."
                ],
                answer: "Aplicación bancaria en línea."
            },
            {
                question: "¿Qué es la flexibilidad en términos de calidad de software?",
                options: [
                    "Capacidad de adaptarse a otras plataformas.",
                    "Facilidad para modificar en mantenimiento adaptativo.",
                    "Capacidad para tareas en tiempo real.",
                    "Facilidad de reutilización."
                ],
                answer: "Facilidad para modificar en mantenimiento adaptativo."
            },
            {
                question: "¿Qué función tiene el software de línea de productos?",
                options: [
                    "Controla dispositivos empotrados.",
                    "Proporciona funcionalidad generalizada.",
                    "Ejecuta simulaciones.",
                    "Base para desarrolladores."
                ],
                answer: "Proporciona funcionalidad generalizada."
            },
            {
                question: "¿Qué es la ingeniería de software?",
                options: [
                    "Solo programación.",
                    "Desarrollo sin documentación.",
                    "Diseño, desarrollo y entrega según requisitos.",
                    "Mantenimiento de sistemas operativos."
                ],
                answer: "Diseño, desarrollo y entrega según requisitos."
            },
            {
                question: "¿Quién supervisa el proyecto de ingeniería de software?",
                options: [
                    "Cliente.",
                    "Programador.",
                    "Project Manager.",
                    "End User."
                ],
                answer: "Project Manager."
            },
            {
                question: "¿Qué busca lograr la ingeniería de software según Bauer?",
                options: [
                    "Software caro.",
                    "Software eficiente y económico.",
                    "Nuevo sistema operativo.",
                    "Pocas actualizaciones."
                ],
                answer: "Software eficiente y económico."
            },
            {
                question: "¿Qué función desempeña el \"System Architect\"?",
                options: [
                    "Escribe código.",
                    "Realiza pruebas.",
                    "Diseña el sistema y define interacción de componentes.",
                    "Entrena usuarios."
                ],
                answer: "Diseña el sistema y define interacción de componentes."
            },
            {
                question: "¿Qué significa \"Modularidad\"?",
                options: [
                    "Dividir en componentes pequeños y manejables.",
                    "Integrar todo en un módulo.",
                    "Evitar funciones.",
                    "Aumentar tamaño del software."
                ],
                answer: "Dividir en componentes pequeños y manejables."
            },
            {
                question: "¿Cuál NO es parte del proceso de desarrollo de software?",
                options: [
                    "Análisis de requisitos.",
                    "Implementación.",
                    "Distribución de hardware.",
                    "Evolución."
                ],
                answer: "Distribución de hardware."
            },
            {
                question: "¿Qué describe el principio de \"Anticipación al cambio\"?",
                options: [
                    "Mejorar eficiencia.",
                    "Planificar para cambios.",
                    "Mantener sin cambios.",
                    "Evitar actualizaciones."
                ],
                answer: "Planificar para cambios."
            },
            {
                question: "¿Cuál es la función principal de un \"Tester\"?",
                options: [
                    "Escribir código.",
                    "Diseñar arquitectura.",
                    "Probar según requisitos.",
                    "Administrar equipo."
                ],
                answer: "Probar según requisitos."
            },
            {
                question: "¿Qué etapa se realiza al inicio de un proyecto de software?",
                options: [
                    "Evolución.",
                    "Codificación.",
                    "Definición inicial.",
                    "Implementación."
                ],
                answer: "Definición inicial."
            },
            {
                question: "¿Cuál es el objetivo de la \"Gestión de configuración del software\"?",
                options: [
                    "Codificar.",
                    "Controlar cambios.",
                    "Implementar sin errores.",
                    "Probar software."
                ],
                answer: "Controlar cambios."
            },
            {
                question: "¿Qué actividad sombrilla permite monitorear el progreso del proyecto?",
                options: [
                    "Seguimiento y control del proyecto.",
                    "Aseguramiento de calidad.",
                    "Gestión de reutilización.",
                    "Modelado."
                ],
                answer: "Seguimiento y control del proyecto."
            },
            {
                question: "¿Qué implica el principio de \"Generalidad\"?",
                options: [
                    "Soluciones específicas.",
                    "Soluciones reutilizables.",
                    "Eliminar redundancias.",
                    "Incrementar código."
                ],
                answer: "Soluciones reutilizables."
            },
            {
                question: "¿Cuál es el propósito del \"End User\"?",
                options: [
                    "Gestionar el proyecto.",
                    "Realizar pruebas.",
                    "Consumir el producto final.",
                    "Diseñar el sistema."
                ],
                answer: "Consumir el producto final."
            },
            {
                question: "¿Cuál es el enfoque de la \"Resolución de problemas\"?",
                options: [
                    "Diseñar sin requerimientos.",
                    "Resolver un problema específico del cliente.",
                    "Eliminar cambios.",
                    "Minimizar costos."
                ],
                answer: "Resolver un problema específico del cliente."
            },
            {
                question: "¿Quién define la ingeniería de software como estudio de principios y metodologías?",
                options: [
                    "Bauer.",
                    "Boehm.",
                    "Zelkovitz.",
                    "Pressman."
                ],
                answer: "Pressman."
            },
            {
                question: "¿Diferencia principal entre ingeniería de software y otras ingenierías?",
                options: [
                    "Usa menos recursos.",
                    "Se basa en conocimiento como materia prima.",
                    "No requiere diseño.",
                    "Es tangible."
                ],
                answer: "Se basa en conocimiento como materia prima."
            },
            {
                question: "¿Qué característica tiene el software ya desarrollado?",
                options: [
                    "Se desgasta físicamente.",
                    "Difícil de replicar.",
                    "Puede replicarse exacto y barato.",
                    "Necesita manufactura adicional."
                ],
                answer: "Puede replicarse exacto y barato."
            },
            {
                question: "¿A qué está propenso el software aunque no se desgaste físicamente?",
                options: [
                    "Deterioro físico.",
                    "Obsolescencia tecnológica.",
                    "Vida útil infinita.",
                    "Mejora continua sin fallos."
                ],
                answer: "Obsolescencia tecnológica."
            },
            {
                question: "¿Qué teoría explica la evolución del software?",
                options: [
                    "Física de Newton.",
                    "Electrónica.",
                    "Leyes de Evolución del Software de Lehman.",
                    "Computación de Turing."
                ],
                answer: "Leyes de Evolución del Software de Lehman."
            },
            {
                question: "¿Cómo puede deteriorarse el software?",
                options: [
                    "Desgaste por uso.",
                    "Fallos acumulados y falta de actualizaciones.",
                    "Resistencia limitada.",
                    "Pérdida de recursos tangibles."
                ],
                answer: "Fallos acumulados y falta de actualizaciones."
            },
            {
                question: "¿Qué área se enfoca en teorías y algoritmos?",
                options: [
                    "Ingeniería de sistemas.",
                    "Ingeniería eléctrica.",
                    "Ciencias de la computación.",
                    "Matemáticas aplicadas."
                ],
                answer: "Ciencias de la computación."
            },
            {
                question: "¿Qué organización promueve estándares en ingeniería de software?",
                options: [
                    "WHO.",
                    "IEEE.",
                    "NASA.",
                    "UNICEF."
                ],
                answer: "IEEE."
            },
            {
                question: "¿Desafío distintivo del ciclo de vida del software?",
                options: [
                    "Duración indefinida.",
                    "Difícil de replicar.",
                    "Rápido ciclo de vida.",
                    "Estabilidad."
                ],
                answer: "Rápido ciclo de vida."
            },
            {
                question: "¿Qué se ha adaptado de otras ingenierías?",
                options: [
                    "Manufactura en línea.",
                    "Materiales tangibles.",
                    "Gestión de proyectos y modelado estructurado.",
                    "Construcción de puentes."
                ],
                answer: "Gestión de proyectos y modelado estructurado."
            },
            {
                question: "¿En qué se diferencia la ingeniería de software de la de sistemas?",
                options: [
                    "Ingeniería de sistemas abarca hardware y software.",
                    "Ingeniería de sistemas es solo teoría.",
                    "Software no trabaja con sistemas complejos.",
                    "Solo se enfoca en hardware."
                ],
                answer: "Ingeniería de sistemas abarca hardware y software."
            },
            {
                question: "¿Qué aspecto ético implica proteger los datos del usuario?",
                options: [
                    "Transparencia.",
                    "Competencia Profesional.",
                    "Privacidad.",
                    "Sostenibilidad."
                ],
                answer: "Privacidad."
            },
            {
                question: "¿Cuál es un principio clave en métodos ágiles?",
                options: [
                    "Desarrollo en fases finales.",
                    "Entrega incremental.",
                    "Análisis previo detallado.",
                    "Revisión anual."
                ],
                answer: "Entrega incremental."
            },
            {
                question: "¿Qué tipo de requerimiento es la “velocidad de respuesta”?",
                options: [
                    "Funcional.",
                    "Estético.",
                    "No funcional.",
                    "Operativo."
                ],
                answer: "No funcional."
            },
            {
                question: "¿Qué patrón organiza el sistema en capas independientes?",
                options: [
                    "Cliente-Servidor.",
                    "Microservicios.",
                    "Modelo-Vista-Controlador.",
                    "Arquitectura en capas."
                ],
                answer: "Arquitectura en capas."
            },
            {
                question: "¿Qué atributo evalúa que funcione sin errores?",
                options: [
                    "Usabilidad.",
                    "Fiabilidad.",
                    "Funcionalidad.",
                    "Eficiencia."
                ],
                answer: "Fiabilidad."
            },
            {
                question: "¿Qué prueba evalúa la usabilidad desde la perspectiva del usuario?",
                options: [
                    "Integración.",
                    "Sistema.",
                    "Unitaria.",
                    "Usuario."
                ],
                answer: "Usuario."
            },
            {
                question: "¿Propósito de la administración del cambio?",
                options: [
                    "Crear nuevos requerimientos.",
                    "Documentar y controlar cambios.",
                    "Reescribir código base.",
                    "Reducir tiempo de desarrollo."
                ],
                answer: "Documentar y controlar cambios."
            },
            {
                question: "¿Qué herramienta rastrea versiones anteriores del código?",
                options: [
                    "Gestión de requerimientos.",
                    "Control de versiones.",
                    "Pruebas de calidad.",
                    "Administración de proyectos."
                ],
                answer: "Control de versiones."
            },
            {
                question: "¿Qué método ágil organiza el trabajo en “sprints”?",
                options: [
                    "Scrum.",
                    "XP.",
                    "Modelo en cascada.",
                    "Lean."
                ],
                answer: "Scrum."
            },
            {
                question: "¿Qué atributo de calidad se enfoca en el uso óptimo de recursos?",
                options: [
                    "Mantenibilidad.",
                    "Fiabilidad.",
                    "Eficiencia.",
                    "Funcionalidad."
                ],
                answer: "Eficiencia."
            },
        ];

        const quizContainer = document.getElementById("quiz");
        const numberOfQuestions = 10;

        // Función para obtener 10 preguntas aleatorias sin repetir
        function getRandomQuestions(data, count) {
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }

        const selectedQuestions = getRandomQuestions(quizData, numberOfQuestions);

        // Mostrar las preguntas
        selectedQuestions.forEach((q, i) => {
            const div = document.createElement("div");

            const question = document.createElement("div");
            question.className = "question";
            question.textContent = `${i + 1}. ${q.question}`;
            div.appendChild(question);

            const answers = document.createElement("div");
            answers.className = "answers";

            q.options.forEach(option => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `question${i}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                answers.appendChild(label);
            });

            div.appendChild(answers);
            quizContainer.appendChild(div);
        });

        function submitQuiz() {
            let score = 0;
            selectedQuestions.forEach((q, i) => {
                const answer = document.querySelector(`input[name=question${i}]:checked`);
                if (answer && answer.value === q.answer) {
                    score++;
                }
            });

            document.getElementById("result").textContent = `Obtuviste ${score} de ${selectedQuestions.length} respuestas correctas.`;
        }
