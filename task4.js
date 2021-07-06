/*
You have been tasked with creating a helper function that will be used to determine the output of an array of data.
Each element of the array has the following structure:
  {
    state: <String> // a state to go to
    errorCode: <String> // optional error code
  }

The states have different functionalities:
  'processing' = execution should be delayed by 2 seconds, then fetch the next state
  'error' = handle the error code provided (see below)
  'success' = return from the helper with the object: { title: 'Order complete', message: null }

Handling error codes:
  'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
  'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
  null = return from the helper with an object: { title: 'Error page', message: null }
  undefined = return from the helper with an object: { title: 'Error page', message: null }

Example usage:
  getProcessingPage([{ state: 'processing' }, { state: 'error' }])
This code should return after 2 seconds with the object: { title: 'Error page', message: null }

To-do:
Provide the code and a description of how to run it

Starting point:
  * Gets the processing page
  * @param {array} data
  function getProcessingPage(data) {

  }
*/


// I assume the array lenght is always 2, as this would be similar to an API call (processing) and response (success or error).
// In order to run the code, please refer to the README file

/**
 * Gets the processing page
 * @param {array} data
 */
async function getProcessingPage(data) {
  let message;
  let title;
  for ({ state, errorCode } of data) {
    switch (state) {
      case 'processing':
        await new Promise((resolve) => setTimeout(resolve, 2000));
        break;
      case 'success':
        message = null;
        title = 'Order complete';
        break;
      case 'error':
        title = 'Error page';
        if (errorCode === 'NO_STOCK') {
          message = 'No stock has been found';
        } else if (errorCode === 'INCORRECT_DETAILS') {
          message = 'Incorrect details have been entered';
        } else if ([null, undefined].includes(errorCode)) {
          message = null;
        }
        break;
      default:
        message = 'Unknown error';
        title = 'Error page';
    }
  }

  return Promise.resolve({ title, message });
}

getProcessingPage([{ state: "processing" }, { state: "error" }]).then((res) => {
  console.log(res);
});
