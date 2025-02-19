import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/pages/ChatList.style';
import search from '@/assets/images/search.png';
import { useChatRooms } from '@/hooks/useChat';
import useAuthStore from '@/store/useAuthStore';
import { format, isToday, isYesterday, isThisYear } from 'date-fns';
import { ko } from 'date-fns/locale';

const ChatList = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // API 호출을 위한 쿼리
  const {
    data: chatRoomsData,
    isLoading,
    isError,
    error,
  } = useChatRooms(userInfo?.userId || 0, showUnreadOnly ? 1 : 0, currentPage, searchTerm);

  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      console.error('채팅방 목록 조회 실패:', error);
    }
  }, [isError, error]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    if (isToday(date)) {
      return format(date, 'HH:mm', { locale: ko });
    }

    if (isYesterday(date)) {
      return '어제';
    }

    if (isThisYear(date)) {
      return format(date, 'M월 d일', { locale: ko });
    }

    return format(date, 'yyyy.MM.dd', { locale: ko });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // 검색 시 첫 페이지로 리셋
  };

  if (!userInfo) {
    navigate('/');
    return null;
  }

  return (
    <S.Container>
      <S.MainContent>
        <S.Title>채팅</S.Title>
        <S.SearchContainer>
          <img src={search} alt="search" width="24" height="24" />
          <S.SearchInput
            placeholder="채팅이름 또는 작물 종류를 검색하세요"
            value={searchTerm}
            onChange={handleSearch}
          />
        </S.SearchContainer>

        <S.FilterContainer>
          <S.TotalCount>전체 {chatRoomsData?.result.totalElements || 0}개</S.TotalCount>
          <S.UnreadFilter>
            <S.UnreadFilterText>안 읽은 채팅만 표시</S.UnreadFilterText>
            <S.ToggleSwitch
              isActive={showUnreadOnly}
              onClick={() => setShowUnreadOnly(!showUnreadOnly)}
            />
          </S.UnreadFilter>
        </S.FilterContainer>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>채팅방 목록을 불러오는 중...</div>
        ) : isError ? (
          <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
            채팅방 목록을 불러오는데 실패했습니다.
          </div>
        ) : (
          <S.ChatRoomList>
            {chatRoomsData?.result.chatRoomInfoList.map((room) => (
              <S.ChatRoomItem
                key={room.chatRoomId}
                onClick={() => navigate(`/chat/${room.chatRoomId}`)}
              >
                <S.ProfileImage
                  src={room.profileImage || '/default-profile.png'}
                  alt={room.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/default-profile.png';
                  }}
                />
                <S.InfoSection>
                  <S.UserInfo>
                    <S.UserName>
                      {room.isExpertNickNameOnly && room.nickName ? room.nickName : room.name}
                    </S.UserName>
                    <S.Categories>
                      {room.estimateCategory} | {room.estimateAreaName} {room.estimateAreaDetail}
                    </S.Categories>
                  </S.UserInfo>
                  <S.MessageSection>
                    <S.LastMessage>{room.lastMessageContent}</S.LastMessage>
                    {room.unreadMessageCount > 0 && (
                      <S.UnreadBadge>{room.unreadMessageCount}</S.UnreadBadge>
                    )}
                  </S.MessageSection>
                  <S.BottomInfo>
                    <S.Budget>{room.estimateBudget}</S.Budget>
                    <S.Date>{formatDate(room.lastMessageDate)}</S.Date>
                  </S.BottomInfo>
                </S.InfoSection>
              </S.ChatRoomItem>
            ))}
          </S.ChatRoomList>
        )}

        {chatRoomsData && chatRoomsData.result.totalPage > 1 && (
          <S.Pagination>
            <S.PageButton
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </S.PageButton>
            {Array.from({ length: chatRoomsData.result.totalPage }, (_, i) => i + 1).map((page) => (
              <S.PageNumber
                key={page}
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.PageNumber>
            ))}
            <S.PageButton
              onClick={() =>
                setCurrentPage((prev) => Math.min(chatRoomsData.result.totalPage, prev + 1))
              }
              disabled={currentPage === chatRoomsData.result.totalPage}
            >
              &gt;
            </S.PageButton>
          </S.Pagination>
        )}

        {chatRoomsData?.result.chatRoomInfoList.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 0',
              color: '#666',
              fontSize: '16px',
            }}
          >
            {searchTerm
              ? '검색 결과가 없습니다.'
              : showUnreadOnly
                ? '읽지 않은 채팅이 없습니다.'
                : '진행 중인 채팅이 없습니다.'}
          </div>
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default ChatList;
