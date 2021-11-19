const entities = {
  '[Datos generales] Nombre de la persona que llena el formulario': 'datosGeneralesNombreDeLaPersonaQueLlenaElFormulario',
  '[Datos generales] Nombre del compromiso': 'datosGeneralesNombreDelCompromiso',
  'Nombre hito del compromiso 1': 'nombreHitoDelCompromiso1',
  'Nombre hito del compromiso 2': 'nombreHitoDelCompromiso2',
  'Nombre hito del compromiso 3': 'nombreHitoDelCompromiso3',
  'Nombre hito del compromiso 4': 'nombreHitoCompromiso4',
  'Nombre hito del compromiso 5': 'nombreHitoCompromiso5',
  'Nombre hito del compromiso 6': 'nombreHitoDelCompromiso6',
  'Nombre hito del compromiso 7': 'nombreHitoDelCompromiso7',
  'Nombre hito del compromiso 8': 'nombreHitoDelCompromiso8',
  'Nombre hito del compromiso 9': 'nombreHitoDelCompromiso9',
  'Nombre hito del compromiso 10': 'nombreHitoDelCompromiso10',
  '[Datos generales] Fecha de registro del formulario': 'datosGeneralesFechaDeRegistroDelFormulario1',
  '[Datos generales] Descripción de avance del hito': 'datosGeneralesDescripcionDeAvanceDelHito',
  '[Indicador 1] Escriba el porcentaje de avance de implementación del hito': 'indicador1CualEsElPorcentajeDeAvanceDeImplementacionDelHito',
  '[Indicador 2] Cuál es el estado de cumplimiento del hito': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  '[Indicador 3] De acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  '[Indicador 3] (Justificación) [Indicador 3] De acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  '[Indicador 4] De acuerdo al avance actual del hito Cuántas actividades se realizaron con la inclusión de otros actores relevantes en el compromiso': 'indicador4DeAcuerdoAlAvanceActualDelHitoCuantasActividadesSeRealizaronConLaInclusionDeOtrosActoresRelevantesEnElCompromiso',
  '[Indicador 4] De acuerdo al avance actual del hito Cuáles actividades se realizaron con la inclusión de otros actores relevantes en el compromiso': 'indicador4DeAcuerdoAlAvanceActualDelHitoCualesActividadesSeRealizaronConLaInclusionDeOtrosActoresRelevantesEnElCompromiso',
  '[Indicador 5] De acuerdo al avance actual del hito Cuántas personas participaron en cada uno de los hitos': 'indicador5DeAcuerdoAlAvanceActualDelHitoCuantasPersonasParticiparonEnCadaUnoDeLosHitos',
  '[Indicador 6] De acuerdo al avance actual del hito A qué sectores pertenecen los participantes de las actividades en cada hito de los compromisos': 'indicador6DeAcuerdoAlAvanceActualDelHitoAQueSectoresPertenecenLosParticipantesDeLasActividadesEnCadaHitoDeLosCompromisos',
  '[Indicador 6] Por favor indicar el nombre del nuevo sector': 'indicador6PorFavorIndicarElNombreDelNuevoSector',
  '[Indicador 7] Descripción de la realidad inicial previa a la implementación del hito del compromiso': 'indicador7DescripcionDeLaRealidadInicialPreviaALaImplementacionDelHitoDelCompromiso',
  '[Indicador 7] De acuerdo al estado actual del hito, realice una descripción de la realidad una vez implementado o avanzado el hito del compromiso': 'indicador7DeAcuerdoAlEstadoActualDelHitoRealiceUnaDescripcionDeLaRealidadUnaVezImplementadoOAvanzadoElHitoDelCompromiso',
  '[Indicador 8] De acuerdo al avance actual del hito El hito se relaciona con alguna iniciativa internacional ligada con Gobierno Abierto': 'indicador8DeAcuerdoAlAvanceActualDelHitoElHitoSeRelacionaConAlgunaIniciativaInternacionalLigadaConGobiernoAbierto',
  '[Indicador 8] El hito se relaciona con alguna iniciativa internacional ligada con Gobierno Abierto Cuál': 'indicador8ElHitoSeRelacionaConAlgunaIniciativaInternacionalLigadaConGobiernoAbiertoCual',
  '[Indicador 8] Agregue el nombre de la iniciativa': 'indicador8AgregueElNombreDeLaIniciativa',
  '[Indicador 8] Con qué punto en concreto de la iniciativa internacional se relaciona el hito': 'indicador8ConQuePuntoEnConcretoDeLaIniciativaInternacionalSeRelacionaElHito',
  '[Indicador 8] (Justificación) Con qué punto en concreto de la iniciativa internacional se relaciona el hito': 'indicador8ConQuePuntoEnConcretoDeLaIniciativaInternacionalSeRelacionaElHitoJustificacion',
};

