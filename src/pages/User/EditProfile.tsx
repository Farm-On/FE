import { useEffect, useState, useCallback } from 'react';
import * as S from '@/styles/pages/User/EditProfile.style';
import useAuthStore from '@/store/useAuthStore';
import { getMyPage, updateMyPage } from '@/api/services/userService';
import type { AxiosError } from 'axios';
import type { ErrorResponse, UpdateMyPageRequest } from '@/api/types';

interface UserData {
  name: string;
  birth: string;
  gender: 'MALE' | 'FEMALE';
  phone: string;
  email: string;
}

export default function EditProfile() {
  // Zustand store 사용 방식 수정
  const userInfo = useAuthStore((state) => state.userInfo);
  const updateUserInfo = useAuthStore((state) => state.updateUserInfo);

  const [userData, setUserData] = useState<UserData | null>(null);
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchUserData = useCallback(async () => {
    try {
      if (!userInfo?.userId) return;

      const response = await getMyPage(userInfo.userId);
      if (response.isSuccess) {
        setUserData(response.result);
        setEditName(response.result.name);
        setEditEmail(response.result.email);
      } else {
        setError(response.message || '사용자 정보를 불러올 수 없습니다.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '사용자 정보 조회에 실패했습니다.');
    }
  }, [userInfo?.userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleSave = async () => {
    try {
      if (!userInfo?.userId || !userData) return;
      setIsLoading(true);
      setError('');

      const updateData: UpdateMyPageRequest = {
        name: editName,
        birth: userData.birth,
        email: editEmail,
        password: editPassword || '',
      };

      const response = await updateMyPage(userInfo.userId, updateData);

      if (response.isSuccess) {
        setUserData(response.result);
        setIsNameEdit(false);
        setIsEmailEdit(false);
        setIsPasswordEdit(false);
        setEditPassword('');
        setError('');

        if (userInfo) {
          updateUserInfo({
            ...userInfo,
            userName: editName,
            email: editEmail,
          });
        }

        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        setError(response.message || '회원정보 수정에 실패했습니다.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || '회원정보 수정에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${year} / ${month} / ${day}`;
  };

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  if (!userData) return null;

  return (
    <S.Container>
      <S.MainContent>
        <S.Title>회원정보 조회/수정</S.Title>
        <S.FormContainer>
          <S.ContentWrapper>
            <S.FieldGroup>
              <S.Label>이름</S.Label>
              <S.Value>
                {isNameEdit ? (
                  <>
                    <S.Input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      disabled={isLoading}
                    />
                    <S.SmallModifyButton onClick={() => setIsNameEdit(false)} disabled={isLoading}>
                      취소
                    </S.SmallModifyButton>
                  </>
                ) : (
                  <>
                    {userData.name}
                    <S.ModifyButton onClick={() => setIsNameEdit(true)}>이름 수정</S.ModifyButton>
                  </>
                )}
              </S.Value>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label>생년월일</S.Label>
              <S.Value>{formatDate(userData.birth)}</S.Value>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label>성별</S.Label>
              <S.Value>{userData.gender === 'MALE' ? '남성' : '여성'}</S.Value>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label>휴대폰 번호</S.Label>
              <S.Value>{formatPhoneNumber(userData.phone)}</S.Value>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label>이메일</S.Label>
              <S.Value>
                {isEmailEdit ? (
                  <>
                    <S.Input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      disabled={isLoading}
                    />
                    <S.SmallModifyButton onClick={() => setIsEmailEdit(false)} disabled={isLoading}>
                      취소
                    </S.SmallModifyButton>
                  </>
                ) : (
                  <>
                    {userData.email}
                    <S.SmallModifyButton onClick={() => setIsEmailEdit(true)}>
                      수정
                    </S.SmallModifyButton>
                  </>
                )}
              </S.Value>
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label>비밀번호</S.Label>
              <S.Value>
                {isPasswordEdit ? (
                  <>
                    <S.Input
                      type="password"
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                      placeholder="새로운 비밀번호를 입력하세요"
                      disabled={isLoading}
                    />
                    <S.SmallModifyButton
                      onClick={() => {
                        setIsPasswordEdit(false);
                        setEditPassword('');
                      }}
                      disabled={isLoading}
                    >
                      취소
                    </S.SmallModifyButton>
                  </>
                ) : (
                  <>
                    ••••••••
                    <S.SmallModifyButton onClick={() => setIsPasswordEdit(true)}>
                      수정
                    </S.SmallModifyButton>
                  </>
                )}
              </S.Value>
            </S.FieldGroup>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {isSuccess && (
              <S.SuccessMessage>회원정보가 성공적으로 수정되었습니다.</S.SuccessMessage>
            )}

            <S.SaveButton
              onClick={handleSave}
              disabled={isLoading || (!isNameEdit && !isEmailEdit && !isPasswordEdit)}
            >
              {isLoading ? '저장 중...' : '저장'}
            </S.SaveButton>
          </S.ContentWrapper>
        </S.FormContainer>
      </S.MainContent>
    </S.Container>
  );
}
