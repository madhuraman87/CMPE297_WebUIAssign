package sjsu.cmpe297;

import java.io.IOException;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketError;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.eclipse.jetty.websocket.server.WebSocketHandler;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;

@WebSocket
public class websocketHandler extends WebSocketHandler{

	@OnWebSocketClose
    public void onClose(int statusCode, String reason) {
		System.out.println("Close: statusCode=" + statusCode + ", reason=" + reason);
    }
 
    @OnWebSocketError
    public void onError(Throwable t) {
    	System.out.println("Error: " + t.getMessage());
    }
 
    @OnWebSocketConnect
    public void onConnect(Session session) {
    	System.out.println("Connect: " + session.getRemoteAddress().getAddress());
    }
 
    @OnWebSocketMessage
    public void onMessage(Session session, String message){
    	
    	float data = Float.parseFloat(message);
    	if(75 <= data && data <= 100 ){
    		try {
				session.getRemote().sendString("A Grade");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    	}else if(50 <= data && data < 75 ){
    		try {
				session.getRemote().sendString("B Grade");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
        }else if(25 <= data && data < 50 ){
        	try {
				session.getRemote().sendString("C Grade");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }else if(0 <= data && data < 25 ){
        	try {
				session.getRemote().sendString("D Grade");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
        }
    }
    
	@Override
	public void configure(WebSocketServletFactory factory) {
		factory.register(websocketHandler.class);		
	}

}	



