import styled from "styled-components";

export const CalendarDiv = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;

  @media screen and (max-width: 660px) {
    font-size: 16px;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
    transition: fill 0.2s ease;
  }

  &:hover svg {
    fill: #565eef;
  }

  @media screen and (max-width: 660px) {
    width: 24px;
    height: 30px;

    svg {
      width: 10px;
      height: 16px;
    }
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &.-weekend- {
    color: #ff6d00;
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    max-width: 344px;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: ${props => props.$editable ? 'pointer' : 'default'};

  &._other-month {
    opacity: 0;
  }

  &._cell-day {
    color: #000;

    &:hover {
      color: ${props => props.$editable ? '#94a6be' : '#000'};
      background-color: ${props => props.$editable ? '#eaeef6' : 'transparent'};
    }

    /* &._weekend {
      color: #ff6d00;
    } */

    &._selected {
      font-weight: 700;
      background-color: #94a6be;
      color: #ffffff;

      &:hover {
        background-color: #565eef;
        color: #ffffff;
      }
    }

    &._current {
      font-weight: 700;

      &:hover {
        background-color: #565eef;
        color: #ffffff;
      }
    }
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
    margin: 4px;
  }

  @media screen and (max-width: 495px) {
    width: 38px;
    height: 38px;
    font-size: 12px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  
  span {
    color: #000000;
    font-weight: 600;
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;




