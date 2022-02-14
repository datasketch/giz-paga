\copy contrapartes("Funcionario","Organización","Compromiso","Hito primer compromiso","Hito segundo compromiso","Hito tercer compromiso","Hito cuarto compromiso","Hito quinto compromiso","Hito sexto compromiso","Hito séptimo compromiso","Hito octavo compromiso","Hito noveno compromiso","Hito décimo compromiso","Fecha de registro","Indicador 2","Indicador 3 - entidad","Indicador 3 - justificación","Indicador 7") from 'contrapartes.csv' csv header

\copy diccionario_contrapartes("Atributo","Descripción") from 'diccionario_contrapartes.csv' csv header

\copy entidades("Funcionario","Compromiso","Hito primer compromiso","Hito segundo compromiso","Hito tercer compromiso","Hito cuarto compromiso","Hito quinto compromiso","Hito sexto compromiso","Hito séptimo compromiso","Hito octavo compromiso","Hito noveno compromiso","Hito décimo compromiso","Fecha de registro","Descripción","Indicador 1","Indicador 2","Indicador 3 - contraparte","Indicador 3 - justificación","Indicador 4","Indicador 4 - justificación","Indicador 5","Indicador 6","Indicador 6 - nuevo","Indicador 7 - realidad inicial","Indicador 7 - realidad posterior","Indicador 8","Indicador 8 - iniciativas","Indicador 8 - nuevo","Indicador 8 - especificación","Indicador 8 - justificación") from 'entidades.csv' csv header

\copy diccionario_entidades("Atributo","Descripción") from 'diccionario_entidades.csv' csv header

\copy grupo_nucleo("Compromiso","Hito primer compromiso","Hito segundo compromiso","Hito tercer compromiso","Hito cuarto compromiso","Hito quinto compromiso","Hito sexto compromiso","Hito séptimo compromiso","Hito octavo compromiso","Hito noveno compromiso","Hito décimo compromiso","Fecha de registro","Indicador 2","Indicador 3 - entidad - grupo nucleo","Indicador 3 - contraparte - grupo nucleo","Indicador 3 - contraparte","Indicador 3 - entidad","Indicador 7","Indicador 9") from 'grupo_nucleo.csv' csv header

\copy diccionario_grupo_nucleo("Atributo","Descripción") from 'diccionario_grupo_nucleo.csv' csv header

\copy info_general_compromisos("Nombre_compromisos","Hitos","Tematica","Entidad","Contraparte","El_compromiso_es_prometedor_segun_el_IRM","Valores_OGP","Vinculacion_ODS","Fecha_inicio_hito","Fecha_finalizacion_hito","Nombre_contacto","Correo_contacto") from 'info_general_compromisos.csv' csv header

