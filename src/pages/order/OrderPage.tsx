import styled, { css } from 'styled-components';
import { ReactNode, useState } from 'react';
import RestaurantsSearch from '../../containers/RestaurantsSearch';
import {
  Card, Flex, Logo, Text,
} from '../HomePage';
import { foodList } from '../../../fixtures/foods';

const Wrapper = styled.div`

`;

const RestaurantsWrapper = styled.div`
  background: #fff;
`;

const CardWrapper = styled.div<{ children: ReactNode }>`
  display: flex;
  border-bottom: 2px solid #F4F4F4;
  padding: 0 0 80px 0;

  :last-child {
    border: 0;
  }
`;

const InputWrapper = styled.div<{ children: ReactNode; }>`
display: flex;
align-items: stretch;
height: 80px;
padding: 0 30px;
border-radius: 20px;
border: 2px solid #FFF;
`;

const Input = styled.input<{ type: string; }>`
  flex: 1;
  border: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  background: inherit;
  :focus {
    outline: none;
  }
`;

const SelectItem = styled.button<{ active: boolean; children: ReactNode; onClick: () => void; }>`
  flex: 1;
  cursor: pointer;
  padding: 21px 0;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid #FFF;
  background: #FF8400;

  ${(props) => {
    console.log(props);
    if (props.active) {
      return css`
      color: #FF8400;
      background: #fff;
    `;
    }

    return css`
      color: #fff;
    `;
  }}

  span {
    color: inherit;
  }
`;
function Select({ defaultValue = '전체' }: { defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Flex>
      {['전체', '중식', '한식', '일식'].map((item) => (
        <SelectItem
          key={item}
          active={value === item}
          onClick={() => setValue(item)}
        >
          <Text
            fontSize="base"
          >
            {item}
          </Text>
        </SelectItem>
      ))}

    </Flex>
  );
}

const Container = styled.div<{ paddingH?: number; gap?: number; bgColor?: 'primary' | 'light' | 'gray'; children: ReactNode; }>`
  display: flex;
  gap: ${(props) => `${props.gap}px`};
  flex-direction: column;
  padding: ${(props) => (props.paddingH ? `${props.paddingH}px` : 0)} 20px;
  background-color: ${(props) => {
    switch (props.bgColor) {
    case 'primary': return '#FF8400';
    case 'light': return '#fff';
    case 'gray': return '#F4F4F4';
    default: return '#fff';
    }
  }};
`;

const Button = styled.button<{ color: 'default' | 'active'; children: ReactNode; }>`
border-radius: 50px;
border: none;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
padding: 33px 0;
cursor: pointer;
${(props) => {
    switch (props.color) {
    case 'default': return css`
      color: #fff;
      background: #170A0C;
    `;
    case 'active': return css`
      color: #fff;
      background-color: #D87000;
    `;
    default: return css``;
    }
  }}
`;

function OrderPage() {
  return (
    <Wrapper>
      <Container bgColor="primary">
        <Flex flexStyle={{ flexDirection: 'column', alignItems: 'stretch' }} gap={40}>
          <InputWrapper>
            <Input type="text" />
          </InputWrapper>
          <Select />
        </Flex>
      </Container>
      <RestaurantsWrapper>
        <Flex flexStyle={{ flexDirection: 'column' }} gap={80}>
          {
            foodList.restaurants.map((restaurant) => (
              <CardWrapper key={restaurant.id}>
                <Flex flexStyle={{ flexDirection: 'column', alignItems: 'flex-start' }} gap={20}>
                  <Text fontSize="md" type="btn">{restaurant.name}</Text>
                  <Flex gap={25}>
                    {
                      restaurant.menu.map((row) => (
                        <Card size="md" key={row.id}>
                          <Flex flexStyle={{ flexDirection: 'column', alignItems: 'flex-start' }} gap={30}>
                            <img style={{ width: 200, height: 200 }} alt={row.name} src={row.image} />
                            <Flex flexStyle={{ flexDirection: 'column', alignItems: 'flex-start' }} gap={10}>
                              <Text fontSize="sm" type="btn">{row.name}</Text>
                              <Text fontSize="sm" type="btn">{row.price}</Text>
                            </Flex>
                          </Flex>
                        </Card>
                      ))
                    }
                  </Flex>
                </Flex>
              </CardWrapper>
            ))
          }
        </Flex>
      </RestaurantsWrapper>
      <Container paddingH={20} bgColor="gray" gap={40}>
        <Flex flexStyle={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Flex flexStyle={{ justifyContent: 'space-between' }}>
            <Flex gap={10}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clipPath="url(#clip0_1_3337)">
                  <path d="M11.6667 29.9999C9.83335 29.9999 8.35002 31.4999 8.35002 33.3333C8.35002 35.1666 9.83335 36.6666 11.6667 36.6666C13.5 36.6666 15 35.1666 15 33.3333C15 31.4999 13.5 29.9999 11.6667 29.9999ZM1.66669 4.99992C1.66669 5.91659 2.41669 6.66659 3.33335 6.66659H5.00002L11 19.3166L8.75002 23.3833C7.53335 25.6166 9.13335 28.3333 11.6667 28.3333H30C30.9167 28.3333 31.6667 27.5833 31.6667 26.6666C31.6667 25.7499 30.9167 24.9999 30 24.9999H11.6667L13.5 21.6666H25.9167C27.1667 21.6666 28.2667 20.9833 28.8334 19.9499L34.8 9.13325C35.4167 8.03325 34.6167 6.66659 33.35 6.66659H8.68335L7.56669 4.28325C7.30002 3.69992 6.70002 3.33325 6.06669 3.33325H3.33335C2.41669 3.33325 1.66669 4.08325 1.66669 4.99992ZM28.3334 29.9999C26.5 29.9999 25.0167 31.4999 25.0167 33.3333C25.0167 35.1666 26.5 36.6666 28.3334 36.6666C30.1667 36.6666 31.6667 35.1666 31.6667 33.3333C31.6667 31.4999 30.1667 29.9999 28.3334 29.9999Z" fill="#949494" />
                </g>
                <defs>
                  <clipPath id="clip0_1_3337">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Text fontSize="sm" type="btn">
                주문내역
              </Text>
              <Text fontSize="xs" type="circle">
                10개
              </Text>
            </Flex>
            <Text fontSize="sm" color="black">
              총 결제 예상금액
              {' '}
              <Text color="primary">
                100,000
              </Text>
              원
            </Text>
          </Flex>
        </Flex>
        <Flex flexStyle={{ justifyContent: 'flex-start' }}>
          <Card>
            <Flex flexStyle={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
            }}
            >
              <Flex flexStyle={{ justifyContent: 'space-between' }}>
                <Text fontSize="ssm" mr={4}>
                  짜장면
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1_3354)">
                    <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.11 5.69997C6.72 5.30997 6.09 5.30997 5.7 5.69997C5.31 6.08997 5.31 6.71997 5.7 7.10997L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" fill="#323232" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3354">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Flex>
              <Text fontSize="ssm" color="primary">
                8000원
              </Text>
            </Flex>
          </Card>
        </Flex>
        <Flex gap={10}>
          <Button color="default">
            <Text fontSize="ssm">
              취소
            </Text>
          </Button>
          <Button color="active">
            <Text fontSize="ssm">
              주문 하기
            </Text>
          </Button>
        </Flex>
      </Container>

    </Wrapper>
  );
}

export default OrderPage;
