AI Registration Assistant – Project Report

Task ID: AI-SS-001
Category: AI & Data Science
Project Title: Registration Assistant
Student Code: DAS009638

1. Introduction

The AI Registration Assistant is a front-end based student registration support application developed as part of the AI & Data Science internship task. The application helps students check course eligibility, explore available courses, receive course recommendations, interact with a lightweight AI registration assistant, and submit a demo registration request.

The project is designed to work directly in a web browser without requiring an external API, database, paid service, or internet connection.

2. Objective

The main objective of this project is to provide students with a simple and interactive registration assistant that can:

- Collect basic student academic information.
- Check eligibility based on qualification and percentage.
- Display suitable course recommendations.
- Provide course information through an AI-style assistant.
- Collect a course registration request.
- Validate user inputs.
- Provide registration confirmation.

3. Technologies Used

The project was developed using:

- HTML5 – Used to create the application structure and user interface.
- CSS3 – Used for styling, responsive design, and app-like dashboard appearance.
- JavaScript (ES6) – Used to implement application logic, eligibility checking, course recommendations, registration flow, and AI assistant interaction.
- Client-side rule-based AI – Used for lightweight intent and keyword matching in the registration assistant.

No external API or paid AI service is required.

4. Main Features

Student Academic Profile and Eligibility Checker

The student enters their name, qualification, and percentage. The application processes these details and checks the student's eligibility for available courses.

Course Explorer

The application provides information about six available courses. Students can explore the courses and identify suitable options.

Course Recommendation

Based on the student's qualification and percentage, the application recommends suitable courses.

AI Registration Assistant

The application includes a lightweight rule-based AI assistant. It uses keyword and intent matching to understand common student questions and provide relevant responses.

Registration Request Form

After selecting a course, the student can submit a demo registration request through the registration form.

Responsive Dashboard

The application uses a responsive, app-like interface so that the main features can be accessed easily from different screen sizes.

5. Working Process

Step 1: The student enters their name, qualification, and percentage.

Step 2: The student clicks Check My Eligibility.

Step 3: The application checks the entered details and displays suitable course recommendations.

Step 4: The student can explore the available courses.

Step 5: The student opens the AI Registration Assistant and asks questions about registration or courses.

Step 6: The student selects a suitable course.

Step 7: The student submits the demo registration request.

Step 8: The application displays the registration result/confirmation.

6. AI Approach

The current project uses a lightweight client-side rule-based AI approach rather than a cloud-based generative AI model.

The assistant identifies common keywords and matches them with predefined intents or responses. This approach keeps the application simple and allows it to run offline without an API key or external service.

This is suitable for an internship demonstration. In a future production version, the same interface could be connected to a Python/Flask backend, database, and an approved AI service.

7. Testing

The application was tested using different student inputs and interaction flows, including:

- Valid student name and academic details.
- Eligibility checking.
- Course recommendation.
- Course exploration.
- Common questions to the AI assistant.
- Course selection.
- Registration request submission.
- Invalid or incomplete input handling.

The main registration workflow was successfully demonstrated through the browser-based application.

8. Conclusion

The AI Registration Assistant successfully demonstrates a simple and user-friendly solution for student course registration support. It combines a responsive web interface with client-side eligibility checking, course recommendation logic, a rule-based AI assistant, and a registration request workflow.

The project does not require an external API, database, or paid service and can run directly in a browser. The project can be further enhanced in the future by adding a Python backend, database storage, advanced NLP, multilingual support, and a production-grade AI model.

GitHub Repository

https://github.com/kpsakthivel123/AI-Registration-Assistant

YouTube Demo

https://youtu.be/AeLNB0Ham6I?si=4O_4_8fDhlbn8HxG

Student Code: DAS009638
