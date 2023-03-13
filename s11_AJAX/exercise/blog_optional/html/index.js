    // ?page=${page ? page : "0"
function loadBlogs(page, append) {
    $.ajax({
        type: "GET", url: `http://localhost:8080/rest/blogs?page=${page ? page : "0"}`, headers: {
            "Content-Type": "application/json",

        }, success: function (data) {
            renderBlogs(data.content, append);
            renderLoadMoreButton(data);
        }, error: function (error) {
            console.log(error);
        }
    })

}

$(document).ready(function () {
    loadBlogs();
})


function renderBlogs(blogs, append) {
    let elements = "";
    for (let blog of blogs) {
        elements +=
            `<table class="table">
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Content</th>
        <th>Author</th>
        <th>Category</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td >${blog.id}</td>
        <td >${blog.name}</td>
        <td >${blog.content}</td>
        <td >${blog.author}</td>
        <td >${blog.category}</td>
       
    </tr>
    </tbody>
</table>`;
    }
    if (append){
        $("#listBlogs").append(elements)
    }else {
        $("listBlogs").html
    }

}