const { useState, useEffect } = React;
const { motion } = framerMotion;

const preguntas = [
    {
      pregunta: "¿Cómo define el IEEE el software?",
      opciones: [
        "Conjunto de programas que especifican las instrucciones que debe seguir el sistema.",
        "Documentación y procedimientos necesarios para el desarrollo de hardware.",
        "Conjunto de programas, procedimientos, reglas, documentación y datos asociados de un sistema de cómputo.",
        "Conjunto de aplicaciones orientadas al usuario."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es una característica principal del software de sistemas?",
      opciones: [
        "Diseñado para calcular simulaciones avanzadas.",
        "Proporciona funcionalidad específica y general para consumidores.",
        "Optimiza el acceso y la eficiencia de otros programas y usuarios.",
        "Especifica reglas de negocio en aplicaciones empresariales."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es una ventaja del software en la vida cotidiana?",
      opciones: [
        "Dificultad para medir el progreso.",
        "Expansión de tecnologías de comunicación.",
        "Costos de desarrollo elevados.",
        "Complejidad en las estimaciones de tiempo."
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué tipo de software se utiliza para cálculos complejos y simulaciones en áreas científicas?",
      opciones: [
        "Software de sistemas.",
        "Aplicaciones web.",
        "Software científico y de ingeniería.",
        "Software de línea de productos."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es una de las principales desventajas del software?",
      opciones: [
        "Imposibilidad de realizar pruebas.",
        "Reemplazo constante de componentes defectuosos.",
        "Altos costos de mantenimiento.",
        "Corta vida útil comparado con el hardware."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué mide la mantenibilidad como factor de calidad del software?",
      opciones: [
        "Facilidad para modificar el software.",
        "Ausencia de fallos durante el uso.",
        "Capacidad para adaptarse a plataformas distintas.",
        "Facilidad para corregir problemas."
      ],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Cómo se define un producto de software genérico?",
      opciones: [
        "Software solicitado por un cliente específico.",
        "Software desarrollado a medida.",
        "Sistema desarrollado y comercializado en el mercado abierto.",
        "Sistema personalizado para empresas."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué implica la corrección como factor de calidad en el software?",
      opciones: [
        "Medir eficiencia de recursos.",
        "Cumplir con sus especificaciones.",
        "Esfuerzo para aprender a usarlo.",
        "Capacidad de interoperabilidad."
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Cuál es un ejemplo de software incrustado?",
      opciones: [
        "Sistema operativo general.",
        "Programa de diseño gráfico.",
        "Software de control en un electrodoméstico.",
        "Software ERP para empresas."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué mide la facilidad de prueba en el software?",
      opciones: [
        "Esfuerzo para modificarlo.",
        "Facilidad para verificar su corrección o fiabilidad.",
        "Posibilidad de adaptarlo.",
        "Facilidad para documentar cambios."
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué caracteriza al software de aplicación?",
      opciones: [
        "Orientado a desarrolladores.",
        "Optimiza eficiencia de recursos.",
        "Atiende necesidades específicas de individuos u organizaciones.",
        "Utilizado en simulaciones científicas."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es un desafío común en el desarrollo de software?",
      opciones: [
        "Facilidad para medir su calidad.",
        "Interacción constante con hardware.",
        "Disponibilidad de componentes estandarizados.",
        "Capacidad de probar todas las funciones."
      ],
      respuestaCorrecta: 3
    },
    {
      pregunta: "¿Cuál es un ejemplo de una aplicación web?",
      opciones: [
        "Sistema operativo.",
        "Programa de edición de imágenes.",
        "Aplicación bancaria en línea.",
        "Programa de simulación meteorológica."
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es la flexibilidad en términos de calidad de software?",
      opciones: [
        "Capacidad de adaptarse a otras plataformas.",
        "Facilidad para modificar en mantenimiento adaptativo.",
        "Capacidad para tareas en tiempo real.",
        "Facilidad de reutilización."
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué función tiene el software de línea de productos?",
      opciones: [
        "Controla dispositivos empotrados.",
        "Proporciona funcionalidad generalizada.",
        "Ejecuta simulaciones.",
        "Base para desarrolladores."
      ],
      respuestaCorrecta: 1
    },

  ];

function Cuestionario() {
    const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
    const [respuestasUsuario, setRespuestasUsuario] = useState({});
    const [mostrarPuntaje, setMostrarPuntaje] = useState(false);
    const [puntaje, setPuntaje] = useState(0);

    useEffect(() => {
        const preguntasSeleccionadas = [...preguntas]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        setPreguntasAleatorias(preguntasSeleccionadas);
    }, []);

    const seleccionarRespuesta = (preguntaIndex, opcionIndex) => {
        setRespuestasUsuario(prev => ({
            ...prev,
            [preguntaIndex]: opcionIndex
        }));
    };

    const calcularPuntaje = () => {
        let puntos = 0;
        preguntasAleatorias.forEach((pregunta, index) => {
            if (respuestasUsuario[index] === pregunta.respuestaCorrecta) {
                puntos++;
            }
        });
        setPuntaje(puntos);
        setMostrarPuntaje(true);
    };

    return (
        <div className="quiz-container">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="tittles1">
                Cuestionario de Ingeniería de Software
            </motion.h1>

            {mostrarPuntaje ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="score">
                    <h2>Tu puntaje es: {puntaje} de 10</h2>
                    <button
                        className="submit-btn"
                        onClick={() => window.location.reload()}>
                        Intentar de nuevo
                    </button>
                </motion.div>
            ) : (
                <>
                    {preguntasAleatorias.map((pregunta, preguntaIndex) => (
                        <motion.div
                            key={preguntaIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: preguntaIndex * 0.1 }}
                            className="question-container">
                            <p className="question">{`${preguntaIndex + 1}. ${pregunta.pregunta}`}</p>
                            <div className="options">
                                {pregunta.opciones.map((opcion, opcionIndex) => (
                                    <motion.div
                                        key={opcionIndex}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`option ${respuestasUsuario[preguntaIndex] === opcionIndex ? 'selected' : ''}`}
                                        onClick={() => seleccionarRespuesta(preguntaIndex, opcionIndex)}>
                                        {opcion}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                    <motion.button
                        className="submit-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={calcularPuntaje}>
                        Verificar respuestas
                    </motion.button>
                </>
            )}
        </div>
    );
}

// Mover la inicialización de React al final del archivo
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Cuestionario />
    </React.StrictMode>
);