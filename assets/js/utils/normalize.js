const entities = {
  Funcionario: 'datosGeneralesNombreDeLaPersonaQueLlenaElFormulario',
  Compromiso: 'datosGeneralesNombreDelCompromiso',
  'Hito primer compromiso': 'nombreHitoDelCompromiso1',
  'Hito segundo compromiso': 'nombreHitoDelCompromiso2',
  'Hito tercer compromiso': 'nombreHitoDelCompromiso3',
  'Hito cuarto compromiso': 'nombreHitoCompromiso4',
  'Hito quinto compromiso': 'nombreHitoCompromiso5',
  'Hito sexto compromiso': 'nombreHitoDelCompromiso6',
  'Hito séptimo compromiso': 'nombreHitoDelCompromiso7',
  'Hito octavo compromiso': 'nombreHitoDelCompromiso8',
  'Hito noveno compromiso': 'nombreHitoDelCompromiso9',
  'Hito décimo compromiso': 'nombreHitoDelCompromiso10',
  'Fecha de registro': 'datosGeneralesFechaDeRegistroDelFormulario1',
  Descripción: 'datosGeneralesDescripcionDeAvanceDelHito',
  'Indicador 1': 'indicador1CualEsElPorcentajeDeAvanceDeImplementacionDelHito',
  'Indicador 2': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  'Indicador 3': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  'Indicador 3 - justificación': 'indicador3JustificacionDeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  'Indicador 4': 'indicador4DeAcuerdoAlAvanceActualDelHitoCuantasActividadesSeRealizaronConLaInclusionDeOtrosActoresRelevantesEnElCompromiso',
  'Indicador 4 - justificación': 'indicador4DeAcuerdoAlAvanceActualDelHitoCualesActividadesSeRealizaronConLaInclusionDeOtrosActoresRelevantesEnElCompromiso',
  'Indicador 5': 'indicador5DeAcuerdoAlAvanceActualDelHitoCuantasPersonasParticiparonEnCadaUnoDeLosHitos',
  'Indicador 6': 'indicador6DeAcuerdoAlAvanceActualDelHitoAQueSectoresPertenecenLosParticipantesDeLasActividadesEnCadaHitoDeLosCompromisos',
  'Indicador 6 - justificación': 'indicador6PorFavorIndicarElNombreDelNuevoSector',
  'Indicador 7 - realidad inicial': 'indicador7DescripcionDeLaRealidadInicialPreviaALaImplementacionDelHitoDelCompromiso',
  'Indicador 7 - realidad posterior': 'indicador7DeAcuerdoAlEstadoActualDelHitoRealiceUnaDescripcionDeLaRealidadUnaVezImplementadoOAvanzadoElHitoDelCompromiso',
  'Indicador 8': 'indicador8DeAcuerdoAlAvanceActualDelHitoElHitoSeRelacionaConAlgunaIniciativaInternacionalLigadaConGobiernoAbierto',
  'Indicador 8 - iniciativas': 'indicador8ElHitoSeRelacionaConAlgunaIniciativaInternacionalLigadaConGobiernoAbiertoCual',
  'Indicador 8 - nuevo': 'indicador8AgregueElNombreDeLaIniciativa',
  'Indicador 8 - especificación': 'indicador8ConQuePuntoEnConcretoDeLaIniciativaInternacionalSeRelacionaElHito',
  'Indicador 8 - justificación': 'indicador8ConQuePuntoEnConcretoDeLaIniciativaInternacionalSeRelacionaElHitoJustificacion',
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
      const value = data[key];
      // eslint-disable-next-line no-param-reassign
      result[keyName] = Array.isArray(value) ? value.join('|') : value;
      return result;
    }, {});
}

const normalizeEntities = normalizeSubmission(entities);
const normalizeCounterparts = normalizeSubmission(counterparts);
const normalizeCoreGroup = normalizeSubmission(coreGroup);

export { normalizeEntities, normalizeCounterparts, normalizeCoreGroup };
