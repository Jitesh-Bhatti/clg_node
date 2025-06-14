import socket
host = socket.gethostname()
port = 5000
udp_client = socket.socket(type = socket.SOCK_DGRAM)

while True:
    data = input("Enter data to send : ")
    if not data:
        break
    udp_client.sendto(data.encode(), ("192.168.104.121",port))
    print("Ready to Receive Data")
    data, addr = udp_client.recvfrom(1024)
    if not data:
        break
    print("Received", data.decode())
udp_client.close()
