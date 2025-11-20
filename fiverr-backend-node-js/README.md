## 🏗️ Architecture: Event-Driven (EDA)

Mtafiti Soko Limited uses **Event-Driven Architecture** powered by **Kafka** to decouple services:

- `ProjectPosted` → triggers bidding, AI matching, notifications  
- `MilestoneApproved` → auto-releases escrow  
- `ThesisSubmitted` → runs plagiarism, faculty review, archiving  

**Benefits**:  
- Scale plagiarism checker during finals without crashing  
- Add new features (e.g., AI summary) without downtime  
- Full audit trail for university compliance  

> *“One event. Many reactions. Zero bottlenecks.”*
