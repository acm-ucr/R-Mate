import { View } from 'react-native';
import React, { useState } from 'react';
import Events from './Events';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const CalendarEvents = () => {
  LocaleConfig.locales['cstm'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    today: 'Today',
  };

  LocaleConfig.defaultLocale = 'cstm';

  const getCurrentDate = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    if (month < 10) {
      return year + '-0' + month + '-' + date;
    }
    return year + '-' + month + '-' + date;
  };

  const [selected, setSelected] = useState(getCurrentDate());
  const markedDates = {
    '2023-04-02': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
    '2023-04-03': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
    '2023-04-04': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
    '2023-04-05': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
    '2023-04-07': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
    '2023-04-14': { marked: true, dotColor: '#FFB81C', activeOpacity: 0 },
  };

  return (
    <View className="w-full h-full bg-rmate-blue">
      <Calendar
        hideArrows={false}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{ ...markedDates, [selected]: { selected: true, disableTouchEvent: true } }}
        theme={{
          backgroundColor: '#003DA5',
          calendarBackground: '#003DA5',
          textSectionTitleColor: '#FFFFFF',
          selectedDayBackgroundColor: '#FFB81C',
          dayTextColor: '#FFFFFF',
          todayTextColor: '#FFFFFF',
          monthTextColor: '#FFFFFF',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 30,
          textDayFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          arrowColor: '#FFFFFF',
        }}
      />
      <Events />
    </View>
  );
};

export default CalendarEvents;
