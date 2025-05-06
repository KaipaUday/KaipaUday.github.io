// $lib/utils/dataManager.js

// Get user data from session storage
export function getUserData() {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  }
  
  // Use data in components
  export function useUserData(propertyPath) {
    const userData = getUserData();
    if (!userData) return null;
    
    // Access nested properties by path (e.g., "bio.summary")
    return propertyPath.split('.').reduce((obj, key) => 
      (obj && obj[key] !== undefined) ? obj[key] : null, userData);
  }
  
  // For specific data access examples:
  export function getContactInfo() {
    return useUserData('contact');
  }
  
  export function getBio() {
    return useUserData('bio');
  }
  
  export function getSkills() {
    return useUserData('skills');
  }