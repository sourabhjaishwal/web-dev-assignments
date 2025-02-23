// Async-Await and Promise.all

/*
Task 1: Async-Await with Promise.all
Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.
Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
*/

/*
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log("Fetched data:", { user, posts });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAllData();
*/

/*
  Task 2: Error Handling in Async/Await with Promise.all
  Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.
  Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
*/

/*
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success data");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log("All promises resolved:", results);
  } catch (error) {
    console.error("One of the promises failed:", error);
  }
}

handlePromises();

//Note:- One of the promises failed: Error occurred
*/

/*
  Task 3: Timeout with Async/Await and Promise.race
  Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
*/

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout exceeded"), timeout)
  );

  return Promise.race([promise, timeoutPromise]);
}

// Example usage:
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched data"), 1500);
  });
}

async function testTimeout() {
  try {
    const result = await fetchWithTimeout(fetchData(), 1000); // Timeout set to 1000 ms
    console.log(result); // Will log 'Timeout exceeded' because fetchData() takes 1500 ms
  } catch (error) {
    console.log(error); // Logs timeout message if exceeded
  }
}

testTimeout();

// Note:- Timeout exceeded
