'use client';

import React, { useState } from 'react';
import styles from './schedule.module.css';
import scheduleData from '../../../data/schedule.json';

const ScheduleTable = () => {
  const [customSubjects, setCustomSubjects] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    subjectName: '',
    slot: '',
    facultyName: '',
    venue: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubject = () => {
    setCustomSubjects([...customSubjects, formData]);
    setModalVisible(false);
    setFormData({ subjectName: '', slot: '', facultyName: '', venue: '' });
  };

  const renderTable = (type, data) => {
    // Extract all unique time slots for consistent columns
    const timeSlots = data
      .filter((slot) => slot.start && slot.end) // Filter valid time slots
      .map((slot) => `${slot.start} - ${slot.end}`);

    const uniqueTimeSlots = Array.from(new Set(timeSlots));

    return (
      <>
        <h2 className={styles.tableTitle}>{type}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Day</th>
              {uniqueTimeSlots.map((time, index) => (
                <th key={index}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['mon', 'tue', 'wed', 'thu', 'fri'].map((dayKey, dayIndex) => (
              <tr key={dayIndex}>
                <td>{dayKey.charAt(0).toUpperCase() + dayKey.slice(1)}</td>
                {uniqueTimeSlots.map((time, timeIndex) => {
                  const slot = data.find(
                    (s) => `${s.start} - ${s.end}` === time
                  );

                  if (slot && slot.days[dayKey]) {
                    // Check for custom subjects in the slot
                    const customSubject = customSubjects.find((subject) =>
                      subject.slot.includes(slot.days[dayKey])
                    );

                    if (customSubject) {
                      return (
                        <td key={timeIndex} className={styles.highlightCell}>
                          <div>
                            <strong>{customSubject.subjectName}</strong>
                          </div>
                          <div>{customSubject.facultyName}</div>
                          <div>{customSubject.venue}</div>
                        </td>
                      );
                    }

                    // Render default schedule for the slot
                    return <td key={timeIndex}>{slot.days[dayKey]}</td>;
                  }

                  // Render empty cell for missing data
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
      <button className={styles.addButton} onClick={() => setModalVisible(true)}>
        Add Subject
      </button>
      {renderTable('Theory', scheduleData.theory)}
      {renderTable('Lab', scheduleData.lab)}

      {/* Modal for adding subjects */}
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Add Subject</h2>
            <label>
              Subject Name:
              <input
                type="text"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Slot:
              <input
                type="text"
                name="slot"
                value={formData.slot}
                placeholder="e.g., B1+TB1"
                onChange={handleInputChange}
              />
            </label>
            <label>
              Faculty Name:
              <input
                type="text"
                name="facultyName"
                value={formData.facultyName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Venue:
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
              />
            </label>
            <div className={styles.modalActions}>
              <button onClick={handleAddSubject}>Add</button>
              <button onClick={() => setModalVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
