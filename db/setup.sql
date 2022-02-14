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

DROP TABLE IF EXISTS "public"."diccionario_contrapartes";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario_contrapartes_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario_contrapartes" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario_contrapartes_id_seq"'::regclass),
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

DROP TABLE IF EXISTS "public"."diccionario_entidades";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario_entidades_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario_entidades" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario_entidades_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."grupo_nucleo";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "grupo_nucleo_id_seq";

-- Table Definition
CREATE TABLE "public"."grupo_nucleo" (
    "id" int4 NOT NULL DEFAULT nextval('"grupo_nucleo_id_seq"'::regclass),
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

DROP TABLE IF EXISTS "public"."diccionario_grupo_nucleo";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario_grupo_nucleo_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario_grupo_nucleo" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario_grupo_nucleo_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."info_general_compromisos";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "info_general_compromisos_id_seq";

-- Table Definition
CREATE TABLE "public"."info_general_compromisos" (
    "id" int4 NOT NULL DEFAULT nextval('info_general_compromisos_id_seq'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Nombre_compromisos" text,
    "Hitos" text,
    "Tematica" text,
    "Entidad" text,
    "Contraparte" text,
    "El_compromiso_es_prometedor_segun_el_IRM" text,
    "Valores_OGP" text,
    "Vinculacion_ODS" text,
    "Fecha_inicio_hito" text,
    "Fecha_finalizacion_hito" text,
    "Nombre_contacto" text,
    "Correo_contacto" text,
    PRIMARY KEY ("id")
)