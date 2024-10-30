class Formatter {
  static capitalize(val) {
      if (typeof val !== 'string') return val; 
      return val.charAt(0).toUpperCase() + val.slice(1);
  }
   static sanitize(val) {
        if (typeof val !== 'string') return val; 
        return val.replace(/[^a-zA-Z0-9' -]/g, '');
    }
    static titleize(val) {
          if (typeof val !== 'string') return val; 
  
          const smallWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
          
          return val
              .toLowerCase() 
              .split(' ') 
              .map((word, index) => {
                  
                  if (index === 0 || !smallWords.includes(word)) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                  }
                  return word; 
              })
              .join(' '); 
      }
  }
  
  
  

