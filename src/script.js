function loadData() {
  fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    .then((res) => res.json())
    .then((data) => dispalyPost(data));
}

const dispalyPost = function (data) {
  const posts = data.posts;
  const discussCard = document.getElementById("discuss-card");
  posts.forEach((post) => {
    // console.log(post);
    discussCard.innerHTML += `
  <div class="border border-purple-300 p-5 mb-5 rounded-xl bg-purple-50 grid grid-cols-[100px_1fr] text-left items-start">
    <div>
        <div class="h-3 w-3 rounded-full bg-green-700 border border-green-900 relative top-3"></div>
            <img src="${post.image}" alt="" height="70" width="70" class="rounded-xl">
        </div>
        <div class="mt-2" id="discuss-card">
            <div id="meta" class="flex gap-5 font-mulish">
                <p>#${post.category}</p>
                <p>Author: ${post.author.name}</p>
            </div>
        <h1 id="title" class="font-mulish font-extrabold text-xl my-2">${post.title}</h1>
        <p class="font-mulish text-lg text-purple-c opacity-60">${post.description}</p>
        <div class="h-1 w-full border-dashed border-purple-c border-t my-2.5"></div>
            <div class="flex justify-between">
                <div id="post-info" class="flex gap-5 font-mulish text-purple-c opacity-60">
                    <p><i class="fa-solid fa-comment-dots"></i> ${post.comment_count}</p>
                    <p><i class="fa-solid fa-eye"></i> ${post.view_count}</p>
                    <p><i class="fa-regular fa-eye"></i> ${post.posted_time} min</p>
                </div>
                <div>
                    <i onclick="readPost('${post.title}', '${post.view_count}')" class="fa-regular fa-envelope-open"></i>
                </div>
            </div>
        </div>
    </div>
    `;
  });
};

const readPost = (title, view_count) => {
  const readPostUl = document.getElementById("read-post");
  const count = document.getElementById("count");
  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "bg-white",
    "rounded-lg",
    "p-4",
    "mb-4"
  );
  li.innerHTML = `
    <h3 class="font-mulish text-md font-medium w-2/3">${title}</h3>
    <p class="font-mulish text-purple-c opacity-60 w-1/3 text-right"><i class="fa-regular fa-eye"></i> ${view_count}</p>
  `;
  readPostUl.appendChild(li);
  count.textContent = readPostUl.children.length;
  //   console.log(readPostUl.children.length);
};

loadData();
