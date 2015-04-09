import redis.clients.jedis.Jedis;
public class Redistest {
	public static void main(String[] args) {
		Jedis jedis = new Jedis("localhost");
		System.out.println("Server connection successful!!");
		System.out.println("Server is connected at: " + jedis.ping());	
		System.out.println("Server information: " + jedis.info("server"));
		System.out.println("Client information: " + jedis.info("clients"));
		String testValue = "Madhu_CMPE297";		
		jedis.set("testKey", testValue);
		System.out.println("Value set into Redis is: " + testValue);
		System.out.println("Value retrieved from Redis is: " + jedis.get("testKey"));
	}
}