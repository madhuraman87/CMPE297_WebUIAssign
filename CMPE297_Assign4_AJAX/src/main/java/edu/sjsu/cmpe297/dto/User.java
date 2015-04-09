package edu.sjsu.cmpe297.dto;


public class User 
{
	
	private String firstName;
	private String lastName;
	private String mailId;
	private String passwd; 
	private String dob;
	private String ssn;
	private String phone;
	private String ccn;
	
	
	public User() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(String firstName, String lastName, String mailId, String passwd, String dob, String ssn, String phone, String ccn)
	{
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mailId = mailId;
		this.passwd = passwd;
		this.dob = dob;
		this.ssn = ssn;
		this.phone = phone;
		this.ccn = ccn;
	}
	
	public void setDOB(String dob) {  
	    this.dob = dob;  
	}  
	  
	public String getDOB() {  
	    return dob;  
	} 
	
	public String getFirstName()
	{
		return firstName;
	}
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	
	public String getLastName()
	{
		return lastName;
	}
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	
	public String getMailId()
	{
		return mailId;
	}
	public void setMailId(String mailId)
	{
		this.mailId = mailId;
	}
	
	public String getPasswd()
	{
		return passwd;
	}
	public void setPasswd(String passwd)
	{
		this.passwd = passwd;
	}

	public String getSSN() {
		return ssn;
	}

	public void setSSN(String ssn) {
		this.ssn = ssn;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCCN() {
		return ccn;
	}

	public void setCCN(String ccn) {
		this.ccn = ccn;
	}
	
}
