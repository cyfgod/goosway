<%
/**-- JSP file to include required js files.
 *
 * 
 * @author Jerry Cheng
 *
 */
 %>
 
<%@ page contentType="text/javascript;charset=utf-8" %>
<%@ page session="false" buffer="none" %>

<%
	String serverURL = request.getScheme( ) + "://" + request.getServerName( ) + ":" + request.getServerPort( );
	String contextPath = request.getContextPath( );
	String baseURL = serverURL + contextPath;
	
	String locale = (String)request.getAttribute( "locale" );
	locale = (locale != null) ? locale.toLowerCase(  ).replaceAll( "_", "-" ) : "";
%>

;(function(){
	PVConstants = {
		serverURL : "<%=serverURL%>",
		contextPath : "<%=contextPath%>",
		baseURL : "<%=baseURL%>",
		locale : "<%=locale%>"
	};
})();

<jsp:include page="./js/sweet.js"></jsp:include>
<jsp:include page="./js/core.js"></jsp:include>
<jsp:include page="./js/api.js"></jsp:include>