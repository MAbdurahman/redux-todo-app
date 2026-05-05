
export function getFirstName(fullName) {
   let name = [];
   name = fullName.split(' ');

   return name[0];
}

export function getLastName(fullName) {
   let name = [];
   name = fullName.split(' ');

   if (name.length <= 2) {
      return name[name.length - 1];

   } else {
      name = name[1];
      name = name.replace(',', '');
      return name;
   }
}

export function validateUserInfo(userName, fullName, email, password ) {

   let username_trimmed = userName.trim();
   let fullname_trimmed = fullName.trim();
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();

   const username_pattern = /^(?=[a-z])(?=.*\d)[a-z0-9]{4,16}$/;
   const username_start_pattern = /^(?=.*[a-z])/g;
   const username_allowable_pattern = /^[a-z0-9]*$/;
   const username_digit_pattern = /^(?=.*\d{1,})/g;

   const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;

   /************************* username conditional statements *************************/
   if (username_trimmed.length === 0) {
      return {isValid: false, error: 'Username is required!'};

   } else if (!username_trimmed.match(username_start_pattern)) {
      return {isValid: false, error: 'Username must start with a lowercase letter!'};

   } else if (!username_trimmed.match(username_allowable_pattern)) {
      return {isValid: false, error: 'Username must contain only lowercase letters and numbers!'};

   } else if (!username_trimmed.match(username_digit_pattern)) {
      return {isValid: false, error: 'Username must contain at least one number!'};

   } else {
      if (!username_trimmed.match(username_pattern)) {
         return {isValid: false, error: 'Username must be lowercase letters amd numbers, and between 4 and 16 characters!'};

      }
   }

   /************************* fullname conditional statements *************************/

   if (fullname_trimmed.length === 0) {
      return {isValid: false, error: 'First and last name are required!'};

   } else {
      if (!fullname_trimmed.match(fullname_pattern)) {
         return {isValid: false, error: 'Enter a valid first and last name!'};
      }
   }

   /************************* email conditional statements *************************/

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};

   } else {
      if (!email_trimmed.match(email_pattern)) {
         return {isValid: false, error: 'Enter a valid email!'};
      }
   }

   /************************* password conditional statements *************************/

   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be between 8 and 32 characters long!'};

   } else {
      return {isValid: true};
   }

}

export function validateEmailAndPassword(email, password) {
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();

   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;
   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};

   } else {
      if (!email_trimmed.match(email_pattern)) {
         return {isValid: false, error: 'Enter a valid email!'};
      }
   }


   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be between 8 and 32 characters long!'};

   } else {
      return {isValid: true};
   }

}

export function validatedNameEmailAndPassword(fullName, email, password) {
   let fullname_trimmed = fullName.trim();
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();


   const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


   /************************* fullname conditional statements *************************/

   if (fullname_trimmed.length === 0) {
      return {isValid: false, error: 'First and last name are required!'};

   } else {
      if (!fullname_trimmed.match(fullname_pattern)) {
         return {isValid: false, error: 'Enter a valid first and last name!'};
      }
   }

   /************************* email conditional statements *************************/

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};

   } else {
      if (!email_trimmed.match(email_pattern)) {
         return {isValid: false, error: 'Enter a valid email!'};
      }
   }

   /************************* password conditional statements *************************/

   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be between 8 and 32 characters long!'};

   } else {
      return {isValid: true};
   }

}


export function formatDate(ISODate) {
   const date = new Date(ISODate);
   /*return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;*/
   return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   });
}

export function formatWithDecimals(number) {
   return (Math.round(number * 100) / 100).toFixed(2);
}

export function addCommasToNumber(number) {
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/*===========================================================================

       Capitalize Words In JavaScript
==============================================================================*/

/**
 * makeString - convert any object to a string
 * @param object
 * @returns {string}
 */
function makeString(object) {
   if (object == null) {
      return '';
   }
   return '' + object;
}

/**
 * capitalizeFirst - capitalize the first letter of a string
 * @param str
 * @param lowercaseRest
 * @returns {string}
 */
export function capitalizeFirst(str, lowercaseRest) {
   str = makeString(str);
   const remainingChars = !lowercaseRest
      ? str.slice(1)
      : str.slice(1).toLowerCase();

   return str.charAt(0).toUpperCase() + remainingChars;
}


/**
 * capitalizeWords - capitalize the first letter of each word in a string
 * @param str
 * @returns {string}
 */
export function capitalizeWords(str) {
   str = makeString(str);
   return str.replace(/\b\w/g, letter => letter.toUpperCase());
}


/**
 * capitalizeFirstLetter - capitalize the first letter of a string
 * @param str
 * @returns {string}
 */
export function capitalizeFirstLetter(str) {
   str = makeString(str);
   return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Titleize refers to a style of capitalization used for titles, where the first and
 * last words are always capitalized, along with major words like nouns and verbs,
 * while minor words such as articles and short prepositions are typically lowercased.
 *This style is commonly used in titles of books, articles, and other works.
 *
 * @param str
 */
export function titleize(str) {
   return makeString(str)
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, function (c) {
         return c.toUpperCase();
      });
}

/**
 * @description - remove HTML tags from a String
 * @param str - a String
 * @returns {string} - returns a String with the tags removed
 */
export function removeHTMLTags(str) {
   return makeString(str).replace(/<\/?[^>]+>/g, '');
}

export const getClasses = classes =>
   classes
      .filter(item => item !== '')
      .join(' ')
      .trim();