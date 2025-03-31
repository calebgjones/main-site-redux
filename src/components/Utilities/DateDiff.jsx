export function DateDiff(dt2, dt1) {
      const diffTime = Math.abs(dt2 - dt1);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      let years = Math.floor(diffDays / 365.25);
      let remainingDays = diffDays % 365.25;
      let months = Math.floor(remainingDays / 30);
      remainingDays = Math.floor(remainingDays % 30);
      if (months === 12) {
        months = 0;
        years += 1;}

    if (isNaN(months) && isNaN(remainingDays) && isNaN(years)) {
      return ''; 
    } else if (months === 0 && remainingDays === 0) {
      return 'It\'s my birthday, I\'m ' + years;
    } else if (months === 0) {
      if (remainingDays > 1) {
      return `${years} years and ${remainingDays} days old`;
      } else if (remainingDays === 1) {
        return `${years} years and ${remainingDays} day old`;
      }
    } else if (remainingDays === 0) {
      return `${years} years and ${months} months old!`;
    }else {
      if (remainingDays > 1) {
        return `${years} years, ${months} months, and ${remainingDays} days old`;
        } else if (remainingDays === 1) {
          return `${years} years, ${months} months, and ${remainingDays} day old`;
        }
    }
  }