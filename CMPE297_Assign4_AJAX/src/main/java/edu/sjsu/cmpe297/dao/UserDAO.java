package edu.sjsu.cmpe297.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import edu.sjsu.cmpe297.dto.User;
import org.apache.commons.codec.digest.DigestUtils;

public class UserDAO 
{
	private Connection connect;
	private Statement stmt;
	//private ResultSet rs;

	// Constructor with JDBC connection
	public UserDAO() 
	{
		try
		{
			try
			{
				Class.forName("com.mysql.jdbc.Driver");
			}
			catch (ClassNotFoundException e)
			{
				System.out.println("Unable to find MySQL JDBC Driver");
				e.printStackTrace();
			}
		connect = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/cmpe297","root","July@2787");
		}
		catch (SQLException se)
		{
			se.printStackTrace();
		}
	}
	
	public boolean addUser(User user) 
	{
		try
		{
			stmt = connect.createStatement();
			String query = "INSERT INTO `cmpe297`.`users` (`firstname`, `lastname`, `mailid`, `passwd`, `dob`, `ssn`, `phone`, `ccn`) VALUES ('" + DigestUtils.md5Hex(user.getFirstName()) + "', '" + DigestUtils.md5Hex(user.getLastName()) + "', '" + DigestUtils.md5Hex(user.getMailId()) + "', '" + DigestUtils.md5Hex(user.getPasswd()) + "', '" + user.getDOB() + "', '" + user.getSSN() + "', '" + user.getPhone() + "', '" + user.getCCN() + "');";
			stmt.executeUpdate(query);
			
			stmt.close();
			connect.close();
		}
		catch (SQLException se)
		{
			se.printStackTrace();
		}
		return true;
	}
	
	//	finally{
//		try {
//			stmt.close();
//			connect.close();
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
//     }

}
