people = [
    {"first_name": "Manav", "last_name": "Pampher", "email": "manavpampher@gmail.com"},
    {"first_name": "Jitesh", "last_name": "Singh", "email": "jitesh.singh@example.com"},
    {"first_name": "Yash", "last_name": "Raghuvanshi", "email": "yashraghuvans@gmail.com"},
    {"first_name": "Rahul", "last_name": "Singh", "email": "rahul.singh@example.com"},
    {"first_name": "Priya", "last_name": "Singh", "email": "priya.singh@example.com"},
]


print(f"{'First Name':<15}{'Last Name':<15}{'Email':<30}") 
print("-" * 60)  

for person in people:
    print(f"{person['first_name']:<15}{person['last_name']:<15}{person['email']:<30}")


