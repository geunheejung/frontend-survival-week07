import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { FlexStyle } from 'react-native';

export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M27.7557 16.1263C27.0282 15.1171 26.0821 14.4928 25.0904 14.4928C24.0987 14.4928 23.1512 15.1171 22.4237 16.1263C21.5427 17.3465 20.9976 19.0783 20.9976 21.0273C20.9976 22.9762 21.5427 24.708 22.4237 25.9291C23.1512 26.9369 24.0973 27.5612 25.0904 27.5612C26.0835 27.5612 27.0282 26.9369 27.7557 25.9291C28.6367 24.7066 29.1819 22.9771 29.1819 21.0273C29.1819 19.0774 28.6367 17.3475 27.7557 16.1263ZM52.6669 43.0934V31.6799C51.0849 31.1409 49.695 30.0399 48.6163 28.5439C47.2046 26.587 46.3311 23.9271 46.3311 21.0273V12.2457C46.3311 11.0068 47.3363 10 48.574 10C49.8118 10 50.817 11.0068 50.817 12.2457V21.0273C50.817 22.9771 51.3621 24.7071 52.2417 25.9291C52.3776 26.1155 52.518 26.287 52.6664 26.4454V12.2457C52.6664 11.0068 53.6702 10 54.9084 10C56.1467 10 57.1519 11.0068 57.1519 12.2457V26.4421C57.2998 26.2837 57.4412 26.1141 57.5751 25.9291C58.4561 24.708 59.0013 22.9771 59.0013 21.0273V12.2457C59.0013 11.0068 60.0051 10 61.2443 10C62.4834 10 63.4863 11.0068 63.4863 12.2457V21.0273C63.4863 23.9271 62.6127 26.5875 61.201 28.5439C60.1242 30.039 58.7324 31.1395 57.1514 31.6799V41.903C55.6722 42.3592 54.1763 42.7566 52.6659 43.0934H52.6669ZM25.0904 10C27.5967 10 29.8187 11.3409 31.383 13.5107C32.7947 15.4675 33.6669 18.1283 33.6669 21.0273C33.6669 23.9262 32.7947 26.5875 31.383 28.5439C30.3052 30.039 28.913 31.1395 27.3325 31.6799V43.0934C25.8221 42.7566 24.3253 42.3592 22.8475 41.9021V31.6799C21.2664 31.1395 19.8747 30.039 18.7969 28.5439C17.3861 26.587 16.5117 23.9271 16.5117 21.0273C16.5117 18.1274 17.3861 15.467 18.7969 13.5107C20.3608 11.3409 22.5828 10 25.0904 10ZM27.3325 67.752C27.3325 68.9932 26.3287 70 25.0904 70C23.8522 70 22.8475 68.9932 22.8475 67.752V50.0831C17.4182 48.6206 12.1313 46.4499 7.12771 43.5719C6.05414 42.9574 5.68155 41.5853 6.29648 40.509C6.91095 39.4337 8.27988 39.0614 9.35345 39.6764C18.8411 45.1323 29.42 47.8607 40.0004 47.8607C50.5807 47.8607 61.1591 45.1323 70.6473 39.6764C71.7208 39.0619 73.0893 39.4337 73.7042 40.509C74.3178 41.5853 73.9461 42.9574 72.873 43.5719C67.8694 46.4499 62.5825 48.6206 57.1533 50.0831V67.752C57.1533 68.9932 56.1481 70 54.9098 70C53.6716 70 52.6678 68.9932 52.6678 67.752V51.1249C48.4856 51.943 44.2435 52.353 40.0004 52.353C35.7573 52.353 31.5155 51.9444 27.3329 51.1263V67.752H27.3325Z" fill="white" />
    </svg>
  );
}

export function FastFoodIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
      <g clipPath="url(#clip0_118_174)">
        <path d="M182.5 41.6667H150V16.6667C150 12.0833 146.25 8.33334 141.667 8.33334C137.083 8.33334 133.333 12.0833 133.333 16.6667V41.6667H100.833C95.9166 41.6667 92.0833 45.9167 92.4999 50.8333L93.4999 60.9167C124.167 68 150 89.75 150 125L150.167 191.667H164.333C171.333 191.667 177.083 186.25 177.917 179.417L190.75 50.8333C191.25 45.9167 187.417 41.6667 182.5 41.6667ZM125 175H16.6666C12.0833 175 8.33325 178.75 8.33325 183.333C8.33325 187.917 12.0833 191.667 16.6666 191.667H125C129.583 191.667 133.333 187.917 133.333 183.333C133.333 178.75 129.583 175 125 175ZM17.4999 125H124.167C129.333 125 133.417 120.333 132.417 115.333C127 88.4167 98.9166 74.9167 70.8332 74.9167C42.7499 74.9167 14.7499 88.4167 9.24992 115.333C8.24992 120.333 12.4166 125 17.4999 125ZM125 141.667H16.6666C12.0833 141.667 8.33325 145.417 8.33325 150C8.33325 154.583 12.0833 158.333 16.6666 158.333H125C129.583 158.333 133.333 154.583 133.333 150C133.333 145.417 129.583 141.667 125 141.667Z" fill="#FF8400" />
      </g>
      <defs>
        <clipPath id="clip0_118_174">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ShoppingBagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
      <g clipPath="url(#clip0_118_181)">
        <path d="M150 50H133.333C133.333 31.5833 118.417 16.6667 99.9999 16.6667C81.5832 16.6667 66.6666 31.5833 66.6666 50H49.9999C40.8333 50 33.3333 57.5 33.3333 66.6667V166.667C33.3333 175.833 40.8333 183.333 49.9999 183.333H150C159.167 183.333 166.667 175.833 166.667 166.667V66.6667C166.667 57.5 159.167 50 150 50ZM83.3333 83.3333C83.3333 87.9167 79.5833 91.6667 74.9999 91.6667C70.4166 91.6667 66.6666 87.9167 66.6666 83.3333V66.6667H83.3333V83.3333ZM99.9999 33.3333C109.167 33.3333 116.667 40.8333 116.667 50H83.3333C83.3333 40.8333 90.8332 33.3333 99.9999 33.3333ZM133.333 83.3333C133.333 87.9167 129.583 91.6667 125 91.6667C120.417 91.6667 116.667 87.9167 116.667 83.3333V66.6667H133.333V83.3333Z" fill="#80BB41" />
      </g>
      <defs>
        <clipPath id="clip0_118_181">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const SIZE = {
  xs: 'xs',
  sm: 'sm',
  ssm: 'ssm',
  base: 'base',
  md: 'md',
  lg: 'lg',
} as const;

