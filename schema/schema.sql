CREATE extension IF NOT EXISTS moddatetime schema extensions;

CREATE TABLE "art_collection" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "gpu_time" INTEGER NOT NULL,
    "total_generations" INTEGER NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "ai_option_id" UUID REFERENCES ai_option(id) NOT NULL,
    "owner_id" uuid REFERENCES auth.users(id) NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
);

CREATE TABLE "user" (
    "id" UUID REFERENCES auth.users(id) NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'New User',
);

CREATE TABLE "art_collection_entry" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "imageWidth" INTEGER NOT NULL,
    "imageHeight" INTEGER NOT NULL,
    "art_collection_id" UUID REFERENCES art_collection(id) NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
);

CREATE trigger handle_updated_at before
UPDATE
    ON art_collection_entry FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);

CREATE TABLE "ai_option" (
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
);

CREATE trigger handle_updated_at before
UPDATE
    ON ai_option FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);