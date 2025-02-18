import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import CameraIcon from '../assets/icons/RQcamera.svg?react';

interface ImageUploadProps {
  onImagesChange: (files: File[]) => void;
  maxImages?: number;
}

export default function CheckingImageUpload({ onImagesChange, maxImages = 5 }: ImageUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    // 최대 이미지 개수 체크
    if (selectedFiles.length + files.length > maxImages) {
      alert(`최대 ${maxImages}개의 이미지만 업로드할 수 있습니다.`);
      return;
    }

    // 파일 크기 및 타입 체크
    const validFiles = files.filter((file) => {
      const isValidType = ['image/jpeg', 'image/png', 'image/gif'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB 제한
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      alert('일부 파일이 지원되지 않는 형식이거나 크기가 너무 큽니다.');
      return;
    }




    setSelectedFiles((prev) => [...prev, ...validFiles]);
    onImagesChange([...selectedFiles, ...validFiles]);

    // 입력 필드 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };



  const handleAddButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageSelect}
        style={{ display: 'none' }}
      />

      {/* 이미지 미리보기 영역 */}

      {/* <ImagePreviewContainer>
        {previewImages.map((preview, index) => (
          <ImagePreviewWrapper key={preview}>
            <PreviewImage src={preview} alt={`Preview ${index + 1}`} />
            <RemoveButton onClick={() => handleRemoveImage(index)}>×</RemoveButton>
          </ImagePreviewWrapper>
        ))}
      </ImagePreviewContainer> */}



      {/* 이미지 추가 버튼 */}
      {selectedFiles.length < maxImages && <CameraIcon onClick={handleAddButtonClick} />}
    </Container>
  );
}

const Container = styled.div`
  margin:  0;
`;