type SizeType = typeof SIZE[keyof typeof SIZE]

type TextProps = {
  children: ReactNode;
  fontSize?: SizeType;
  type?: 'btn' | 'text' | 'circle';
  color?: 'black' | 'light' | 'primary';
  flexStyle?: FlexStyle;
  active?: boolean;
}

export const Text = styled.span<TextProps>`
/* display: inline-flex;
align-self: ${(props) => props.flexStyle?.alignSelf || 'flex-start'}; */

${(props) => {
    switch (props.fontSize) {
    case 'lg': return css`
      width: 48.625rem;
      height: 17.5rem;
      color: #FFF;
      text-align: center;
      font-family: Jalnan OTF;
      font-size: 110px;
      font-style: normal;
      font-weight: 700;
      line-height: 140px; /* 127.273% */
      letter-spacing: -3.3px;
    `;
    case 'md': return css`
      color: #FFF;
      font-family: Jalnan OTF;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.44px;
    `;
    case 'base': return css`
      color: #FFF;
      text-align: center;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -1.2px;
    `;
    case 'sm': return css`
      color: #000;
      font-family: Jalnan OTF;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.96px;
    `;
    case 'ssm': return css`
      color: #000;
      font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.84px;
    `;
    case 'xs': return css`
      color: #FFF;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.72px;
    `;
    default: return css`
      color: #FFF;
      font-family: Jalnan OTF;
      font-size: inherit;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.44px;
    `;
    }
  }}

  ${(props) => {
    switch (props.type) {
    case 'btn': return css`
      color: #000;
    `;
    case 'circle': return css`
      display: flex;
      padding: 6px 16px;
      border-radius: 30px;
      background: #FF8400;
    `;
    case 'text':
    default: return css`
          color: #fff;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
    case 'black': return css`color: #000`;
    case 'light': return css`color: #fff`;
    case 'primary': return css`color: #FF8400`;
    default: return css`color: inherit`;
    }
  }}
`;

export const Flex = styled.div<{ flexStyle?: FlexStyle; gap?: number; children: ReactNode; }>`
  display: flex;

  justify-content: ${(props) => props.flexStyle?.justifyContent || 'center'};
  align-items: ${(props) => props.flexStyle?.alignItems || 'center'};
  flex-direction: ${(props) => props.flexStyle?.flexDirection};
  gap: ${(props) => `${props.gap}px`};
  ${(props) => props.flexStyle?.flex && css`flex: 1;`};
`;

export const Card = styled.div<{ children: ReactNode; size?: SizeType; }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 40px;

  ${(props) => {
    switch (props.size) {
    case 'lg': return css`
      width: 470px;
      height: 591px;   
      background: #fff;
      `;
    case 'md': return css`
      width: 310px;
      height: 396px;
      background: #F4F4F4;
      `;
    default: return css`
      width: 310px;
      height: 156px;
      padding: 30px;
      align-items: stretch;
      background-color: #fff;
    `;
    }
  }}
`;

const Wrapper = styled.div`
  display: grid;
  margin-top: 280px;
  grid-template-rows: 280px 591px;
  gap: 152px;
`;

function Home() {
  return (
    <Wrapper>
      <Flex>
        <Text fontSize="lg" color="light">원하시는 주문을 터치해주세요</Text>
      </Flex>
      <Flex gap={40}>
        <Card size="lg">
          <Flex flexStyle={{ flexDirection: 'column' }} gap={60}>
            <FastFoodIcon />
            <Text fontSize="md" type="btn">매장 주문</Text>
          </Flex>
        </Card>
        <Card size="lg">
          <Flex flexStyle={{ flexDirection: 'column' }} gap={60}>
            <ShoppingBagIcon />
            <Text fontSize="md" type="btn">매장 주문</Text>
          </Flex>
        </Card>
      </Flex>
    </Wrapper>
  );
}

export default Home;
