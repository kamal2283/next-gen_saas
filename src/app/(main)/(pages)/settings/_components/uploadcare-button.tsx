"use client";
import React, { useCallback } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleUploadSuccess = useCallback(
    async (info: {
      uuid: string;
      name: string;
      size: number;
      isImage: boolean;
      cdnUrl: string;
    }) => {
      const file = await onUpload(info.cdnUrl);
      if (file) {
        router.refresh();
      }
    },
    [onUpload, router]
  );

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-dark"
        pubkey="a9428ff5ff90ae7a64eb" // Keeping your original pubkey
        onFileUploadSuccess={handleUploadSuccess}
      />
    </div>
  );
};

export default UploadCareButton;