const counterparts = {
  '[Datos generales] Nombre de la persona que llena el formulario': 'datosGeneralesNombreDeLaPersonaQueLlenaElFormulario',
  '[Datos generales] nombre de la organización de sociedad civil que registra el avance': 'datosGeneralesNombreDeLaOrganizacionDeSociedadCivilQueRegistraElAvance',
  '[Datos generales] nombre del compromiso': 'datosGeneralesNombreDelCompromiso',
  'Nombre hito del compromiso 1': 'nombreHitoDelCompromiso1',
  'nombre hito del compromiso 2': 'nombreHitoDelCompromiso2',
  'nombre hito del compromiso 3': 'nombreHitoDelCompromiso3',
  'nombre hito del compromiso 4': 'nombreHitoCompromiso4',
  'nombre hito del compromiso 5': 'nombreHitoCompromiso5',
  'nombre hito del compromiso 6': 'nombreHitoDelCompromiso6',
  'nombre hito del compromiso 7': 'nombreHitoDelCompromiso7',
  'nombre hito del compromiso 8': 'nombreHitoDelCompromiso8',
  'nombre hito del compromiso 9': 'nombreHitoDelCompromiso9',
  'nombre hito del compromiso 10': 'nombreHitoDelCompromiso10',
  '[Datos generales] fecha de registro del formulario': 'datosGeneralesFechaDeRegistroDelFormulario',
  '[Indicador 2] Seleccione el estado de cumplimiento del hito': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  '[Indicador 3] De acuerdo al avance actual del hito, responda si la entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  '[Indicador 3] (Justificación) De acuerdo al avance actual del hito, responda si la entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromisoJustificacion',
  '[Indicador 7] De acuerdo al avance actual del hito, seleccione si se ha percibido un cambio en la realidad previa respecto a la realidad una vez implementado el hito del compromiso': 'indicador7DeAcuerdoAlAvanceActualDelHitoSeHaPercibidoUnCambioEnLaRealidadPreviaRespectoALaRealidadUnaVezImplementadoElHitoDelCompromiso',
};

const coreGroup = {
  '[Datos generales] Nombre del compromiso': 'datosGeneralesNombreDelCompromiso',
  'Nombre hito del compromiso 1': 'nombreHitoDelCompromiso1',
  'Nombre hito del compromiso 2': 'nombreHitoDelCompromiso2',
  'Nombre hito del compromiso 3': 'nombreHitoDelCompromiso3',
  'Nombre hito del compromiso 4': 'nombreHitoCompromiso4',
  'Nombre hito del compromiso 5': 'nombreHitoCompromiso5',
  'Nombre hito de compromiso 6': 'nombreHitoDelCompromiso6',
  'Nombre hito de compromiso 7': 'nombreHitoDelCompromiso7',
  'Nombre hito de compromiso 8': 'nombreHitoDelCompromiso8',
  'Nombre hito de compromiso 9': 'nombreHitoDelCompromiso9',
  'Nombre hito de compromiso 10': 'nombreHitoDelCompromiso10',
  '[Datos generales] Fecha de registro del formulario': 'dateTime',
  '[Indicador 2] Cuál es el estado de cumplimiento del hito': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  '[Indicador 3] De acuerdo al avance actual del hito La entidad responsable ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso',
  '[Indicador 3] (Justificación) De acuerdo al avance actual del hito La entidad responsable ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso',
  '[Indicador 3] De acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso1',
  '[Indicador 3] (Justificación) de acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso1',
  '[Indicador 3] de acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaContraparteHaRespondidoConSusResponsabilidadesConLaEntidadResponsableDuranteElCompromiso',
  '[Indicador 3] (justificación) de acuerdo al avance actual del hito La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaContraparteHaRespondidoConSusResponsabilidadesConLaEntidadResponsableDuranteElCompromiso',
  '[Indicador 3] de acuerdo al avance actual del hito La entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  '[indicador 3] (justificación) de acuerdo al avance actual del hito la entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  '[Indicador 7] De acuerdo al avance actual del hito Se ha percibido un cambio en la realidad previa respecto a la realidad una vez implementado el hito del compromiso': 'indicador7DeAcuerdoAlAvanceActualDelHitoSeHaPercibidoUnCambioEnLaRealidadPreviaRespectoALaRealidadUnaVezImplementadoElHitoDelCompromiso',
};

function normalizeSubmission(keyMap) {
  const reserseKeyMap = Object.keys(keyMap).reduce((res, key) => {
    res[keyMap[key]] = key;
    return res;
  }, {});
  return (data) => Object.keys(data)
    .reduce((result, key) => {
      const keyName = reserseKeyMap[key];
      if (!keyName) return result;
      // eslint-disable-next-line no-param-reassign
      result[keyName] = data[key];
      return result;
    }, {});
}

const normalizeEntities = normalizeSubmission(entities);
const normalizeCounterparts = normalizeSubmission(counterparts);
const normalizeCoreGroup = normalizeSubmission(coreGroup);

export { normalizeEntities, normalizeCounterparts, normalizeCoreGroup };
