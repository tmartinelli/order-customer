<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>	
	<head>
		<meta charset="UTF-8">
		<title>Order Customer System</title>
		<link rel="stylesheet" href="css/bootstrap.min.css">
	</head>
	<body>
		<input type="hidden" id="orderBackendURL" value="<c:out value='${orderBackendURL}'/>">
		<div id="orderListContainer" class="container">
			<div class="page"></div>
		</div>
		<script data-main="<c:url value='/js/main'/>" src="<c:url value='/js/require.js'/>"></script>
	</body>
</html>
