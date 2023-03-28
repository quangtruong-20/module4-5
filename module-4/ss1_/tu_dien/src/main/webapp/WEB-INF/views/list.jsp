<%--
  Created by IntelliJ IDEA.
  User: THC
  Date: 2/24/2023
  Time: 3:12 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/form" method="get">
    <div class="form-group">
        <label>Nhập từ tiếng Việt</label>
        <input type="text"
               class="form-control" name="word" >
    </div>
    <button type="submit" class="btn btn-primary" >Dịch</button>

</form>

<p>${result}</p>
</body>
</html>
