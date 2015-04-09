package sjsu.cmpe297;

import org.eclipse.jetty.server.Server;

public class AppRunner {

	public static void main(String[] args) {
		Server server = new Server(8080);
		server.setHandler(new websocketHandler());
		try {
			server.start();
			server.join();
		} catch (Exception e) {			
			e.printStackTrace();
		}		
	}

}