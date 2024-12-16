// ScheduleTable.js
import React from 'react';
import styles from './schedule.module.css';
import scheduleData from '../../../data/schedule.json';

const ScheduleTable = () => {
  const renderTable = (type, data) => {
    // Extract unique time slots for the header row
    const timeSlots = Array.from(
      new Set(data.flatMap((slot) => (slot.start && slot.end ? [`${slot.start} - ${slot.end}`] : [])))
    );

    return (
      <>
        <h2 className={styles.tableTitle}>{type}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Day</th>
              {timeSlots.map((time, index) => (
                <th key={index}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, dayIndex) => (
              <tr key={dayIndex}>
                <td>{day}</td>
                {timeSlots.map((time, timeIndex) => {
                  const slot = data.find(
                    (s) =>
                      s.start &&
                      s.end &&
                      `${s.start} - ${s.end}` === time &&
                      s.days &&
                      Object.keys(s.days).length > 0
                  );

                  if (slot) {
                    // Handle lunch break
                    if (slot.lunch) {
                      return (
                        <td key={timeIndex} className={styles.lunchRow} colSpan={1}>
                          Lunch Break
                        </td>
                      );
                    }

                    // Render the specific schedule for the day
                    const dayKey = day.toLowerCase().slice(0, 3);
                    return (
                      <td key={timeIndex}>{slot.days[dayKey] || '-'}</td>
                    );
                  }

                  // Render empty slot
                  return <td key={timeIndex}>-</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className={styles.container}>
      {renderTable('Theory', scheduleData.theory)}
      {renderTable('Lab', scheduleData.lab)}
    </div>
  );
};

export default ScheduleTable;
