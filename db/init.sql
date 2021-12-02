DROP TABLE IF EXISTS "public"."contrapartes";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS contrapartes_id_seq;

-- Table Definition
CREATE TABLE "public"."contrapartes" (
    "id" int4 NOT NULL DEFAULT nextval('contrapartes_id_seq'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Funcionario" varchar,
    "Organización" varchar,
    "Compromiso" varchar,
    "Hito primer compromiso" text,
    "Hito segundo compromiso" text,
    "Hito tercer compromiso" text,
    "Hito cuarto compromiso" text,
    "Hito quinto compromiso" text,
    "Hito sexto compromiso" text,
    "Hito séptimo compromiso" text,
    "Hito octavo compromiso" text,
    "Hito noveno compromiso" text,
    "Hito décimo compromiso" text,
    "Fecha de registro" varchar,
    "Indicador 2" varchar,
    "Indicador 3 - entidad" varchar,
    "Indicador 3 - justificación" text,
    "Indicador 7" varchar,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."contrapartes-diccionario";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "contrapartes-diccionario_id_seq";

-- Table Definition
CREATE TABLE "public"."contrapartes-diccionario" (
    "id" int4 NOT NULL DEFAULT nextval('"contrapartes-diccionario_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."entidades";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS entidades_id_seq;

-- Table Definition
CREATE TABLE "public"."entidades" (
    "id" int4 NOT NULL DEFAULT nextval('entidades_id_seq'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Funcionario" varchar,
    "Compromiso" varchar,
    "Hito primer compromiso" text,
    "Hito segundo compromiso" text,
    "Hito tercer compromiso" text,
    "Hito cuarto compromiso" text,
    "Hito quinto compromiso" text,
    "Hito sexto compromiso" text,
    "Hito séptimo compromiso" text,
    "Hito octavo compromiso" text,
    "Hito noveno compromiso" text,
    "Hito décimo compromiso" text,
    "Fecha de registro" varchar,
    "Descripción" text,
    "Indicador 1" int4,
    "Indicador 2" varchar,
    "Indicador 3 - contraparte" varchar,
    "Indicador 3 - justificación" text,
    "Indicador 4" int4,
    "Indicador 4 - justificación" text,
    "Indicador 5" int4,
    "Indicador 6" varchar,
    "Indicador 6 - nuevo" varchar,
    "Indicador 7 - realidad inicial" text,
    "Indicador 7 - realidad posterior" text,
    "Indicador 8" varchar,
    "Indicador 8 - iniciativas" varchar,
    "Indicador 8 - nuevo" varchar,
    "Indicador 8 - especificación" text,
    "Indicador 8 - justificación" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."entidades-diccionario";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "entidades-diccionario_id_seq";

-- Table Definition
CREATE TABLE "public"."entidades-diccionario" (
    "id" int4 NOT NULL DEFAULT nextval('"entidades-diccionario_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."grupo-nucleo";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "grupo-nucleo_id_seq";

-- Table Definition
CREATE TABLE "public"."grupo-nucleo" (
    "id" int4 NOT NULL DEFAULT nextval('"grupo-nucleo_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Compromiso" varchar,
    "Hito primer compromiso" text,
    "Hito segundo compromiso" text,
    "Hito tercer compromiso" text,
    "Hito cuarto compromiso" text,
    "Hito quinto compromiso" text,
    "Hito sexto compromiso" text,
    "Hito séptimo compromiso" text,
    "Hito octavo compromiso" text,
    "Hito noveno compromiso" text,
    "Hito décimo compromiso" text,
    "Fecha de registro" varchar,
    "Indicador 2" varchar,
    "Indicador 3 - entidad - grupo nucleo" varchar,
    "Indicador 3 - contraparte - grupo nucleo" varchar,
    "Indicador 3 - contraparte" varchar,
    "Indicador 3 - entidad" varchar,
    "Indicador 7" varchar,
    "Indicador 9" varchar,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."grupo-nucleo-diccionario";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "grupo-nucleo-diccionario_id_seq";

-- Table Definition
CREATE TABLE "public"."grupo-nucleo-diccionario" (
    "id" int4 NOT NULL DEFAULT nextval('"grupo-nucleo-diccionario_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."contrapartes" ("id", "created_at", "updated_at", "Funcionario", "Organización", "Compromiso", "Hito primer compromiso", "Hito segundo compromiso", "Hito tercer compromiso", "Hito cuarto compromiso", "Hito quinto compromiso", "Hito sexto compromiso", "Hito séptimo compromiso", "Hito octavo compromiso", "Hito noveno compromiso", "Hito décimo compromiso", "Fecha de registro", "Indicador 2", "Indicador 3 - entidad", "Indicador 3 - justificación", "Indicador 7") VALUES
(1, '2021-11-30 17:25:49.848227', '2021-11-30 17:25:49.848227', 'Andrés Bermúdez', 'Fundación Diálogo Diverso', 'Re-diseño y actualización del portal de datos abiertos', NULL, 'Hito 4: Sistematización de recomendaciones y ajuste del portal de datos abiertos.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-30T17:00:00.000Z', 'Ejecución', 'Sí', 'La entidad responsable cumplió los acuerdos establecidos con la contraparte', NULL);

INSERT INTO "public"."contrapartes-diccionario" ("id", "created_at", "updated_at", "Atributo", "Descripción") VALUES
(1, '2021-11-22 22:58:47.151785', '2021-11-22 23:01:47.743184', 'Funcionario', 'Nombre de la persona que llena el formulario'),
(2, '2021-11-22 22:58:47.280791', '2021-11-22 23:02:03.365467', 'Organización', 'Nombre de la organización de sociedad civil que registra el avance'),
(3, '2021-11-22 22:58:47.391136', '2021-11-22 23:02:22.35194', 'Compromiso', 'Nombre del compromiso'),
(4, '2021-11-22 22:58:47.507005', '2021-11-22 23:02:25.966235', 'Hito primer compromiso', 'Nombre hito del compromiso 1'),
(5, '2021-11-22 22:58:47.615881', '2021-11-22 23:02:28.797403', 'Hito segundo compromiso', 'Nombre hito del compromiso 2'),
(6, '2021-11-22 22:58:47.730747', '2021-11-22 23:02:33.511391', 'Hito tercer compromiso', 'Nombre hito del compromiso 3'),
(7, '2021-11-22 22:58:47.83998', '2021-11-22 23:02:38.802822', 'Hito cuarto compromiso', 'Nombre hito del compromiso 4'),
(8, '2021-11-22 22:58:47.964818', '2021-11-22 23:02:48.695043', 'Hito quinto compromiso', 'Nombre hito del compromiso 5'),
(9, '2021-11-22 23:00:06.066074', '2021-11-22 23:02:52.624839', 'Hito sexto compromiso', 'Nombre hito del compromiso 6'),
(10, '2021-11-22 23:00:13.903454', '2021-11-22 23:02:56.287526', 'Hito séptimo compromiso', 'Nombre hito del compromiso 7'),
(11, '2021-11-22 23:00:14.318849', '2021-11-22 23:02:59.240961', 'Hito octavo compromiso', 'Nombre hito del compromiso 8'),
(12, '2021-11-22 23:00:23.791173', '2021-11-22 23:03:02.04037', 'Hito noveno compromiso', 'Nombre hito del compromiso 9'),
(13, '2021-11-22 23:00:31.105311', '2021-11-22 23:03:05.120122', 'Hito décimo compromiso', 'Nombre hito del compromiso 10'),
(14, '2021-11-22 23:00:55.397884', '2021-11-22 23:03:27.321803', 'Fecha de registro', 'Fecha del registro de formulario'),
(15, '2021-11-22 23:01:04.233684', '2021-11-22 23:03:37.611843', 'Indicador 2', 'Estado del cumplimiento del hito'),
(16, '2021-11-22 23:01:10.210726', '2021-11-22 23:59:31.047605', 'Indicador 3 - entidad', 'La entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso'),
(17, '2021-11-22 23:01:20.987813', '2021-11-22 23:04:18.691545', 'Indicador 3 - justificación', 'Justificación indicador 3'),
(18, '2021-11-22 23:01:30.274596', '2021-11-22 23:05:09.007806', 'Indicador 7', 'Se ha percibido un cambio en la realidad previa respecto a la realidad una vez implementado el hito del compromiso');

INSERT INTO "public"."entidades" ("id", "created_at", "updated_at", "Funcionario", "Compromiso", "Hito primer compromiso", "Hito segundo compromiso", "Hito tercer compromiso", "Hito cuarto compromiso", "Hito quinto compromiso", "Hito sexto compromiso", "Hito séptimo compromiso", "Hito octavo compromiso", "Hito noveno compromiso", "Hito décimo compromiso", "Fecha de registro", "Descripción", "Indicador 1", "Indicador 2", "Indicador 3 - contraparte", "Indicador 3 - justificación", "Indicador 4", "Indicador 4 - justificación", "Indicador 5", "Indicador 6", "Indicador 6 - nuevo", "Indicador 7 - realidad inicial", "Indicador 7 - realidad posterior", "Indicador 8", "Indicador 8 - iniciativas", "Indicador 8 - nuevo", "Indicador 8 - especificación", "Indicador 8 - justificación") VALUES
(7, '2021-11-30 15:35:04.542094', '2021-11-30 15:35:04.542094', 'Andrés Bermúdez', 'Primer laboratorio de innovación ciudadana de Ecuador', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Hito 3: Diseño del modelo de gestión del laboratorio, que incluya procesos y metodologías de innovación.', NULL, NULL, '2021-10-06T17:00:00.000Z', 'Se han realizado una serie de actividades de integración de entidades públicas', 30, 'Ejecución', 'Sí', NULL, 7, '2 foros, 3 capacitaciones', 50, 'Entidad pública|Ciudadanía general', NULL, 'No se encontraba un laboratorio de innovación en el gobierno de Ecuador', 'Ya se encuentra establecido un diseño de gestión para el laboratorio de innovación', 'Sí', 'Objetivos de Desarrollo Sostenible', NULL, 'Objetivo 5', 'Contar con la política y guía de datos abiertos permite fortalecer la gestión institucional en transparencia, participación y colaboración ciudadana');

INSERT INTO "public"."entidades-diccionario" ("id", "created_at", "updated_at", "Atributo", "Descripción") VALUES
(1, '2021-11-22 19:14:49.357217', '2021-11-22 19:50:06.58581', 'Funcionario', 'Nombre de la persona que llena el formulario'),
(2, '2021-11-22 19:14:58.709229', '2021-11-22 19:50:17.728943', 'Compromiso', 'Nombre del compromiso'),
(3, '2021-11-22 19:14:58.827226', '2021-11-22 19:50:33.162458', 'Hito primer compromiso', 'Nombre hito del compromiso 1'),
(4, '2021-11-22 19:15:15.942779', '2021-11-22 19:50:41.402961', 'Hito segundo compromiso', 'Nombre hito del compromiso 2'),
(5, '2021-11-22 19:15:34.690445', '2021-11-22 19:51:24.65355', 'Hito tercer compromiso', 'Nombre hito del compromiso 3'),
(6, '2021-11-22 19:15:41.307317', '2021-11-22 19:51:28.616653', 'Hito cuarto compromiso', 'Nombre hito del compromiso 4'),
(7, '2021-11-22 19:15:41.427491', '2021-11-22 19:51:32.544097', 'Hito quinto compromiso', 'Nombre hito del compromiso 5'),
(8, '2021-11-22 19:15:57.623808', '2021-11-22 19:51:35.580291', 'Hito sexto compromiso', 'Nombre hito del compromiso 6'),
(9, '2021-11-22 19:15:57.740661', '2021-11-22 19:51:38.915272', 'Hito séptimo compromiso', 'Nombre hito del compromiso 7'),
(10, '2021-11-22 19:16:15.15835', '2021-11-22 19:51:42.638523', 'Hito octavo compromiso', 'Nombre hito del compromiso 8'),
(11, '2021-11-22 19:16:15.288322', '2021-11-22 19:51:46.138969', 'Hito noveno compromiso', 'Nombre hito del compromiso 9'),
(12, '2021-11-22 19:16:27.214086', '2021-11-22 19:51:50.235218', 'Hito décimo compromiso', 'Nombre hito del compromiso 10'),
(13, '2021-11-22 19:16:37.659659', '2021-11-22 19:52:04.914969', 'Fecha registro', 'Fecha del registro de formulario'),
(14, '2021-11-22 19:16:44.928416', '2021-11-22 19:52:15.514107', 'Descripción', 'Descripción del avance del hito'),
(15, '2021-11-22 19:16:45.040918', '2021-11-22 19:52:37.483034', 'Indicador 1', 'Porcentaje de avance de implementación del hito'),
(16, '2021-11-22 19:17:00.35708', '2021-11-22 19:52:48.765047', 'Indicador 2', 'Estado del cumplimiento del hito'),
(17, '2021-11-22 19:17:06.487549', '2021-11-22 23:58:12.435835', 'Indicador 3 - contraparte', 'La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso'),
(18, '2021-11-22 19:17:16.129121', '2021-11-22 19:53:18.740051', 'Indicador 3 - justificación', 'Justificación indicador 3'),
(19, '2021-11-22 19:17:30.267096', '2021-11-22 19:53:51.67306', 'Indicador 4', 'Número de actividades realizadas con la inclusión de otros actores relevantes en el compromiso'),
(20, '2021-11-22 19:17:41.481136', '2021-11-22 19:54:19.240742', 'Indicador 4 - justificación', 'Descripción de actividades realizadas con la inclusión de otros actores relevantes en el compromiso'),
(21, '2021-11-22 19:17:49.383089', '2021-11-22 19:54:38.543818', 'Indicador 5', 'Número de personas que participaron en cada uno de los hitos'),
(22, '2021-11-22 19:18:02.014042', '2021-11-22 19:55:01.649821', 'Indicador 6', 'Sectores a los que pertenecen los participantes de las actividades en cada hito de los compromisos'),
(23, '2021-11-22 19:29:46.7397', '2021-11-22 19:55:17.408708', 'Indicador 6 - justificación', 'Nombre del nuevo sector'),
(24, '2021-11-22 19:47:02.993722', '2021-11-22 19:55:30.193861', 'Indicador 7 - realidad inicial', 'Descripción de la realidad inicial previa a la implementación del hito del compromiso'),
(25, '2021-11-22 19:47:12.049297', '2021-11-22 19:55:47.872243', 'Indicador 7 - realidad posterior', 'Descripción de la realidad una vez implementado o avanzado el hito del compromiso '),
(26, '2021-11-22 19:47:22.130554', '2021-11-22 19:56:06.132099', 'Indicador 8', 'El hito se relaciona con alguna iniciativa internacional ligada con Gobierno Abierto'),
(27, '2021-11-22 19:47:34.542801', '2021-11-22 19:56:53.809142', 'Indicador 8 - iniciativas', 'Iniciativas internacionales ligadas con Gobierno Abierto con las que se relaciona el hito'),
(28, '2021-11-22 19:47:51.273319', '2021-11-22 19:57:07.163731', 'Indicador 8 - nuevo', 'Nombre de nueva iniciativa'),
(29, '2021-11-22 19:48:01.658044', '2021-11-22 19:57:26.965236', 'Indicador 8 - especificación', 'Punto en concreto de la iniciativa internacional se relaciona el hito'),
(30, '2021-11-22 19:48:12.242913', '2021-11-22 19:57:42.340524', 'Indicador 8 - justificación', 'Justificación Indicador 8 - especificación');

INSERT INTO "public"."grupo-nucleo-diccionario" ("id", "created_at", "updated_at", "Atributo", "Descripción") VALUES
(1, '2021-11-23 00:05:06.246477', '2021-11-23 00:09:32.327', 'Compromiso', 'Nombre del compromiso'),
(2, '2021-11-23 00:05:13.89173', '2021-11-23 00:09:48.730474', 'Hito primer compromiso', 'Nombre hito del compromiso 1'),
(3, '2021-11-23 00:05:18.24623', '2021-11-23 00:09:58.68242', 'Hito segundo compromiso', 'Nombre hito del compromiso 2'),
(4, '2021-11-23 00:05:25.113256', '2021-11-23 00:10:08.806022', 'Hito tercer compromiso', 'Nombre hito del compromiso 3'),
(5, '2021-11-23 00:05:32.790741', '2021-11-23 00:10:21.500766', 'Hito cuarto compromiso', 'Nombre hito del compromiso 4'),
(6, '2021-11-23 00:05:40.750138', '2021-11-23 00:10:33.211608', 'Hito quinto compromiso', 'Nombre hito del compromiso 5'),
(7, '2021-11-23 00:05:52.79142', '2021-11-23 00:10:40.151434', 'Hito sexto compromiso', 'Nombre hito del compromiso 6'),
(8, '2021-11-23 00:05:58.318994', '2021-11-23 00:10:48.447571', 'Hito séptimo compromiso', 'Nombre hito del compromiso 7'),
(9, '2021-11-23 00:06:06.77807', '2021-11-23 00:10:57.277387', 'Hito octavo compromiso', 'Nombre hito del compromiso 8'),
(10, '2021-11-23 00:06:11.987491', '2021-11-23 00:11:04.683619', 'Hito noveno compromiso', 'Nombre hito del compromiso 9'),
(11, '2021-11-23 00:06:20.307892', '2021-11-23 00:11:12.616253', 'Hito décimo compromiso', 'Nombre hito del compromiso 10'),
(12, '2021-11-23 00:07:46.924662', '2021-11-23 00:11:27.605331', 'Fecha de registro', 'Fecha del registro de formulario'),
(13, '2021-11-23 00:07:54.169233', '2021-11-23 00:11:41.712872', 'Indicador 2', 'Estado del cumplimiento del hito'),
(14, '2021-11-23 00:08:08.767541', '2021-11-23 00:11:58.216062', 'Indicador 3 - entidad - grupo nucleo', 'La entidad responsable ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso'),
(15, '2021-11-23 00:08:21.866464', '2021-11-23 00:12:20.021186', 'Indicador 3 - contraparte - grupo nucleo', 'La contraparte ha respondido con sus responsabilidades con el Grupo Núcleo durante el compromiso'),
(16, '2021-11-23 00:08:21.988078', '2021-11-23 00:12:35.267742', 'Indicador 3 - contraparte', 'La contraparte ha respondido con sus responsabilidades con la entidad responsable durante el compromiso'),
(17, '2021-11-23 00:08:51.843049', '2021-11-23 00:12:47.831034', 'Indicador 3 - entidad', 'La entidad responsable ha respondido con sus responsabilidades con la contraparte durante el compromiso'),
(18, '2021-11-23 00:09:03.842109', '2021-11-23 00:13:00.557209', 'Indicador 7', 'Se ha percibido un cambio en la realidad previa respecto a la realidad una vez implementado el hito del compromiso'),
(19, '2021-11-23 00:09:13.125779', '2021-11-23 00:13:13.923548', 'Indicador 9', 'El compromiso cuenta con una estrategia de comunicación cocreada');

