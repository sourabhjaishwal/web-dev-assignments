// Async-await in Javacript

/*
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "chaicode", url: "https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data .....")
        const userData = await fetchUserData()
        console.log("User data is fetched successfully!")
        console.log("User data:", userData)
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

getUserData()
*/

/*
fetchUserData
    .then()
    .catch()
*/

function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched!");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched!");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data....");
    // const blogData = await fetchPostData()
    // const commentData = await fetchCommentData()
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}

getBlogData();
