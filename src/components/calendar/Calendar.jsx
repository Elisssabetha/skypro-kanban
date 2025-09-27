import { useState } from "react";
import {
  CalendarBlock,
  CalendarCell,
  CalendarCells,
  CalendarContent,
  CalendarDayName,
  CalendarDaysNames,
  CalendarDiv,
  CalendarMonth,
  CalendarNav,
  CalendarPeriod,
  CalendarP,
  CalendarTitle,
  NavAction,
  NavActions,
} from "./Calendar.styled";

const Calendar = ({ onDateChange, editable = false, selectedDate = "" }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // первый день месяца
    const firstDay = new Date(year, month, 1);
    // последний день месяца
    const lastDay = new Date(year, month + 1, 0);
    // день недели первого дня (0 - воскресенье, 1 - понедельник и т.д.)
    const firstDayOfWeek = firstDay.getDay();
    // корректировка для начала недели с понедельника
    const adjustedFirstDayOfWeek =
      firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const days = [];

    // Добавляем дни из предыдущего месяца
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = adjustedFirstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: `${prevMonthLastDay - i}.${month}.${year}`, // месяц как есть (0-11)
        value: prevMonthLastDay - i,
        isCurrentMonth: false,
        isWeekend: false,
      });
    }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const dayOfWeek = new Date(year, month, i).getDay();
      days.push({
        date: `${i}.${month + 1}.${year}`, // месяц +1 для нормального отображения
        value: i,
        isCurrentMonth: true,
        isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
      });
    }

    // Добавляем дни следующего месяца
    const totalCells = 42; // 6 недель * 7 дней
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: `${i}.${month + 2}.${year}`, //
        value: i,
        isCurrentMonth: false,
        isWeekend: false,
      });
    }

    return days;
  };

  const handleDateClick = (dateString) => {
    if (editable && onDateChange) {
      const normalizedDate = formatDate(dateString);
      onDateChange(normalizedDate);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const calendarDays = generateCalendarDays();

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      // Пытаемся разобрать наш формат "день.месяц.год"
      const [day, month, year] = dateStr.split(".");
      return new Date(year, month - 1, day).toLocaleDateString("ru-RU");
    } catch {
      return dateStr; // если не получилось, возвращаем как есть
    }
  };

  const isToday = (calendarDate) => {
    if (!calendarDate) return false;

    try {
      const [day, month, year] = calendarDate.split(".");
      const today = new Date();

      return (
        parseInt(day) === today.getDate() &&
        parseInt(month) === today.getMonth() + 1 &&
        parseInt(year) === today.getFullYear()
      );
    } catch {
      return false;
    }
  };

  return (
    <CalendarDiv>
      <CalendarTitle className="subttl">Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </CalendarMonth>
          <NavActions>
            <NavAction data-action="prev" onClick={handlePrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next" onClick={handleNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayName className="-weekend-">сб</CalendarDayName>
            <CalendarDayName className="-weekend-">вс</CalendarDayName>
          </CalendarDaysNames>
          <CalendarCells>
            {calendarDays.map((day, index) => {
              const normalizedDayDate = formatDate(day.date);
              const isSelected = normalizedDayDate === selectedDate;
              const today = isToday(day.date);

              return (
                <CalendarCell
                  key={index}
                  className={`
          ${day.isCurrentMonth ? "_cell-day" : "_other-month"}
          ${day.isWeekend ? "_weekend" : ""}
          ${isSelected ? "_selected" : ""}
          ${today ? "_current" : ""}
        `}
                  onClick={() => handleDateClick(day.date)}
                  $editable={editable}
                  $selected={isSelected}
                >
                  {day.value}
                </CalendarCell>
              );
            })}
          </CalendarCells>
        </CalendarContent>

        <CalendarPeriod>
          <CalendarP className="date-end">
            {selectedDate
              ? `Срок исполнения: ${formatDate(selectedDate)}`
              : "Выберите срок исполнения"}
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarDiv>
  );
};

export default Calendar;
