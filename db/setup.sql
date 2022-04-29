DROP TABLE IF EXISTS "public"."usuarios";

CREATE SEQUENCE IF NOT EXISTS usuarios_id_seq;

DROP TABLE IF EXISTS "public"."contrapartes";

CREATE TABLE "public"."usuarios" (
    "id" int4 NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "email" text NOT NULL,
    "password" text NOT NULL,
    "grupo" text NOT NULL,
    "inactivo" BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY ("id")
);

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

DROP TABLE IF EXISTS "public"."diccionario-contrapartes";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario-contrapartes_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario-contrapartes" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario-contrapartes_id_seq"'::regclass),
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
    "Entidad_responsable_de_registrar_el_avance" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."diccionario-entidades";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario-entidades_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario-entidades" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario-entidades_id_seq"'::regclass),
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

DROP TABLE IF EXISTS "public"."diccionario-grupo-nucleo";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "diccionario-grupo-nucleo_id_seq";

-- Table Definition
CREATE TABLE "public"."diccionario-grupo-nucleo" (
    "id" int4 NOT NULL DEFAULT nextval('"diccionario-grupo-nucleo_id_seq"'::regclass),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    "Atributo" varchar,
    "Descripción" text,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."info-general-compromisos";

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "info-general-compromisos_id_seq";

-- Table Definition
CREATE TABLE "public"."info-general-compromisos" (
    "id" int4 NOT NULL DEFAULT nextval('info-general-compromisos_id_seq'::regclass),
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