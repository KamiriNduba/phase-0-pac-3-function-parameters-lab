// Function to introduce with a given name
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function to introduce with a name and language
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function to introduce with a name and an optional language (defaulting to JavaScript)
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  