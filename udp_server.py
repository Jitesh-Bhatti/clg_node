import socket
host = socket.gethostname()
port = 5000
udp_server = socket.socket(type=socket.SOCK_DGRAM)
udp_server.bind((host, port))

while True:
    print("Waiting for message")
    data, addr = udp_server.recvfrom(1024)
    print("Received", data.decode(), "from", addr)
    msg = input("Enter msg: ")
    udp_server.sendto(msg.encode(), addr)
udp_server.close()
