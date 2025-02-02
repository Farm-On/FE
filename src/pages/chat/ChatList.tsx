import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from '@/store/chatStore';
import * as S from '@/styles/pages/ChatList.style';
import search from '@/assets/images/search.png';

const ITEMS_PER_PAGE = 10;

const ChatList = () => {
  const navigate = useNavigate();
  const { chatRooms, showUnreadOnly, setShowUnreadOnly } = useChatStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRooms = showUnreadOnly
    ? chatRooms.filter((room) => room.unreadCount > 0)
    : chatRooms;

  const totalPages = Math.ceil(filteredRooms.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRooms = filteredRooms.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <S.Container>
      <S.MainContent>
        <S.Title>채팅</S.Title>
        <S.SearchContainer>
          <img src={search} alt="search" width="24" height="24" />
          <S.SearchInput
            placeholder="채팅이름 또는 작물 종류를 검색하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.SearchContainer>

        <S.FilterContainer>
          <S.TotalCount>전체 {filteredRooms.length}개</S.TotalCount>
          <S.UnreadFilter>
            <S.UnreadFilterText>안 읽은 채팅만 표시</S.UnreadFilterText>
            <S.ToggleSwitch
              isActive={showUnreadOnly}
              onClick={() => setShowUnreadOnly(!showUnreadOnly)}
            />
          </S.UnreadFilter>
        </S.FilterContainer>

        <S.ChatRoomList>
          {currentRooms.map((room) => (
            <S.ChatRoomItem key={room.id} onClick={() => navigate(`/chat/${room.id}`)}>
              <S.ProfileImage src={room.user.image} alt={room.user.name} />
              <S.InfoSection>
                <S.UserInfo>
                  <S.UserName>{room.user.name}</S.UserName>
                  <S.Categories>
                    {room.user.category} | {room.user.subCategory} | {room.user.location}
                  </S.Categories>
                </S.UserInfo>
                <S.MessageSection>
                  <S.LastMessage>{room.lastMessage}</S.LastMessage>
                  {room.unreadCount > 0 && <S.UnreadBadge>{room.unreadCount}</S.UnreadBadge>}
                </S.MessageSection>
                <S.BottomInfo>
                  <S.Budget>{room.budget}</S.Budget>
                  <S.Date>{room.date}</S.Date>
                </S.BottomInfo>
              </S.InfoSection>
            </S.ChatRoomItem>
          ))}
        </S.ChatRoomList>

        {totalPages > 1 && (
          <S.Pagination>
            <S.PageButton
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </S.PageButton>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <S.PageNumber
                key={page}
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </S.PageNumber>
            ))}
            <S.PageButton
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </S.PageButton>
          </S.Pagination>
        )}
      </S.MainContent>
    </S.Container>
  );
};

export default ChatList;
