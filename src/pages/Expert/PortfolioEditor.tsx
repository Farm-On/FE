import 'react-quill/dist/quill.snow.css';
import Gallery from '@/assets/icons/Gallery.svg?react';

import { Editor } from '@/components/Editor';
import * as PE from '@/styles/pages/Expert/PortfolioEditor.style';
import { useState } from 'react';

export default function PortfolioEditor() {
  const [content, setContent] = useState(''); // 내용
  const [mainImage, setMainImage] = useState<string | null>(null); // 이미지

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <PE.Title>포트폴리오 추가</PE.Title>
        <PE.Content>
          <PE.TitleInput placeholder="제목을 입력하세요." />
          <PE.Divider />
          <PE.MainImageContainer>
            {mainImage ? (
              <PE.MainImage base64Url={mainImage}>
                <PE.RemoveButton onClick={() => setMainImage(null)} />
              </PE.MainImage>
            ) : (
              <label htmlFor="uploadImg" style={{ cursor: 'pointer' }}>
                <PE.MainImagePlaceholder>
                  <Gallery />
                  대표사진
                  <br />
                  등록하기
                </PE.MainImagePlaceholder>
                <input
                  id="uploadImg"
                  type="file"
                  accept="image/*"
                  multiple={false}
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const { files } = e.target;
                    const reader = new FileReader();
                    reader.onload = () => {
                      setMainImage(reader.result as string);
                    };

                    if (files) {
                      for (const file of files) {
                        reader.readAsDataURL(file);
                      }
                    }
                  }}
                />
              </label>
            )}
          </PE.MainImageContainer>
          <Editor content={content} setContent={setContent} style={{ height: 779 }} />
          <PE.SaveBtn>등록</PE.SaveBtn>
        </PE.Content>
      </div>
    </div>
  );
}
