function loadBlog(page,append){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/rest/blogs?page=${page ? page:"0"}`,
       headers:{
        "Content-Type":"application/json",
       },
        success: function (data) {
         renderBlogs(data.content,append);
         renderLoadMoreButton(data);
            
        },
        error: function
    });
}