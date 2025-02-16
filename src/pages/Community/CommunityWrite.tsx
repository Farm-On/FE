import * as C from '@/styles/pages/Community/CommunityWrite.style';
import { useState } from 'react';
import AddPicture from '@/assets/icons/AddPicture.svg?react';
import RedX from '@/assets/icons/RedX.svg?react';
import BlackDown from '@/assets/icons/BlackDown.svg?react';
import GreyDown from '@/assets/icons/GreyDown.svg?react';
import { CommunityModal } from '@/components/CommunityModal';

export const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('카테고리 선택');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const isFormValid = title.trim() !== '' && content.trim() !== '';

  // 파일 업로드 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  // 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // 드롭다운 토글
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* 모달이 열리면 오버레이 추가 */}
      {isModalOpen && <C.ModalOverlay onClick={() => setIsModalOpen(false)} />}

      <C.Container>
        <C.TitleWrapper>
          <C.Title>Q&A</C.Title>
          <C.DropdownButton onClick={toggleDropdown}>
            <GreyDown />
          </C.DropdownButton>

          {isDropdownOpen && (
            <C.DropdownMenu>
              <C.DropdownItemTitle>카테고리 선택</C.DropdownItemTitle>
              <C.DropdownItem
                onClick={() => {
                  setSelectedCategory('자유게시판');
                  setIsDropdownOpen(false);
                }}
              >
                자유게시판
              </C.DropdownItem>
            </C.DropdownMenu>
          )}
        </C.TitleWrapper>

        <C.CategorySelect>
          <C.SelectButton onClick={() => setIsModalOpen(true)}>
            (필수) 분야 <BlackDown />
          </C.SelectButton>
        </C.CategorySelect>

        <C.InputField
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <C.TextAreaWrapper>
          <C.UploadBox>
            {images.map((image, index) => (
              <C.ImageContainer key={index}>
                <C.ImagePreview src={image} alt={`Uploaded ${index}`} />
                <C.DeleteButton onClick={() => handleRemoveImage(index)}>
                  <RedX />
                </C.DeleteButton>
              </C.ImageContainer>
            ))}

            <C.AddPictureWrapper htmlFor="file-upload">
              <AddPicture />
            </C.AddPictureWrapper>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </C.UploadBox>

          <C.TextArea
            placeholder="글을 작성해주세요. &#10;&#10;질문 시 유의사항&#10; • 답변이 등록되면 수정 및 삭제가 불가합니다.&#10; • 비속어 및 모호한 표현을 삼가주세요.&#10; • 제품, 서비스, 외부 사이트 등을 광고하거나 홍보하는 내용의 게시글은 허용하지 않습니다.&#10; • 상기 규정에 따라 게시글이 별도의 경고 없이 삭제될 수 있습니다.&#10;"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </C.TextAreaWrapper>

        <C.SubmitButton isEnabled={isFormValid} disabled={!isFormValid}>
          등록
        </C.SubmitButton>
      </C.Container>

      {isModalOpen && (
        <C.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <CommunityModal closeModal={() => setIsModalOpen(false)} />
          </div>
        </C.ModalOverlay>
      )}
    </>
  );
};
