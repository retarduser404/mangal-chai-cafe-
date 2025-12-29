// Business hours utility
// Mangalam Chai hours: 9:00 AM - 11:30 PM, Daily

export const getBusinessStatus = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute; // Convert to minutes for easier comparison

  const openingTime = 9 * 60; // 9:00 AM
  const closingTime = 23 * 60 + 30; // 11:30 PM

  const isOpen = currentTime >= openingTime && currentTime < closingTime;

  let statusText = '';
  let nextOpeningText = '';
  let statusColor = '';
  let indicatorColor = '';

  if (isOpen) {
    statusText = '🟢 OPEN NOW';
    statusColor = '#22c55e'; // Green
    indicatorColor = '#22c55e';
  } else {
    statusText = '🔴 CLOSED';
    statusColor = '#ef4444'; // Red
    indicatorColor = '#ef4444';

    // Calculate next opening
    if (currentTime < openingTime) {
      // Opens later today
      nextOpeningText = 'Opens at 9:00 AM today';
    } else {
      // Opens tomorrow
      nextOpeningText = 'Opens at 9:00 AM tomorrow';
    }
  }

  return {
    isOpen,
    statusText,
    nextOpeningText,
    statusColor,
    indicatorColor
  };
};
