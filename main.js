// ? task 1
// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user2",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//         id: "post2",
//         author: "user2",
//         body: "......",
//         comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"]
// };

// const copyOfPosts = {...posts};
// console.log(copyOfPosts);

// const copyOfPosts2 = Object.assign({}, posts);
// console.log(copyOfPosts2);

// ? task 2
// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user2",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//         id: "post2",
//         author: "user2",
//         body: "......",
//         comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"]
// };

// const copyOfPosts = {...posts};
// console.log(copyOfPosts);

// const copyOfPosts2 = JSON.parse(JSON.stringify(posts));
// console.log(copyOfPosts2);

// ? task 3
// const post = {
//   name: "posts",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comments: ["comment1", "comment2"],
// };

// const { comments: color, hello, ...rest } = post;

// color = undefined
// hello = undefined
// ...rest равно объекту




// ? task 4
// const comments = ["comment3", "comment4", "comment5", "comment1"];

// const [undefined, comment1, ...rest] = comments;

// undefined = undefined
// comment1 = comment3
// ...rest = массиву
