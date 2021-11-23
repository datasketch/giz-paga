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
  'Indicador 3 - contraparte': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
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
  Funcionario: 'datosGeneralesNombreDeLaPersonaQueLlenaElFormulario',
  // eslint-disable-next-line quote-props
  'Organización': 'datosGeneralesNombreDeLaOrganizacionDeSociedadCivilQueRegistraElAvance',
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
  'Fecha de registro': 'datosGeneralesFechaDeRegistroDelFormulario',
  'Indicador 2': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  'Indicador 3 - entidad': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  'Indicador 3 - justificación': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromisoJustificacion',
  'Indicador 7': 'indicador7DeAcuerdoAlAvanceActualDelHitoSeHaPercibidoUnCambioEnLaRealidadPreviaRespectoALaRealidadUnaVezImplementadoElHitoDelCompromiso',
};

const coreGroup = {
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
  'Fecha de registro': 'dateTime',
  'Indicador 2': 'indicador2CualEsElEstadoDeCumplimientoDelHito',
  'Indicador 3 - entidad - grupo nucleo': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso',
  'Indicador 3 - contraparte - grupo nucleo': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConElGrupoNucleoDuranteElCompromiso1',
  'Indicador 3 - contraparte': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaContraparteHaRespondidoConSusResponsabilidadesConLaEntidadResponsableDuranteElCompromiso',
  'Indicador 3 - entidad': 'indicador3DeAcuerdoAlAvanceActualDelHitoLaEntidadResponsableHaRespondidoConSusResponsabilidadesConLaContraparteDuranteElCompromiso',
  'Indicador 7': 'indicador7DeAcuerdoAlAvanceActualDelHitoSeHaPercibidoUnCambioEnLaRealidadPreviaRespectoALaRealidadUnaVezImplementadoElHitoDelCompromiso',
  'Indicador 9': 'indicador9ElCompromisoCuentaConUnaEstrategiaDeComunicacionCocreada',
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
