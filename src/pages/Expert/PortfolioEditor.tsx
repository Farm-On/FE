import 'react-quill/dist/quill.snow.css';
import Gallery from '@/assets/icons/Gallery.svg?react';

import { Editor } from '@/components/Editor';
import * as PE from '@/styles/pages/Expert/PortfolioEditor.style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEditPortfolio } from '@/hooks/useEditPortfolio';

export default function PortfolioEditor() {
  const { portfolioId } = useParams();

  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용
  const [mainImage, setMainImage] = useState<{ file: File | null; url: string | null }>({
    file: null,
    url: null,
  }); // 이미지

  const {
    data,
    mutate: { mutate: editPortfolio },
  } = useEditPortfolio();

  useEffect(() => {
    setMainImage((p) => ({ ...p, url: data?.thumbnailImg || null }));
  }, [data?.thumbnailImg]);

  const savePortfolio = () => {
    console.log(title, content);

    editPortfolio({
      title,
      text: content,
      thumbnailImg: mainImage.file,
    });
  };

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <PE.Title>포트폴리오 {portfolioId === 'new' ? '추가' : '편집'}</PE.Title>
        <PE.Content>
          <PE.TitleInput
            key={data?.title}
            placeholder="제목을 입력하세요."
            defaultValue={data?.title}
            onChange={(e) => setTitle(e.target.value.trim())}
          />
          <PE.Divider />
          <PE.MainImageContainer>
            {mainImage.url ? (
              <PE.MainImage key={data?.thumbnailImg} base64Url={mainImage.url}>
                <PE.RemoveButton onClick={() => setMainImage({ file: null, url: null })} />
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
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      setMainImage({ file, url: URL.createObjectURL(file) });
                    }
                  }}
                />
              </label>
            )}
          </PE.MainImageContainer>
          <Editor
            key={data?.text}
            defaultContent={data?.text ?? ''}
            setContent={setContent}
            style={{ height: 779 }}
          />
          <PE.SaveBtn onClick={() => savePortfolio()}>등록</PE.SaveBtn>
        </PE.Content>
      </div>
    </div>
  );
}
