CREATE extension IF NOT EXISTS moddatetime schema extensions;

CREATE TABLE "ai_option" (
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE "art_collection" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_width" INTEGER NOT NULL,
    "image_height" INTEGER NOT NULL,
    "preview_image_url" TEXT NOT NULL,
    "preview_image_width" INTEGER NOT NULL,
    "preview_image_height" INTEGER NOT NULL,
    "gpu_time" DOUBLE PRECISION NOT NULL,
    "total_generations" BIGINT NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "ai_option_id" UUID REFERENCES ai_option(id) NOT NULL,
    "owner_id" uuid REFERENCES auth.users(id) NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE "public_user" (
    "id" UUID REFERENCES auth.users(id) NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'New User',
    "url" TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE "art_collection_entry" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageWidth" INTEGER NOT NULL,
    "imageHeight" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "art_collection_id" UUID REFERENCES art_collection(id) NOT NULL,
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    "updated_at" TIMESTAMPTZ DEFAULT TIMEZONE('utc' :: TEXT, NOW()) NOT NULL,
    PRIMARY KEY(id)
);

CREATE trigger handle_updated_at before
UPDATE
    ON art_collection_entry FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);

CREATE trigger handle_updated_at before
UPDATE
    ON art_collection FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);

CREATE trigger handle_updated_at before
UPDATE
    ON ai_option FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);

CREATE trigger handle_updated_at before
UPDATE
    ON public_user FOR each ROW EXECUTE PROCEDURE moddatetime (updated_at);

CREATE policy "Everyone can view art collections" ON art_collection FOR
SELECT
    USING (TRUE);

CREATE policy "Everyone can view art collections entries" ON art_collection_entry FOR
SELECT
    USING (TRUE);

CREATE policy "Everyone can view AI options" ON ai_option FOR
SELECT
    USING (TRUE);

CREATE policy "Everyone can view all users public info" ON public_user FOR
SELECT
    USING (TRUE);