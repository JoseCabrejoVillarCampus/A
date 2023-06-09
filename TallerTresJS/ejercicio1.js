/* 1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas */

const campus = {
  sedes:{
    Bucaramanga:{
        "direccion":[],
        "telefonos":[],
        "email":[],
        trainers:{
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
            "email":[],
            },
        
          },
          campers:{  
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "team":[],
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
                "ingles":{
                    "horario":[]
                },
                "ser":{
                    "horario":[]
                },
            "otros":{
                "nivelActual":[],
                "barrioResidencia":[],
                "medioTransporte":[]
            },
            "email":[],
            },
        
          },
          niveles:{
            "preRequisitos":[],
            "tecnologiaperteneciente":[[],{
                "electiva":true,
                "obligatoria": false
            }],
          },
          roadMap:{
            "numeroCreditos":[], 
            "año":[], 
            "numeroAsignaturas":[]
          }
    },
    Bogota:{
        "direccion":[],
        "telefonos":[],
        "email":[],
        trainers:{
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
            "email":[],
            },
        
          },
          campers:{  
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "team":[],
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
                "ingles":{
                    "horario":[]
                },
                "ser":{
                    "horario":[]
                },
            "otros":{
                "nivelActual":[],
                "barrioResidencia":[],
                "medioTransporte":[]
            },
            "email":[],
            },
        
          },
          niveles:{
            "preRequisitos":[],
            "tecnologiaperteneciente":[[],{
                "electiva":true,
                "obligatoria": false
            }],
          },
          roadMap:{
            "numeroCreditos":[], 
            "año":[], 
            "numeroAsignaturas":[]
          }
    },
    Medellin:{
        "direccion":[],
        "telefonos":[],
        "email":[],
        trainers:{
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
            "email":[],
            },
        
          },
          campers:{  
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "team":[],
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
                "ingles":{
                    "horario":[]
                },
                "ser":{
                    "horario":[]
                },
            "otros":{
                "nivelActual":[],
                "barrioResidencia":[],
                "medioTransporte":[]
            },
            "email":[],
            },
        
          },
          niveles:{
            "preRequisitos":[],
            "tecnologiaperteneciente":[[],{
                "electiva":true,
                "obligatoria": false
            }],
          },
          roadMap:{
            "numeroCreditos":[], 
            "año":[], 
            "numeroAsignaturas":[]
          }
    },
    Mexico:{
        "direccion":[],
        "telefonos":[],
        "email":[],
        trainers:{
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
            "email":[],
            },
        
          },
          campers:{  
            "sede":[],
            "nombre":[],
            "telefono":[],
            "teams":{
                "team":[],
                "dia":[],
                "hora":[],
                "salon":{
                    "numero":[],
                    "piso":[]
                },
                "ingles":{
                    "horario":[]
                },
                "ser":{
                    "horario":[]
                },
            "otros":{
                "nivelActual":[],
                "barrioResidencia":[],
                "medioTransporte":[]
            },
            "email":[],
            },
        
          },
          niveles:{
            "preRequisitos":[],
            "tecnologiaperteneciente":[[],{
                "electiva":true,
                "obligatoria": false
            }],
          },
          roadMap:{
            "numeroCreditos":[], 
            "año":[], 
            "numeroAsignaturas":[]
          }
    }
  }
};