<%--
  Created by IntelliJ IDEA.
  User: THC
  Date: 2/24/2023
  Time: 11:05 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Chuyển đôỉ tiền tệ</title>
</head>

<form method="get" action="/form">
    <label>Enter USD amount:</label>
    <input type="text" name="usdAmount" />
    <input type="submit" value="Convert" />
</form>

<p>Tiền Việt là:${result}</p>
<body>

</body>
</html>
