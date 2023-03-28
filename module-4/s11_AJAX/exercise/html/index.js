
// - blogs: danh sách sản phẩm cần được render lên browser
// - append : nếu là true thì dữ liệu sản phâm sẽ được append tiếp vào
// danh sách sản phẩm hiện tại, false sẽ ngược lại
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

        if (append) {
            // nếu append = true => sử dụng .append
            $("#listBlogs").append(elements);
        } else {
            // nếu append = false => sử dụng .html ghi đè lại danh sách sản phâẩm
            // hiện tại đươc hiển thị trên browser
            $("#listBlogs").html(elements);
        }

    }

    function loadBlogs(page, append) {
        let search = document.getElementById("name").value;
        $.ajax({
            type: "GET", url: `http://localhost:8080/rest/blogs?page=${page ? page : "0"}&tittle=` + search,
            headers: {
                "Content-Type": "application/json",

            }, success: function (data) {
                renderBlogs(data.content, append);
                renderLoadMoreButton(data);
            }, error: function (error) {
                console.log(error);
            }
        })

    };

    $(document).ready(function () {
        loadBlogs();
    });


    function loadMore(nextPage) {
        loadBlogs(nextPage, true);
    }


    // mục đích dùng để kiểm tra điều kiện và render nút load more
    function renderLoadMoreButton(blogPageData) {
        if (blogPageData.number < blogPageData.totalPages - 1) {
            $("#loadMoreContainer").html(
                `
            <button type="button" class="btn btn-primary"
                onclick="loadMore(${blogPageData.number + 1})">
                Load More
                </button>
            `
            );
        } else {

            $("#loadMoreContainer").remove();
        }
    }
}