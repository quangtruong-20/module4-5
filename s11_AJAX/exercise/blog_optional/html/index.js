function renderBlogs(blogs, append) {
    let elements = "";
    for (let blog of blogs) {
        elements +=
            `
    <tr>
        <td >${blog.id}</td>
        <td >${blog.name}</td>
        <td >${blog.content}</td>
<!--        // <td >${blog.author}</td>-->
<!--        // <td >${blog.category}</td>-->
 
    </tr>
`;
    }
    if (append){
        $("#listBlogs").append(elements);
    }else {
        $("#listBlogs").html(elements);
    }

}

function loadBlogs(page, append) {
    $.ajax({
        type: "GET", url: `http://localhost:8080/rest/blogs?page=${page ? page : "0"}`,
        headers: {
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


function loadMore(nextPage) {
    loadBlogs(nextPage,true);
}
function renderLoadMore(blogPageData) {
    if (blogPageData.number <blogPageData.totalPages -1){
        $("#loadMoreContainer").html (
            `
            <button type="button" class="btn btn-primary"
                onclick="loadMore(${blogPageData.number + 1})">
                Load More
                </button>
            `
        )
    }else {
        $("#loadMoreContainer").remove();
    }
}
