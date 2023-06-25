const getSleepHours = day => {

    switch(day) {
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 8
      break;
      case 'thursday':
      return 10
      break; 
      case 'friday':
      return 14
      break;
      case 'saturday':
      return 12
      break;
      case 'sunday':
      return 12
    break;
      default:
      return "Error"
    }
    };
    
    const getActualSleepHours = () => 
      getSleepHours('monday') +
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
    
    const getIdealSleepHours = () => {
    let idealHours= 8;
    return idealHours * 7;
    }
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
      if (actualSleepHours === idealSleepHours) { 
        console.log("Great job!")
      } else if (actualSleepHours > idealSleepHours) {
        console.log("You have gotten " + (idealSleepHours-actualSleepHours*-1) + "extra hours of sleep!")
      } else if (actualSleepHours < idealSleepHours) {
        console.log("You should get some rest because you've slept " + (idealSleepHours-actualSleepHours) + " hours less than you should have this week.")
      }
      else {console.log("Error")}
    };
    
    calculateSleepDebt ()