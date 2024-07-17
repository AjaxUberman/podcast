import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { GenerateThumbnailProps } from "@/types";
import { Loader } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";

const GenerateThumbnail = ({
  setImage,
  setImageStorageId,
  image,
  imagePrompt,
  setImagePrompt,
}: GenerateThumbnailProps) => {
  const [isAiThumbnail, setIsAiThumbnail] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const generateImage = async () => {};

  return (
    <div>
      <div className="generate_thumbnail flex flex-col items-center ">
        <Button
          type="button"
          variant="plain"
          className={` w-full ${isAiThumbnail ? "bg-black-6" : ""}`}
          onClick={() => setIsAiThumbnail(true)}
        >
          Use AI to generate thumbnail.
        </Button>
        <h1 className="wider font-semibold">Or</h1>
        <Button
          type="button"
          variant="plain"
          className={` w-full ${!isAiThumbnail ? "bg-black-6" : ""}`}
          onClick={() => setIsAiThumbnail(false)}
        >
          Upload custom image
        </Button>
      </div>
      {isAiThumbnail ? (
        <div className="flex flex-col gap-5">
          <div className="mt-5 flex flex-col gap-2.5">
            <Label className="text-16 font-bold text-white-1">
              AI Prompt to generate Thumbnail
            </Label>
            <Textarea
              className="input-class font-light focus-visible:ring-offset-orange-1"
              placeholder="Provide text to generate thumbnail"
              rows={5}
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
            />
          </div>
          <div className="w-full max-w-[200px]">
            <Button
              type="submit"
              className="text-16 bg-orange-1 py-4 font-bold text-white-1"
              onClick={generateImage}
            >
              {isGenerating ? (
                <>
                  Generating
                  <Loader size={20} className="animate-spin ml-2" />
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="image_div" onClick={() => imageRef?.current?.click()}>
          <Input type="file" className="hidden" ref={imageRef} />
          {!isGenerating ? (
            <Image
              src="/icons/upload-image.svg"
              alt="upload-img"
              width={40}
              height={40}
            />
          ) : (
            <div className="text-16 flex-center font-medium text-white-1">
              Uploading
              <Loader size={20} className="animate-spin ml-2" />
            </div>
          )}
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-orange-1">Click to Upload</h2>
            <p className="text-xs opacity-70">SVG, PNG, JPG </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateThumbnail;
