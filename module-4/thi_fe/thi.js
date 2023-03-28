// phân trang
function movePage(nextPage) {
    loadSongs(nextPage);
}

function renderPage(songs) {
    let page = "";
    if (songs.number <= songs.totalPages - 1
        && songs.number > 0) {
        page += `
<button class="page-item btn  btn-sm" 
        onclick="movePage(${songs.number - 1})">
    Trước
</button>
`
    }
    for (let i = 1; i <= songs.totalPages; i++) {
        let pageItem = $(`<button class="page-item number btn  btn-sm pagination-sm"
                          onclick="movePage(${i - 1})">
    ${i}
</button>`);
        if (i === songs.number + 1) {
            pageItem.addClass("active");
        } else {
            pageItem.removeClass("active");
        }
        page += pageItem.prop('outerHTML');
    }

    if (songs.number >= 0 && songs.number < songs.totalPages -1) {
        page += `
<button class="page-item btn btn-sm" 
        onclick="movePage(${songs.number + 1})">
    Sau
</button>
`
    }
    $("#paging").html(page);
}


// List
function renderSong(songs) {
    let str = "";
    let stt = 1;
    for (let s of songs) {
        str += `
    
    <tr>
    <td>${stt++} </td>
    <td>${s.id} </td>
    <td>${s.name} </td>
    <td>${s.author} </td>
    <td>${s.date} </td>
    <td>${s.category.name} </td>
    <td><button class="btn btn-danger" data-toggle="modal" type="button" onclick="getSongInfor(${s.id},'${s.name}')" data-target="#exampleModal">Delete</button></td>
    </tr>>
   
    `

$("#list").html(str)
    }

}
function loadSongs(page) {
    let search = document.getElementById("search-name").value;
    $.ajax({
        type:"GET",
        url:`http://localhost:8080/api/songs?name=${search}&page=${page ? page : "0"}`,

        success : function (data) {
            renderPage(data);
            renderSong(data.content);
        },
        error : function (error) {
            console.log("không tìm thấy");
        }

    })

}

$(document).ready(function () {
    loadSongs();
})
//Delete

function getSongInfor(id,name) {
    document.getElementById("deleteId").value = id;
    document.getElementById("deleteName").innerText = name;
}


function deleteSong(){
    let id = document.getElementById("deleteId").value;

    $.ajax({
        type:"DELETE",
        url:`http://localhost:8080/api/songs/` + id,

        success : function (data) {
            console.log("Xóa thành công");
            loadSongs();

            $('#exampleModal').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        },
        error : function (error) {
            console.log("không tìm thấy");
        }

    })
}
// them moi
function save() {
    debugger
    let addForm = document.getElementById("addForm");
    let formData = new FormData(addForm);
    let song = {
        id : formData.get('id'),
        name : formData.get('name'),
        author: formData.get('author'),
        date: formData.get('date'),
        description : formData.get('description'),
        category : {
            id: formData.get('categoryId'),
        }
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type:"POST",
        url:`http://localhost:8080/api/songs`,
        data : JSON.stringify(song),
        success : function () {
            console.log("Thêm thành công");
            loadSongs();

            $('#modelId').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        },
        error : function (error) {
            console.log("không thêm được");
        }

    })
}
function categoryInfo(){
    $.ajax({
        type:"GET",
        url:`http://localhost:8080/api/categorys`,

        success : function (list) {
        let str = "";

            str += `
  <select class="form-control" id="categoryId" name="categoryId">
  `
            for (let l of list) {
                str += `<option value="${l.id}">${l.name}</option> `
            }
            `</select>`;

            $("#showCategory").html(str)
            
        },
        error : function (error) {
            console.log("không tìm thấy");
        }

    })
}

$(document).ready(function () {
    categoryInfo();
})

