import * as CC from '../../styles/components/ChoiceCity.style';
import * as RE from '../../styles/pages/RequestEstimate';
import styled from '@emotion/styled';
import { regions } from './CityData';
import { useState } from 'react';
import XIcon from '../../assets/icons/x.svg?react';

//상태관리 라이브러리 설치 후 진행률 올라가게 만들어야함

export const ChoiceCity = () => {
  const [selectCity, setSelectCity] = useState<string | null>(null); //선택된 도시 이름 개별 관리
  const [selectDistrict, setSelectDistrict] = useState<string | null>(null); //선택된 군/구 개별 관리

  const handleCityPick = (city: string) => {
    setSelectCity(city);
    setSelectDistrict(null); //도시 바뀌면 다시 초기화
  };
  const handleDistrictPick = (dist: string) => {
    setSelectDistrict(dist);
  };

  const getDistrict = () => {
    if (selectCity === null) return [];
    const selectedRegion = regions.find((region) => region.city === selectCity);
    return selectedRegion ? selectedRegion.districts : [];
  };

  const handleClear = () => {
    setSelectCity(null);
    setSelectDistrict(null);
  };
  return (
    <div>
      {selectCity && (
        <RE.CancleX>
          <RE.Chip isSelected={true}>
            <div>{selectCity}</div>
            {selectDistrict}
            <div style={{ width: '20px', height: '20px' }}>
              <XIcon style={{ paddingTop: '1px' }} onClick={() => handleClear()} />
            </div>
          </RE.Chip>
        </RE.CancleX>
      )}
      <CC.Container>
        <CC.Vertical />
        <CC.Horizon />
        <City>
          <p style={{ paddingLeft: '105px' }}>시/도</p>
          <p style={{ paddingRight: '239px' }}>시/구/군</p>
        </City>

        <CC.CityContainer>
          <CC.CityList>
            {regions.map((item) => {
              return (
                <div key={item.id}>
                  <CC.CityItem
                    isSelected={selectCity === item.city}
                    onClick={() => handleCityPick(item.city)}
                  >
                    {item.city}
                  </CC.CityItem>
                </div>
              );
            })}
          </CC.CityList>
        </CC.CityContainer>

        <CC.DistrictsContainer>
          <CC.DistrictsList>
            {getDistrict().map((district) => {
              return (
                <div key={`${selectCity}-${district}`}>
                  <CC.DistrictItem
                    isSelected={selectDistrict === district}
                    onClick={() => handleDistrictPick(district)}
                  >
                    {district}
                  </CC.DistrictItem>
                  <DividingLine />
                </div>
              );
            })}
          </CC.DistrictsList>
        </CC.DistrictsContainer>
      </CC.Container>
    </div>
  );
};

const City = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 20px;
    font-family: 'PretendardRegular';
  }
`;
const DividingLine = styled.div`
  width: 520px;
  height: 0px;
  border: 0.5px solid #d1d1d1;
  margin-left: 10px;
`;
