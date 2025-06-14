import socket

host = socket.gethostname()
port = 2000

addr = (host, port)

server_socket = socket.socket()
server_socket.bind(Addr)

conn, addr = server_Socket.accept()
print("Connection from", str(addr))

while True:
    data = conn.recv(1024).decode()
    
    if not data:
        break
        
    print(data)
    
    data = input("->")
    conn.send(data.encode())
    
conn.close()
