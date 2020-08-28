import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import homeIcon from '../../assets/home.png';
import historyIcon from '../../assets/history.png';

import * as S from './styles';

interface IData {
  id: number;
  icon: ReactElement;
  text: string;
  subtext?: string;
}

interface IItemProps {
  icon: ReactElement;
  text: string;
  subtext?: string;
}

interface IRenderItemProps {
  item: IItemProps;
}

const data: IData[] = [
  { id: 1, icon: homeIcon, text: 'Home', subtext: 'Spring St. 140' },
  { id: 2, icon: historyIcon, text: 'Upton St. 99' },
  { id: 3, icon: historyIcon, text: 'Sparkvill Ave 111' },
  { id: 4, icon: historyIcon, text: 'James Cameron Plasa' },
];

const Item: React.FC<IItemProps> = ({ icon, text, subtext }) => {
  return (
    <S.HistoryItem>
      <S.ItemIcon source={icon} />
      <S.ItemText>{text}</S.ItemText>
      {subtext && <S.ItemText small>{subtext}</S.ItemText>}
    </S.HistoryItem>
  );
};

const SelectDestination: React.FC = () => {
  const navigation = useNavigation();

  function renderItem({ item }: IRenderItemProps) {
    return <Item text={item.text} subtext={item.subtext} icon={item.icon} />;
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
        </S.Timeline>
        <S.FromTo>
          <S.From>Wilson Terrace 219 W</S.From>
          <S.To>Diana Trail 115 A</S.To>
        </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      <S.HistoryList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: IData) => String(item.id)}
      />
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SelectDestination;
