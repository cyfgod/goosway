
package com.goosway.pisces.view.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.birt.report.utility.ParameterAccessor;

import com.goosway.pisces.view.constant.IConstants;

/**
 * JSAPI servlet to import required js files.
 *
 * 
 * @author Jerry Cheng
 *
 */
public class JSAPIServlet extends HttpServlet implements IConstants
{

	private static final long serialVersionUID = 2152321586480633805L;

	@Override
	protected void doGet( HttpServletRequest req, HttpServletResponse resp )
			throws ServletException, IOException
	{
		// Whether under debug mode
		String debug = req.getParameter( PARAM_DEBUG );
		req.setAttribute( "debug", ( "true".equalsIgnoreCase( debug ) ) );

		// Set locale
		req.setAttribute( "locale", ParameterAccessor.getLocale( req ) );

		// Forward to jsapi.jsp
		RequestDispatcher rd = this.getServletContext( ).getRequestDispatcher(
				"/jsapi.jsp" );
		rd.forward( req, resp );
	}
}
